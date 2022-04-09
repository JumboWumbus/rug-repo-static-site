import React from 'react';

import Image from "next/image";

export default function Hero(){
    return (
      <div className="relative bg-offBlack-900">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-offBlack-800"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className="px-8 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="relative flex items-center flex-col max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl text-center">
            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none text-center">
              The quick, brown fox
              <br className="hidden md:block" />
              jumps over a{' '}
              <span className="relative inline-block px-2">
                <div className="absolute inset-0 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative text-cyan-300">lazy dog</span>
              </span>
            </h2>
            
        
            <Image src={'/LightningOx.png'} width="384" height="384" alt="logo"/>
           

            <p className="mb-6 text-base text-white text-opacity-60 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae.
            </p>
            
           
          </div>
        </div>
      </div>
    );
  };