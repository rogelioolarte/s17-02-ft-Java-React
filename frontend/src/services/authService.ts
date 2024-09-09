import axios from "axios";
import { MAIN_API, ROLE_ID_USER, ROLE_ID_SPECIALIST, ROUTE_LOGIN, ROUTE_REGISTER } from "../config/routes_api";
import { User } from "../models/type";
import { DEFAULT_STATE } from "../store/userSlice";

export const register = async(username: string, password: string, type: string): Promise<User> => {
    try {
        const response = await axios.post(MAIN_API.concat(ROUTE_REGISTER), {
            username,
            password,
            rolesId: [type === "specialist" ? 
                ROLE_ID_SPECIALIST : type === "user" ? ROLE_ID_USER : null]
        });
        return { 
            token: response.data.token, 
            roleId: response.data.userResponseDTO.roles[0].roleId, 
            roleName: response.data.userResponseDTO.roles[0].roleName,
            userId: response.data.userResponseDTO.userId, 
            username: response.data.userResponseDTO.username, 
            }
    } catch(e){
        console.error(e)
    }
    return DEFAULT_STATE
}

export const login = async(username: string, password: string): Promise<User> => {
    try {
        const response = await axios.post(MAIN_API.concat(ROUTE_LOGIN), {
            username,
            password
        });
        return { 
            token: response.data.token, 
            roleId: response.data.userResponseDTO.roles[0].roleId, 
            roleName: response.data.userResponseDTO.roles[0].roleName,
            userId: response.data.userResponseDTO.userId, 
            username: response.data.userResponseDTO.username, 
        }
    } catch(e){
        console.error(e)
    }
    return DEFAULT_STATE
}