import { useAppDispatch, useAppSelector } from './store'
import { resetUser, setUser } from '../store/userSlice'
import { User } from '../models/type'

export const useUserActions = () => {
  const user: User = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  /**
   * This method set a User in the Context
   * @param {*} data This parameter required a User 
   */
  const useSetUser = (data: User) => {
    dispatch(setUser(data))
  }

  /**
   * This method reset the User
   */
  const useResetUser = () => {
    dispatch(resetUser())
    
  }

  return { useResetUser, useSetUser, user }
}
