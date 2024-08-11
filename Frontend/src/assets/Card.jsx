
import React from 'react'

export function Card({name,age,address,img,phoneNumber,gender}) {
  return (
    <div className="flex max-w-xl flex-col items-center rounded-md border md:flex-row p-y-5">
      <div className="h-full w-full md:h-[200px] md:w-[300px] justify-center " >
        <img
          src={img}
          alt="Laptop"
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <div>
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            Missing 
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            <div><b>Name :</b>{name}</div>
            <div><b>Age :</b>{age}</div>
            <div><b>Gender :</b>{gender}</div>
            <div><b>Phone Number to Contact :</b>{phoneNumber}</div>
            <div><b>Address :</b>{address}</div>
          </p>
          
          <div className="mt-3 flex items-center space-x-2">
           
           
          </div>
        </div>
      </div>
    </div>
  )
}

