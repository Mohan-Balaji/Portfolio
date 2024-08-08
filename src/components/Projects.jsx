import Websiteimage1 from '../assets/ecommerce.jpg';
import Websiteimage2 from '../assets/blog.jpg';
import Websiteimage3 from '../assets/portfolio.jpg';
function Projects()
{
return <section className="flex flex-col px-5 py-20 justify-center text-white heroView ">
    <div className="w-1/2">
        <div className=" flex justify-center">
        <h1 className='text-4xl  border-b-2  font-bold mb-2 w-[150px]'>Projects</h1>
        </div>
    </div>
    <div className="w-full">
      <div className='flex flex-col md:flex-row px-10'>
        <div className='relative'> 
          <img  className="h-[200px] w-[560px] py-2" src={Websiteimage1}/>
          <div className='absolute right-0 left-0 bottom-0 top-0 opacity-0 duration-500 heroView hover:opacity-100'>
            <p className='text-center py-5'>this ecommerce website was build using MERN stack</p>
          </div>
        </div>
        <div className='relative'>
          <img className="h-[200px] w-[500px] py-2 px-2 " src={Websiteimage2}/>
          <div className='project-desc'>
            <p className='text-center py-5'>this blog website was build using ReactJS</p>
          </div>
        </div>
        <div className='relative'>
        <img className="h-[200px] w-[500px] py-2 " src={Websiteimage3}/>
        <div className='project-desc'>
            <p className='text-center py-5'>this portfolio website was build using MEAN stack</p>
          </div>  
        </div>
      </div>
    </div>
</section>

}
export default Projects;