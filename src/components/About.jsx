import AboutImg from '../assets/heroimg.png';
function About()
{
    return<section className='flex flex-col md:flex-row bg-About h-full'>
        <div className='md:w-1/2 px-5 py-5 '>
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center '>
          <div className='flex flex-col justify-center text-white px-7'>
            <h1 className='text-4xl  border-b-2  font-bold mb-2 w-[190px] '>ABOUT ME</h1>
            <p className='pb-6'>Hi , My name is Mohan Balaji . I build React JS Websites </p>
            <p className='pb-6'>I am proficient in Frontend skills like React.js, Redux, Redux Tool Kit. Axios, Tailwind
            CSS, Sass, Css3 and many more. </p>
            <p className='pb-6'>In Backend I know Node.Js SpringBoot ,MangoDB , MYSQL</p>
           </div>
        </div>
    </section>

}
export default About;