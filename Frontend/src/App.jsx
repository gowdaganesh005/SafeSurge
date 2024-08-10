

import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import DangerButton from './Components/Danger/DangerButton'
import MissingList from './Components/MissingBoard/MissingList.jsx'

function App() {
  

  return (
   <>
   <Header/>
   <Outlet />
   <DangerButton />
   
   <Footer />
   </>
  )
}

export default App
