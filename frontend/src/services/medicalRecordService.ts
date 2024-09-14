/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from '../config/axiosConfig';
import { ROUTE_CLINICAL_RECORDS } from '../config/routes_api';
import { DEFAULT_STATE } from "../store/userSlice";
import { managedCatchError } from './authService';

export const getClinicalRecords = async(): Promise<any> => {
    try {
        const response = await instance.get(ROUTE_CLINICAL_RECORDS);
        return response.data
    } catch (error: any) {
        managedCatchError(error)
    }
    return DEFAULT_STATE
}