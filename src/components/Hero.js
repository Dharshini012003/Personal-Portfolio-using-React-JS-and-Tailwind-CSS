import HeroImg from '../assets/hero.png';
import { SiGmail} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Cursor, useTypewriter } from 'react-simple-typewriter';

export default function Hero(){
    const config  = {
        subtitle: 'Im a Full-stack developer and Designer',
        social: {
            mail: '/#contact',
            linkedin: 'https://www.linkedin.com/in/dharshini2103',
            github: 'https://github.com/Dharshini012003'
        }
    }
    const[text] = useTypewriter({
      words: ['Front End Web Developer','Enthusiastic Learner','Singer'],
      loop: {},
    });
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
    <div className='md:w-1/2 flex flex-col'>
        <h1 className=' text-white text-6xl font-Hero-font'>Hi,<br/> I'm S.Dharshini <br/>
        <p className='text-3xl py-5'>I'm a <span className='text-black'>{text}</span><Cursor/></p>
        </h1>
        <div className='flex py-10'>
            <a target='_blank' href={config.social.mail}  className='pr-5 hover:text-white'><SiGmail size={40}/></a>
            <a target='_blank' href={config.social.linkedin}  className='pr-5 hover:text-white'><FaLinkedin size={40}/></a>
            <a target='_blank' href={config.social.github}  className='pr-5 hover:text-white'><FaGithub size={40}/></a>
        </div>
    </div>
        <img className='md:w-1/3' src={HeroImg}/>
    </section>
} 