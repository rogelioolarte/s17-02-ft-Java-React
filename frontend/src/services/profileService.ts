/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from '../config/axiosConfig';
import { ROUTE_PROFILES, ROUTE_UPDATE_PROFILE } from '../config/routes_api';
import { Profile } from '../models/type';
import { DEFAULT_STATE_PROFILE } from "../store/userSlice";
import { managedCatchError } from './authService';

export const registerProfile = async(profileName: string, profileLastname: string,
    documentType: string, documentNumber: string, avatarUrl: string, 
    birth: string, address: string, cityId: number,
    cityName: string,  userId: string): Promise<Profile> => {
    try {
        const response = await instance.post(ROUTE_PROFILES, {
            profileName, profileLastname, documentType,
            documentNumber, avatarUrl, birth,
            address, city: { cityId, cityName }, user : { userId }
        });
        return {
            profileId: response.data.profileId,
            profileName: response.data.profileName,
            profileLastname: response.data.profileLastname,
            documentType: response.data.documentType,
            documentNumber: response.data.documentNumber,
            avatarUrl: response.data.avatarUrl,
            birth: response.data.birth,
            address: response.data.address,
            cityId: response.data.city.cityId,
            cityName: response.data.city.cityName,
            departmentId: response.data.city.department.departmentId,
            departmentName: response.data.city.department.departmentName,
            email: response.data.user.username,
        }
    } catch (error: any) {
        managedCatchError(error)
    }
    return DEFAULT_STATE_PROFILE
}

export const updateProfile = async(profileName: string, profileLastname: string,
    documentType: string, documentNumber: string, avatarUrl: string, 
    birth: string, address: string, cityId: number,
    cityName: string,  userId: string): Promise<Profile> => {
    try {
        const response = await instance.put(ROUTE_UPDATE_PROFILE, {
            profileName, profileLastname, documentType,
            documentNumber, avatarUrl, birth,
            address, city: { cityId, cityName }, user : { userId }
        });
        return {
            profileId: response.data.profileId,
            profileName: response.data.profileName,
            profileLastname: response.data.profileLastname,
            documentType: response.data.documentType,
            documentNumber: response.data.documentNumber,
            avatarUrl: response.data.avatarUrl,
            birth: response.data.birth,
            address: response.data.address,
            cityName: response.data.cityName,
            email: response.data.email,
        }
    } catch (error: any) {
        managedCatchError(error)
    }
    return DEFAULT_STATE_PROFILE
}