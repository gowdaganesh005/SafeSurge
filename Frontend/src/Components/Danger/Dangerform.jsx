import { useState } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

function Dangerform(){
    const { register, handleSubmit, setValue } = useForm();
    const [locationError, setLocationError] = useState(null);


    useEffect(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setValue('latitude', latitude.toString());
              setValue('longitude', longitude.toString());
            },
            (err) => {
              setLocationError(err.message);
            }
          );
        } else {
          setLocationError('Geolocation is not supported by this browser.');
        }
      }, [setValue]);
   
    
    return (
        

<div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div class="relative py-3 sm:max-w-xl sm:mx-auto">
    <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
      <div class="max-w-md mx-auto">
        <div class="flex items-center space-x-5">
          <div class="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
          <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
            <h2 class="leading-relaxed">Send an Emergency Message</h2>
            <p class="text-sm text-gray-500 font-normal leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="divide-y divide-gray-200">
          <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div class="flex flex-col">
              <label class="leading-loose">Enter Name</label>
              <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
            </div>
            <div class="flex flex-col">
              <label class="leading-loose">Enter Active Phone Number</label>
              <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" {...register("phoneNumber")}/>
            </div>
            <div>
            <label class="leading-loose">Emergency Need Help now! </label>
            <br />
            <label
            
            className="relative inline-block h-8 w-14  cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-red-500"
                >
            <input type="checkbox" className="peer sr-only" />

            <span
            className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6">        
            </span>
        </label>
        <div>
        <label class="leading-loose">Location</label>
              <input disabled={true} type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" {...register('latitude')} />
              <input disabled={true} type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"  {...register('longitude')}/>
        
                  

                  {locationError && (
                    <p className="text-red-500 mt-2">{locationError}</p>
                  )}
            </div>
        </div>
            
            <div class="flex flex-col">
              <label class="leading-loose">Enter Address Manually (optional) </label>
              <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" {...register("details")} />
            </div>
          </div>
          <div class="pt-4 flex items-center space-x-4">
              <button class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancel
              </button>
              <button class="bg-red-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Send</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default Dangerform