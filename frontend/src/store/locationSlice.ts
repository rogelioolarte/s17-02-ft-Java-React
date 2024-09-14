import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Department } from '../models/type';

export const DEFAULT_STATE_LOCATION: Department[] = []

export const DEFAULT_ITEM: Department = { 
    departmentId: 0,
    departmentName: "",
    cities: []
}

export const isValidLocations = (state: Department[]): state is Department[] => {
  return Object.keys(DEFAULT_STATE_LOCATION).every(key => key in state);
};

const initialState: Department[] = (() => {
  const persistedState = window.localStorage.getItem('session_state')
  return persistedState ? (isValidLocations(JSON.parse(persistedState).locations) ? 
    JSON.parse(persistedState).locations: DEFAULT_STATE_LOCATION) : DEFAULT_STATE_LOCATION
})()

export const locationSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    initLocations: (_state, action: PayloadAction<Department[]>) => {
      return [...action.payload]
    },
    resetLocations: () => {
      return DEFAULT_STATE_LOCATION
    }
  }
})

export default locationSlice.reducer
export const { initLocations, resetLocations } = locationSlice.actions
