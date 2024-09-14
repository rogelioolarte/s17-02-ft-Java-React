/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from '../config/axiosConfig';
import { ROUTE_BOOKINGS } from '../config/routes_api';
import { DEFAULT_STATE } from "../store/userSlice";
import { managedCatchError } from './authService';

export const getBooking = async(): Promise<any> => {
    try {
        const response = await instance.get(ROUTE_BOOKINGS);
        return response.data
    } catch (error: any) {
        managedCatchError(error)
    }
    return DEFAULT_STATE
}