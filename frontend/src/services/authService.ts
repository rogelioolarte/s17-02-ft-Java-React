/* eslint-disable @typescript-eslint/no-explicit-any */
import apiClient from '../config/apiClient';
import { ROLE_ID_USER, ROLE_ID_SPECIALIST, ROUTE_LOGIN, ROUTE_REGISTER } from "../config/routes_api";
import { User } from "../models/type";
import { DEFAULT_STATE } from "../store/userSlice";
import { toast } from 'sonner'

export const register = async(username: string, password: string, type: string): Promise<User> => {
    try {
        const response = await apiClient.post(ROUTE_REGISTER, {
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
    } catch (error: any) {
        if (error.response && error.response.status === 400) {
            toast.error(error.response.data.message || "Error en la solicitud", 
                { duration: 2000, closeButton: true });
        } else {
            toast.error("Ocurrió un error inesperado", { duration: 2000, closeButton: true });
        }
    }
    return DEFAULT_STATE
}

export const login = async(username: string, password: string): Promise<User> => {
    try {
        const response = await apiClient.post(ROUTE_LOGIN, {
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
    } catch (error: any) {
        if (error.response && error.response.status === 400) {
            toast.error(error.response.data.message || "Error en la solicitud", 
                { duration: 2000, closeButton: true });
        } else {
            toast.error("Ocurrió un error inesperado", { duration: 2000, closeButton: true });
        }
    }
    return DEFAULT_STATE
}