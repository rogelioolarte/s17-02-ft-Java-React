import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Department } from '../models/type';

const DEFAULT_STATE: Department[] = []

export const DEFAULT_ITEM: Department = { 
    departmentId: 0,
    departmentName: "",
    cities: []
}

const isValidLocation = (state: any): state is Department => {
  return Object.keys(DEFAULT_STATE).every(key => key in state);
};

const initialState: Department[] = (() => {
  const persistedState = window.localStorage.getItem('session_state')
  return persistedState ? (isValidLocation(JSON.parse(persistedState).locations) ? 
    JSON.parse(persistedState).locations: DEFAULT_STATE) : DEFAULT_STATE
})()

export const locationSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    initLocations: (_state, action: PayloadAction<Department[]>) => {
      return [...action.payload]
    },
    resetLocations: () => {
      return DEFAULT_STATE
    }
  }
})

export default locationSlice.reducer
export const { initLocations, resetLocations } = locationSlice.actions
