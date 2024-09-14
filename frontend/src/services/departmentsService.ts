/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from '../config/axiosConfig';
import { ROUTE_DEPARTMENT } from '../config/routes_api';
import { Department } from '../models/type';
import { DEFAULT_STATE_LOCATION } from '../store/locationSlice';
import { managedCatchError } from './authService';

export const getDepartments = async(): Promise<Department[]> => {
    try {
        const response = await instance.get(ROUTE_DEPARTMENT);
        console.log(response)
        return response.data
    } catch (error: any) {
        managedCatchError(error)
    }
    return DEFAULT_STATE_LOCATION
}