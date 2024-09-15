/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from '../config/axiosConfig';
import { ROUTE_SPECIALTY } from '../config/routes_api';
import { Specialty } from '../models/type';
import { DEFAULT_SPECIALTIES } from '../store/specialtySlice';
import { managedCatchError } from './authService';

export const getSpecialties = async(): Promise<Specialty[]> => {
    try {
        const response = await instance.get(ROUTE_SPECIALTY);
        return response.data.content.map((v: Specialty) => ({
            specialtyId: v.specialtyId,
            specialtyName: v.specialtyName,
            specialtyDescription: v.specialtyDescription,
        }))
    } catch (error: any) {
        managedCatchError(error)
    }
    return DEFAULT_SPECIALTIES
}
