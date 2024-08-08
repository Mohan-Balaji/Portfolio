import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
function Header()
{
    const[ToggleNav,setToggleNav]=useState(false)
    return <header className="flex justify-between px-3 py-2 bg-head ">
        <a className="font-bold text-black" href="#">Mohan</a>
        <nav className="hidden md:block">
        <ul className="flex px-0 text-white">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>   
            <li><a href="#">Contact</a></li>
        </ul>
        </nav>
        <button onClick={()=>setToggleNav(!ToggleNav)} className="block md:hidden"><Bars3Icon className="text-white h-6"/>
        {ToggleNav && <nav className="block md:hidden mobile-view">
        <ul className="flex flex-col text-white">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>   
            <li><a href="#">Contact</a></li>
        </ul>
        </nav>
}
        </button>
    </header>
}
export default Header