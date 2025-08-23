 'use client'

import React, { useEffect } from 'react'
import AOS from 'aos';
export default function Address() {
    useEffect(() => {
        AOS.init({duration: 1500});
    },[]);
  return (
    <div className='bg-bgColor -mt-20'>
      <p className='text-8xl flex justify-center items-center text-white h-screen' data-aos='zoom-in'>Contact</p>
    </div>
  )
}

