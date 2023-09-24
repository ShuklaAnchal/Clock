"use client"

import React, { useState } from 'react'


export const page = () => {

  // const[mydate , mytime] = useState(new Date().toLocaleTimeString());

  const[mydate , mytime] = useState(null)

  setInterval(()=>{
      mytime(new Date().toLocaleTimeString());
  },1000);
 


  return (
    <div>
     <h1>{mydate}</h1> 

  </div>
     
     
  )
  }

export default page;