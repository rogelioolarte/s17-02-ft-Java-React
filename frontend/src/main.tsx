import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { store } from './store'
import routes from './config/routes'
import { ThemeProvider } from '@material-tailwind/react'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={createBrowserRouter(routes)} />
      </Provider>
  </ThemeProvider>
    
)
