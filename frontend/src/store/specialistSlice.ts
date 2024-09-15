import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Specialist } from '../models/type';

export const DEFAULT_SPECIALISTS = []

export const DEFAULT_ITEM_SPECIALIST: Specialist = {
  specialistId: "",
  specialistCode: "",
  specialistName: "",
  specialistLastname: ""
}

export const isValidSpecialists = (state: Specialist[]): state is Specialist[] => {
  return Object.keys(DEFAULT_SPECIALISTS).every(key => key in state);
};

const initialState: Specialist[] = (() => {
  const persistedState = window.localStorage.getItem('session_state')
  return persistedState ? (isValidSpecialists(JSON.parse(persistedState).specialists) ? 
    JSON.parse(persistedState).specialists : DEFAULT_SPECIALISTS) : DEFAULT_SPECIALISTS
})()

export const specialistSlice = createSlice({
  name: 'specialists',
  initialState,
  reducers: {
    initSpecialists: (_state, action: PayloadAction<Specialist[]>) => {
      return [...action.payload]
    },
    resetSpecialists: () => {
      return DEFAULT_SPECIALISTS
    }
  }
})

export default specialistSlice.reducer
export const { initSpecialists, resetSpecialists } = specialistSlice.actions
