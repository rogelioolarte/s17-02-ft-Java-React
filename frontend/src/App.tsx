import { Navigate, Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './components/pure/Footer'
import NavBar from './components/container/NavBar'
import { toast, Toaster } from 'sonner'
import { useUserActions } from './hooks/useUserActions'
import { useEffect, useState } from 'react'
import { useLocationActions } from './hooks/useLocationActions'
import { getDepartments } from './services/departmentsService'
import { isValidLocations } from './store/locationSlice'
import { useSpecialtyActions } from './hooks/useSpecialtyActions'
import { getSpecialties } from './services/specialtyService'
import { isValidSpecialties } from './store/specialtySlice'

function App() {
  const location = useLocation()
  const { user } = useUserActions()
  const { locations, useInitLocations } = useLocationActions()
  const { specialties, useInitSpecialties } = useSpecialtyActions()
  const [isExternalRoute, setIsExternalRoute] = useState(true)
  const children = (
    <div className='min-h-screen min-w-screen flex flex-col'>
      { user.token === "" && isExternalRoute ? <NavBar/> : null }
      <Outlet/>
      <Footer/>
      <Toaster visibleToasts={1} closeButton={true} />
    </div>)

  const obtainDepartments = async () => {
    const response = await getDepartments()
    if(isValidLocations(response)){
      useInitLocations(response)
    } else {
      toast.error("El servidor API se encuentra iniciandose...",
        { duration: 2000, closeButton: true });
    }
  }
  const obtainSpecialties = async () => {
    const response = await getSpecialties()
    if(isValidSpecialties(response)){
      useInitSpecialties(response)
    } else {
      toast.error("El servidor API se encuentra iniciandose...",
        { duration: 2000, closeButton: true });
    }
  }

  useEffect(() => {
    console.log(location.state)
    if(location.pathname === '/' || location.pathname === "/register/user" ||
      location.pathname === "/register/specialist" || location.pathname === "/login" ||
      location.pathname === "/register/profile" || location.pathname === "/register/check"
    ) {
      setIsExternalRoute(true)
    } else {
      setIsExternalRoute(false)
    }
  }, [location.pathname])

  useEffect(() => {
      const intervalId = setInterval(() => {
        if (locations.length === 0) {
          obtainDepartments()
        }
      }, 2000);
      return () => clearInterval(intervalId);
  }, [locations]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (specialties.length === 0) {
        obtainSpecialties()
      }
    }, 2000);
    return () => clearInterval(intervalId);
  }, [specialties])

  if ((user.token !== "" &&
    (user.roleName === "ROLE_SPECIALIST"  || user.roleName === "ROLE_USER") &&
    user.state === "final") && isExternalRoute) {
    return <Navigate to="/home" replace />
  }
  return children
}

export default App
