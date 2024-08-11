import { Link } from "react-router-dom"


function Footer(){
    return (
        <>
        <footer className="bg-gray-100">
  <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
    <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
      
        

       
    </div>

    <div className="lg:flex lg:items-end lg:justify-between">
      <div>
        <div className="flex justify-center text-teal-600 lg:justify-start">
        <Link  to="/" className={({isActive})=>`text-sm font-semibold ${isActive ? "text-orange-600":"  text-teal-600"}block`} >
          <span className="sr-only">Home</span>
         <h1 className=" text-2xl md:text-4xl font-bold font-monta">SAFESURGE</h1>
        </Link>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
          Safe Surge Small Step in Making People Life Safe
        </p>
      </div>


    </div>

    <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
      Copyright &copy; 2024. All rights reserved.
    </p>
  </div>
</footer>
        </>
    )
}

export default Footer