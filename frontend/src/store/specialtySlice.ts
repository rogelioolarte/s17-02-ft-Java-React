import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Specialty } from '../models/type';

export const DEFAULT_STATE_SPECIALTY: Specialty[] = []

export const DEFAULT_ITEM: Specialty = {
    specialtyId: 0,
    specialtyName: "",
    specialtyDescription: "",
}

export const isValidSpecialties = (state: Specialty[]): state is Specialty[] => {
  return Object.keys(DEFAULT_STATE_SPECIALTY).every(key => key in state);
};

const initialState: Specialty[] = (() => {
  const persistedState = window.localStorage.getItem('session_state')
  return persistedState ? (isValidSpecialties(JSON.parse(persistedState).specialties) ? 
    JSON.parse(persistedState).specialties : DEFAULT_STATE_SPECIALTY) : DEFAULT_STATE_SPECIALTY
})()

export const specialtySlice = createSlice({
  name: 'specialties',
  initialState,
  reducers: {
    initSpecialties: (_state, action: PayloadAction<Specialty[]>) => {
      return [...action.payload]
    },
    resetSpecialties: () => {
      return DEFAULT_STATE_SPECIALTY
    }
  }
})

export default specialtySlice.reducer
export const { initSpecialties, resetSpecialties } = specialtySlice.actions
