
import React, { useState } from 'react'

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full bg-offBlack-900 text-white text-opacity-60 body-font">

      {/* :DESKTOP MENU */}
      <div className="container mx-auto flex justify-between items-center py-7 px-8">
        {/* ::Site logo and Name */}
        <a href="#link" className="flex flex-shrink-0 title-font font-medium items-center text-white md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white p-2 bg-black rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span className="ml-3 text-xl text-white font-semibold antialiased">Navbar</span>
        </a>
        {/* ::Navbar */}
        <nav className="hidden md:flex flex-wrap items-center justify-center text-base tracking-wide ">
          <a href="#link" className="mr-8 hover:text-cyan-300 duration-200">Solutions</a>
          <a href="#link" className="mr-8 hover:text-cyan-300 duration-200">Prices</a>
          <a href="#link" className="mr-8 hover:text-cyan-300 duration-200">About</a>
          <a href="#link" className="mr-8 hover:text-cyan-300 duration-200">Contact</a>
        </nav>
        
        {/* ::Burger icon standard */}
        <button 
          className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white focus:ring-opacity-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 rounded-md text-white hover:scale-125 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* ::MOBILE MENU */}
      { isOpen &&
        <div className="w-full flex flex-col py-4 px-3 md:hidden bg-offBlack-900 text-base uppercase text-center font-semibold">
          <a href="#link" className="block px-3 py-2 rounded-md text-white text-opacity-60 hover:text-cyan-300 duration-200">Solutions</a>
          <a href="#link" className="block px-3 py-2 rounded-md text-white text-opacity-60 hover:text-cyan-300 duration-200">Prices</a>
          <a href="#link" className="block px-3 py-2 rounded-md text-white text-opacity-60 hover:text-cyan-300 duration-200">About</a>
          <a href="#link" className="block px-3 py-2 rounded-md text-white text-opacity-60 hover:text-cyan-300 duration-200">Contact</a>
        </div>
      }
    </header>
  )
}


