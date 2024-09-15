import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Specialty } from '../models/type';

export const DEFAULT_SPECIALTIES: Specialty[] = []

export const DEFAULT_ITEM_SPECIALTY: Specialty = {
  specialtyId: 0,
  specialtyName: "",
  specialtyDescription: "",
}

export const isValidSpecialties = (state: Specialty[]): state is Specialty[] => {
  return Object.keys(DEFAULT_SPECIALTIES).every(key => key in state);
};

const initialState: Specialty[] = (() => {
  const persistedState = window.localStorage.getItem('session_state')
  return persistedState ? (isValidSpecialties(JSON.parse(persistedState).specialties) ? 
    JSON.parse(persistedState).specialties : DEFAULT_SPECIALTIES) : DEFAULT_SPECIALTIES
})()

export const specialtySlice = createSlice({
  name: 'specialists',
  initialState,
  reducers: {
    initSpecialties: (_state, action: PayloadAction<Specialty[]>) => {
      return [...action.payload]
    },
    resetSpecialties: () => {
      return DEFAULT_SPECIALTIES
    }
  }
})

export default specialtySlice.reducer
export const { initSpecialties, resetSpecialties } = specialtySlice.actions
