import AboutImg from '../assets/about.png';
import BackToTopButton from './BackToTopButton';

export default function About(){
    return <section id='about'className='flex flex-col md:flex-row bg-secondary px-8'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center'> 
              <h1 className='text-white text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
               <p className=' pb-6 text-white'>A Proactive final year B.Tech student majoring in Information Technology with a passion for problem-solving and technology-driven solutions. Seeking opportunities in the area of software engineering and data analytics to leverage my technical expertise, leadership skills, and creative mindset in a challenging and dynamic professional environment.</p>
            </div>
            
        </div>
    </section>
    

}
