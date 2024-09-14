/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from '../config/axiosConfig';
import { ROUTE_SPECIALIST, ROUTE_SPECIALTY } from '../config/routes_api';
import { Specialist } from '../models/type';
import { DEFAULT_STATE_SPECIALIST, DEFAULT_STATE_SPECIALISTS } from '../store/userSlice';
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
    return DEFAULT_STATE_SPECIALIST
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
    return DEFAULT_STATE_SPECIALIST
}

export const getSpecialists = async(): Promise<Specialist[]> => {
    try {
        const response = await instance.get(ROUTE_SPECIALTY);
        return response.data.content
    } catch (error: any) {
        managedCatchError(error)
    }
    return DEFAULT_STATE_SPECIALISTS
}