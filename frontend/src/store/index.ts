/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import locationReducer from './locationSlice'
import specialtyReducer from './specialtySlice'
import specialistReducer from './specialistSlice'

const persistanceLocalStorageMiddleware = (store: any) => (next: any) => (action: any) => {
  next(action)
  window.localStorage.setItem('session_state', JSON.stringify(store.getState()))
}

export const store = configureStore({
  reducer: {
    user: userReducer,
    locations: locationReducer,
    specialties: specialtyReducer,
    specialists: specialistReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(persistanceLocalStorageMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch