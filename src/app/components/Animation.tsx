"use client"
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Animation = () => {
    useEffect(() => {
        AOS.init()
    }, [])
  return null;
}

export default Animation
