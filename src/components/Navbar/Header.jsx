import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';
// import HeroImg from '../../assets/MBlogo.png';

function Header() {
    const [ToggleNav, setToggleNav] = useState(false);

    const handleNavClick = () => {
        setToggleNav(false);
    };

    return (
        <header className='mt-5'>
            <nav className="bg-transparent font-[remaining]">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">MOHAN BALAJI</span>
                    </a>
                    <button onClick={() => setToggleNav(!ToggleNav)} data-collapse-toggle="navbar-transparent" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-transparent" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="w-5 h-5" />
                    </button>
                    <div className={`${ToggleNav ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-transparent">
                        <ul className="flex flex-col font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:md:bg-transparent">
                            <li>
                                <a href="#home" onClick={handleNavClick} className="block py-4 px-3 md:p-0 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">Home</a>
                            </li>
                            <li>
                                <a href="#services" onClick={handleNavClick} className="block py-4 px-3 md:p-0 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">Services</a>
                            </li>
                            <li>
                                <a href="#pricing" onClick={handleNavClick} className="block py-4 px-3 md:p-0 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">Pricing</a>
                            </li>
                            <li>
                                <a href="#contact" onClick={handleNavClick} className="block py-4 px-3 md:p-0 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
