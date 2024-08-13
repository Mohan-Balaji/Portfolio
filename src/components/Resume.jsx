import React from 'react';
import ResumeIMG from '../assets/resume.jpg';

export default function Resume()
{
    return(
        <section className='flex flex-col md:flex-row bg-About h-full'>
        <div className='bg-purple-600' >
            <button className="px-4 py-2 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out" type="button">Resume</button>
        <div className='md:w-1/3   px-8 py-5 '>
            <img src={ResumeIMG}></img>
        </div>
        </div>
        </section>
    )
}   