import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import Home from './Components/Home/Home.jsx'
import DangerButton from './Components/Danger/DangerButton.jsx'
import Dangerform from './Components/Danger/Dangerform.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


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
  <ToastContainer 
     position="top-right" // Position of the toast notifications
     autoClose={5000} // Auto-close after 5 seconds
     hideProgressBar={false} // Show progress bar
     newestOnTop={false} // Newest toast on top
     closeOnClick // Allow closing by clicking
     rtl={false} // Right-to-left language
     pauseOnFocusLoss // Pause when focus is lost
     draggable // Allow dragging
     pauseOnHover
    />
  
  </React.StrictMode>,
)
