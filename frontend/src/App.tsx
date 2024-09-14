import { Navigate, Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './components/pure/Footer'
import NavBar from './components/container/NavBar'
import { toast, Toaster } from 'sonner'
import { useUserActions } from './hooks/useUserActions'
import { useEffect, useState } from 'react'
import { useLocationActions } from './hooks/useLocationActions'
import { getDepartments } from './services/departmentsService'
import { isValidLocation } from './store/locationSlice'

function App() {
  const { user } = useUserActions()
  const { locations, useInitLocations } = useLocationActions()
  const obtainDepartments = async () => {
    if(locations.length === 0) {
      const response = await getDepartments()
      if(isValidLocation(response)){
        useInitLocations(response)
      } else {
        toast.error("El servidor API se encuentra iniciandose...",
          { duration: 2000, closeButton: true });
      }
    }
  }
  const location = useLocation()
  const [isExternalRoute, setIsExternalRoute] = useState(true)
  const children = (
    <div className='min-h-screen min-w-screen flex flex-col'>
      {user.token === "" && isExternalRoute ? 
        <NavBar/> : null
      }
      <Outlet/>
      <Footer/>
      <Toaster visibleToasts={1} closeButton={true} />
    </div>)

  useEffect(() => {
    if(location.pathname === '/' || location.pathname === "/register/user" ||
      location.pathname === "/register/specialist" || location.pathname === "/login") {
      setIsExternalRoute(true)
    } else {
      setIsExternalRoute(false)
    }
  }, [location.pathname])

  useEffect(() => {
    if (locations.length === 0) {
      const intervalId = setInterval(() => {
        obtainDepartments()
      }, 5000);
      return () => clearInterval(intervalId);
    }
  }, [location]);

  if (user.token !== "" && isExternalRoute) {
    return <Navigate to="/home" state={{ from: location }} replace />
  }
  return children
}

export default App
