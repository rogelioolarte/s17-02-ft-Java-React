import { Navigate, Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './components/pure/Footer'
import NavBar from './components/container/NavBar'
import { Toaster } from 'sonner'
import { useUserActions } from './hooks/useUserActions'
import { useEffect, useState } from 'react'

function App() {
  const { user } = useUserActions()
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

  if (user.token !== "" && isExternalRoute) {
    return <Navigate to="/home" state={{ from: location }} replace />
  }
  return children
}

export default App
