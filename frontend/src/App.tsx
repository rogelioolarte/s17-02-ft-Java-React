import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/pure/Footer'
import NavBar from './components/container/NavBar'
import { Toaster } from 'sonner'

function App() {

  return (
    <div className='min-h-screen min-w-screen flex flex-col'>
      <NavBar/>
      <Outlet/>
      <Footer/>
      <Toaster visibleToasts={1} closeButton={true} />
    </div>
    
  )
}

export default App
