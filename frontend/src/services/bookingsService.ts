/* eslint-disable @typescript-eslint/no-explicit-any */
import apiClient from '../config/apiClient';
import { ROUTE_BOOKINGS } from '../config/routes_api';
import { DEFAULT_STATE } from "../store/userSlice";
import { toast } from 'sonner'

export const getBooking = async(): Promise<any> => {
    try {
        const response = await apiClient.post(ROUTE_BOOKINGS, {
            
        });
        return response.data
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