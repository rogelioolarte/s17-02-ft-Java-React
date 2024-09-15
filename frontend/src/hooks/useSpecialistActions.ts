import { Specialist } from '../models/type'
import { initSpecialists, resetSpecialists } from '../store/specialistSlice'
import { useAppDispatch, useAppSelector } from './store'
  
  export const useSpecialistActions = () => {
    const specialists = useAppSelector(state => state.specialists)
    const dispatch = useAppDispatch()
  
    /**
     * This method add a List of Specialists
     * @param {[]} data This parameter required a array of Specialists
     */
    const useInitSpecialists = (data: Specialist[]) => {
      dispatch(initSpecialists(data))
    }

    /**
     * This method reset the List of Specialists
     */
    const useResetSpecialists = () => {
      dispatch(resetSpecialists())
    }
  
    return {
        useInitSpecialists,
        useResetSpecialists,
        specialists
    }
  }
  