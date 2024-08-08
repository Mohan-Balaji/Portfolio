import React from 'react';
import ResumeIMG from '../assets/resume.jpg';

export default function Resume()
{
    return(
        <section className='flex flex-col md:flex-row bg-About h-full'>
        <div className='bg-purple-600' >
            <h1>Resume</h1>
        <div className='md:w-1/3   px-8 py-5 '>
            <img src={ResumeIMG}></img>
        </div>
        </div>
        </section>
    );
}   