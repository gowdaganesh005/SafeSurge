import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import Home from './Components/Home/Home.jsx'
import DangerButton from './Components/Danger/DangerButton.jsx'
import Dangerform from './Components/Danger/Dangerform.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path=''  element={<Home/>}/>
      <Route path='/danger-form'  element={<Dangerform/>}/>
      

    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    
  </RouterProvider>
  
  </React.StrictMode>,
)
