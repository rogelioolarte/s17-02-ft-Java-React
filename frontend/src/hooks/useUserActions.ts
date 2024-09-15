import { useAppDispatch, useAppSelector } from './store'
import { setUserState, resetUser, setUser, updateUser, setProfile,
  updateProfile, setSpecialist, updateSpecialist } from '../store/userSlice'
import { resetLocations } from '../store/locationSlice'
import { resetSpecialties } from '../store/specialtySlice'
import { Profile, Specialist, User } from '../models/type'

export const useUserActions = () => {
  const user: User = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()
  const isRegistered = (user.token !== "" && user.profile?.profileId !== "" &&
    (user.specialist?.specialistCode !== ""  || user.roleName === "ROLE_USER") &&
    user.state === "final")

  /**
   * This method set a User in the Context
   * @param {*} data This parameter required a User 
   */
  const useSetUserState = (data: string) => {
    dispatch(setUserState(data))
  }
  
  /**
   * This method set a User in the Context
   * @param {*} data This parameter required a User 
   */
  const useSetUser = (data: User) => {
    dispatch(setUser(data))
  }

  /**
   * This method update a User in the Context
   * @param {*} data This parameter required a User 
   */
  const useUpdateUser = (data: User) => {
    dispatch(updateUser(data))
  }

  /**
   * This method set a Profile in the Context
   * @param {*} data This parameter required a Profile 
   */
  const useSetProfile = (data: Profile) => {
    dispatch(setProfile(data))
  }

  /**
   * This method update a Profile in the Context
   * @param {*} data This parameter required a Profile 
   */
  const useUpdateProfile = (data: Profile) => {
    dispatch(updateProfile(data))
  }

  /**
   * This method set a Profile in the Context
   * @param {*} data This parameter required a Profile 
   */
  const useSetSpecialist = (data: Specialist) => {
    dispatch(setSpecialist(data))
  }

  /**
   * This method update a Profile in the Context
   * @param {*} data This parameter required a Profile 
   */
  const useUpdateSpecialist = (data: Specialist) => {
    dispatch(updateSpecialist(data))
  }

  /**
   * This method reset the User
   */
  const useResetUser = () => {
    dispatch(resetSpecialties())
    dispatch(resetLocations())
    dispatch(resetUser())
    
  }

  return { user, isRegistered, useSetUserState, useResetUser, useSetUser, useUpdateUser,
    useSetProfile, useUpdateProfile, useSetSpecialist, useUpdateSpecialist }
}