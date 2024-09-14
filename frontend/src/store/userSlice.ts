import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Profile, Specialist, User } from '../models/type';

export const DEFAULT_STATE: User = {
  token: "",
  roleName: "",
  roleId: "",
  userId: "",
  username: "",
  profile: {
    profileId: "",
    profileName: "",
    profileLastname: "",
    documentType: "",
    documentNumber: "",
    avatarUrl: "",
    birth: "",
    address: "",
    cityName: "",
    departmentName: "",
    email: "",
  },
  specialist: {
    specialistId: "",
    specialistCode: "",
    specialistName: "",
    specialistLastname: ""
  }
}

export const DEFAULT_STATE_PROFILE: Profile = {
  profileId: "",
  profileName: "",
  profileLastname: "",
  documentType: "",
  documentNumber: "",
  avatarUrl: "",
  birth: "",
  address: "",
  cityName: "",
  departmentName: "",
  email: "",
}

export const DEFAULT_STATE_SPECIALIST: Specialist = {
  specialistId: "",
  specialistCode: "",
  specialistName: "",
  specialistLastname: ""
}

const expectedUserStateKeys = ['token', 'roleName', 'roleId', 'userId', 'username'];

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
    updateUser: (state, action: PayloadAction<User>) => {
      return { ...state,
        token: action.payload.token,
        roleName: action.payload.roleName,
        roleId: action.payload.roleId,
        userId: action.payload.userId,
        username: action.payload.username
      }
    },
    setProfile: (state, action: PayloadAction<Profile>) => {
      return { ...state, profile: { ...action.payload } }
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      return { state, profile: {
          profileId: action.payload.profileId,
          profileName:action.payload.profileName,
          profileLastname: action.payload.profileLastname,
          documentType: action.payload.documentType,
          documentNumber: action.payload.documentNumber,
          avatarUrl: action.payload.avatarUrl,
          birth: action.payload.birth,
          address: action.payload.address,
          cityName: action.payload.cityName,
          email: action.payload.email,
        }
      }
    },
    setSpecialist: (state, action: PayloadAction<Specialist>) => {
      return { ...state, specialist: { ...action.payload } }
    },
    updateSpecialist: (state, action: PayloadAction<Specialist>) => {
      return { ...state, specialist: {
        specialistId: action.payload.specialistId,
        specialistCode: action.payload.specialistCode,
        specialtyId: action.payload.specialtyId,
        specialtyName: action.payload.specialtyName,
        bookingPrice: action.payload.bookingPrice,
        reputation: action.payload.reputation,
        specialistName: action.payload.specialistName,
        specialistLastname: action.payload.specialistLastname
    }
      }
    },
    resetUser: () => {
      return DEFAULT_STATE
    }
  }
})

export default userSlice.reducer
export const {
  resetUser,
  setUser,
  updateUser,
  setProfile,
  updateProfile,
  setSpecialist,
  updateSpecialist
} = userSlice.actions
