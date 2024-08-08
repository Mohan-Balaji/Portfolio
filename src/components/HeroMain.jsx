import HeroIMG from '../assets/heroimg.png';
import { BsTwitterX ,BsGithub,BsInstagram,BsLinkedin,BsReddit} from "react-icons/bs";
export default function HeroMain()
    {
        return   <section className='flex flex-col md:flex-row px-3 py-32 heroView justify-center'>
        <div className='md:w-1/2 flex flex-col px-5'>
        <h1 className=' text-white text-6xl font-main-font'>HI,Iam <span className='text-black'>Mohan</span>
        <p className=' text-white text-4xl px-1 text-2xl'>I'am FullStack_Developer </p>
        </h1>
        <div className='flex flex-row px-1 py-5'>
            <a href=''target="_blank" className='pr-4 text-4xl hover:text-white'><BsTwitterX /></a>
            <a href='#'className='pr-4 text-4xl hover:text-white'><BsGithub/></a>
            <a href='#' target="_blank" className='pr-4 text-4xl hover:text-white'><BsReddit /></a>
            <a href='#'className='pr-4 text-4xl hover:text-white'><BsLinkedin/></a>
        </div>
        </div>
        <img  className='md:w-1/4' src={HeroIMG}></img>
    </section>
}
