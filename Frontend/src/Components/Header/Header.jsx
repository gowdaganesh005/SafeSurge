import { Link, NavLink } from "react-router-dom"
import { store } from "../../store/store"
import { useSelector } from "react-redux"
import { useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"
import { useDispatch } from "react-redux"
import { logout,clearState } from "../../Features/userSlicer"
import { useNavigate } from "react-router-dom"


function Header(){
  const axios1 = axios.create({
    baseURL: 'http://52.2.25.130:8000/api/v1',
    withCredentials: true,
  });

  const dispatch=useDispatch()

  const isLogin=useSelector(state=> state.auth.status )
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };


  const [errors,setError]=useState("")


  async function   handleLogout(){
    try {

      await axios1.post("http://52.2.25.130:8000/api/v1/users/logout",{},{headers:{
        "Content-Type": "application/json",
      }})
      dispatch(logout())
      dispatch(clearState())

      toast.success("Logged out SuccessFully ")

      
    } catch (error) {
      if (error.response) {
              
        const errorMessage = error.response.data.message || "An error occurred";
        setError(errorMessage);
      } else {
        setError("Network error or server is down.");
      }
      toast.error(errors)
    }

  }
  const navigate=useNavigate()
  const handleChatbot=()=>{

    navigate("/chatbot")
  }
  
    return (
        <>
        <header className="bg-white w-screen">
       
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <NavLink  to="/" className={({isActive})=>`text-sm font-semibold ${isActive ? "text-orange-600":"  text-teal-600"}block`} >
          <span className="sr-only">Home</span>
         <h1 className=" text-2xl md:text-4xl font-bold font-monta">SAFESURGE</h1>
        </NavLink>
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <NavLink to="/" className={({isActive})=>`text-sm font-semibold ${isActive ? "text-orange-600":"  text-teal-600"} transition hover:text-gray-500/75`} > Home </NavLink>
            </li>

            {isLogin? (<li>
              <NavLink  to="/missing-form" className={({isActive})=>`text-sm font-semibold ${isActive ? "text-orange-600":"  text-teal-600"} transition hover:text-gray-500/75`} > Add Mising Report </NavLink>
            </li>):(<div></div>)}
          </ul>
        </nav>

        

        <div className="flex items-center gap-4">
          
          {!isLogin? (<div className="flex flex-row  gap-2 sm:flex-row sm:gap-4">
            <Link
              className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
              to="/login"
            >
              Login
            </Link>

          
              <Link
                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                to="/register"
              >
                Register
              </Link>
            
          </div>):( <div className="flex flex-row"><div>
            <button 
              onClick={handleChatbot}
              class=" bg-blue-500 text-white font-semibold p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 flex items-center justify-center z-50 mx-2">
             Chat bot  
          </button>

</div> 
<Link
              className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow items-center text-center"
              onClick={handleLogout}
            >
              Logout
            </Link></div>)}

          <div className="block md:hidden">
            <button 
            onClick={toggleMobileMenu}
            className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    {isMobileMenuOpen && (
            <div className="md:hidden">
              <ul className="flex flex-col items-center gap-4 py-4">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `text-sm font-semibold ${
                        isActive ? "text-orange-600" : "text-teal-600"
                      } transition hover:text-gray-500/75`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                
                
               
                
                {isLogin?
                <li>
                  <NavLink
                    to="/missing-form"
                    className={({ isActive }) =>
                      `text-sm font-semibold ${
                        isActive ? "text-orange-600" : "text-teal-600"
                      } transition hover:text-gray-500/75`
                    }
                  >
                    Add Missing Report
                  </NavLink>
                </li>:(<div></div>)}
              </ul>
            </div>
          )}
  </div>
</header>
        </>
    )
}


export default Header