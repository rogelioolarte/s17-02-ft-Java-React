import { Specialty } from '../models/type'
import { initSpecialties, resetSpecialties } from '../store/specialtySlice'
import { useAppDispatch, useAppSelector } from './store'
  
  export const useSpecialtyActions = () => {
    const specialties = useAppSelector(state => state.specialties)
    const dispatch = useAppDispatch()
  
    /**
     * This method add a List of Specialties
     * @param {[]} data This parameter required a array of Specialties
     */
    const useInitSpecialties = (data: Specialty[]) => {
      dispatch(initSpecialties(data))
    }

    /**
     * This method reset the List of Specialties
     */
    const useResetSpecialties = () => {
      dispatch(resetSpecialties())
    }
  
    return {
      useInitSpecialties,
      useResetSpecialties,
      specialties
    }
  }
  