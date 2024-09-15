/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from '../config/axiosConfig';
import { ROUTE_SPECIALIST } from '../config/routes_api';
import { Specialist } from '../models/type';
import { DEFAULT_SPECIALISTS, DEFAULT_ITEM_SPECIALIST } from '../store/specialistSlice';
import { managedCatchError } from './authService';

export const registerSpecialist = async(specialistCode: string,
    specialtyId: number, bookingPrice: number, reputation: number): Promise<Specialist> => {
    try {
        const response = await instance.post(ROUTE_SPECIALIST, {
            specialistCode,
            specialty: { specialtyId },
            bookingPrice,
            reputation,
        });
        return response.data
    } catch (error: any) {
        managedCatchError(error)
    }
    return DEFAULT_ITEM_SPECIALIST
}

export const updateSpecialist = async(specialistCode: string,
    specialtyId: number, bookingPrice: number, reputation: number): Promise<Specialist> => {
    try {
        const response = await instance.post(ROUTE_SPECIALIST, {
            specialistCode,
            specialty: { specialtyId },
            bookingPrice,
            reputation,
        });
        return response.data
    } catch (error: any) {
        managedCatchError(error)
    }
    return DEFAULT_ITEM_SPECIALIST
}

export const getSpecialists = async(): Promise<Specialist[]> => {
    try {
        const response = await instance.get(ROUTE_SPECIALIST);
        return response.data.content
    } catch (error: any) {
        managedCatchError(error)
    }
    return DEFAULT_SPECIALISTS
}