import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../models/type';

export const DEFAULT_STATE: User = {
  token: "",
  roleName: "",
  roleId: "",
  userId: "",
  username: "",
  email: "",
  profileId: "",
  profileName: "",
  profileLastname: "",
  documentType: "",
  documentNumber: "",
  avatarUrl: "",
  birth: "",
  address: "",
  cityName: "",
}

const expectedUserStateKeys = ['token', 'roleName', 'roleId', 'userId','username'];

export const isValidUser = (state: User): state is User => {
  if (!expectedUserStateKeys.every(key => key in state)) {
    return false;
  }
  return true;
};

const initialState = (() => {
  const persistedState = window.localStorage.getItem('session_state');
  return persistedState ? (isValidUser(JSON.parse(persistedState).user) ? JSON.parse(persistedState).user : DEFAULT_STATE) : DEFAULT_STATE;
})();

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_state, action: PayloadAction<User>) => {
      return { ...action.payload }
    },
    resetUser: () => {
      return DEFAULT_STATE
    }
  }
})

export default userSlice.reducer
export const { resetUser, setUser } = userSlice.actions
