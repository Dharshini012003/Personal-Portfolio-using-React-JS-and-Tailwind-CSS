import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'


export default function Header() {
  const [toggleMenu,setToggleMenu] = useState(false);


    return <header className="flex justify-between px-5 py-2 bg-primary">
        <a className="font-bold text-black font-Dharsh-font " href="#"><h1>Dharshini</h1></a>
        <nav className="hidden md:block"> 
          <ul  className="flex text-white">
            <li><a href="/" className='hover:text-black'>Home</a></li>
            <li><a href="/#about" className='hover:text-black'>About</a></li>
            <li><a href="/#projects" className='hover:text-black'>Projects</a></li>
            <li><a href="/#contact" className='hover:text-black'>Contact</a></li>
          </ul>
        </nav> 
        { toggleMenu && <nav className="block md:hidden mobile-nav"> 
          <ul onClick={( )=> setToggleMenu(!toggleMenu)} className="flex flex-col text-white  ">
            <li><a href="/">Home</a></li>
            <li><a href="/#about" >About</a></li>
            <li><a href="/#projects" >Projects</a></li>
            <li><a href="/#contact" >Contact</a></li>
          </ul>
        </nav> }
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    </header>
}