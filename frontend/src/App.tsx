import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/pure/Footer'
import NavBar from './components/container/NavBar'
import { Toaster } from 'sonner'
import { useUserActions } from './hooks/useUserActions'

function App() {
  const { user } = useUserActions()

  return (
    <div className='min-h-screen min-w-screen flex flex-col'>
      {user.token === "" ? <NavBar/> : null}
      <Outlet/>
      <Footer/>
      <Toaster visibleToasts={1} closeButton={true} />
    </div>
    
  )
}

export default App
