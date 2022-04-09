export default function Footer(){
    return(
        
<footer className="p-8 bg-offBlack-900  shadow md:px-6 md:py-8 body-font">
<div className="sm:flex sm:items-center sm:justify-between">
<a href="#link" className="flex flex-shrink-0 title-font font-medium items-center text-white md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white p-2 bg-black rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span className="ml-3 text-xl text-white font-semibold antialiased">Footer</span>
        </a>
<ul className="flex flex-wrap items-center mb-6 text-sm text-white text-opacity-60 sm:mb-0 duration-200">
<li>
<a href="#" className="mr-4 hover:underline hover:text-cyan-300 duration-200 md:mr-6 ">Solutions</a>
</li>
<li>
<a href="#" className="mr-4 hover:underline hover:text-cyan-300 duration-200 md:mr-6">Prices</a>
</li>
<li>
<a href="#" className="mr-4 hover:underline hover:text-cyan-300 duration-200 md:mr-6 ">About</a>
</li>
<li>
<a href="#" className="hover:underline hover:text-cyan-300 duration-200">Contact</a>
</li>
</ul>
</div>
<hr className="my-6 border-white border-opacity-10 sm:mx-auto lg:my-8"/>
<span className="block text-sm text-white text-opacity-30 sm:text-center ">© 2022 <a href="https://flowbite.com" className="hover:underline">LightningOx</a>. All Rights Reserved.
</span>
</footer>

    )
}