import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import HeroImg from '../assets/MBlogo.png';
function Header()
{
    const[ToggleNav,setToggleNav]=useState(false)
    return <header className="flex justify-between px-3 py-0     bg-head ">
        <div className='w-20 text-center'>
        <div class="flex items-center">
        <a href='https://mohanbalajicv.web.app/'>
        <img className="w-1/1" src={HeroImg} alt="Logo" class="h-10"></img>
        </a>
        </div>
        </div>
        <nav className="hidden md:block">
        <ul className="flex px-0 text-white py-7">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>   
            <li><a href="#">Contact</a></li>
        </ul>
        </nav>
        <button onClick={()=>setToggleNav(!ToggleNav)} className="block md:hidden"><Bars3Icon className="text-white h-6"/>
        {ToggleNav && <nav className="block md:hidden mobile-view text-right pr-8 ">
        <ul className="flex flex-col text-white gap-9">
            <li><a href="#" className='px-9 py-2 bg-sl text-black font-semibold rounded-lg  hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out '>Home</a></li>
            <li><a href="#" className='px-9 py-2 bg-slate-600 text-black font-semibold rounded-lg  hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out '>About</a></li>
            <li><a href="#" className='px-9 py-2 bg-slate-600 text-black font-semibold rounded-lg  hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out '>Projects</a></li>   
            <li><a href="#" className='px-9 py-2 bg-slate-600 text-black font-semibold rounded-lg  hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out '>Contact</a></li>
        </ul>
        </nav>
}
        </button>
    </header>
}
export default Header