import { Department } from '../models/type'
import { initLocations, resetLocations } from '../store/locationSlice'
import { useAppDispatch, useAppSelector } from './store'
  
  export const useLocationActions = () => {
    const locations = useAppSelector(state => state.locations)
    const dispatch = useAppDispatch()
  
    /**
     * This method add a List of Departments
     * @param {[]} data This parameter required a array of Departments
     */
    const useInitLocations = (data: Department[]) => {
      dispatch(initLocations(data))
    }

    /**
     * This method reset the List of Departments
     */
    const useResetLocations = () => {
      dispatch(resetLocations())
    }
  
    return {
      useInitLocations,
      useResetLocations,
      locations
    }
  }
  