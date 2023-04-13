import { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'
import { Link as LinkDom } from 'react-router-dom'

import {Bars3Icon,XMarkIcon} from '@heroicons/react/20/solid';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const handleClose = () => setNav(!nav);
    
  return (
    <div className="w-full h-[80px] sticky z-10 bg-zinc-200  drop-shadow-lg">
        <div className="px-2 flex justify-between items-center w-full h-full">
            {/* navbar */}
            <div className="flex items-center">
                <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
                <ul className="hidden md:flex">
                    <li><Link to="home" smooth={true} duration={500} >Home</Link></li>
                    <li><Link to="about" smooth={true} offset={-200} duration={500} >About</Link></li>
                    <li><Link to="support" smooth={true} offset={-50} duration={500} >Support</Link></li>
                    <li><Link to="allinone" smooth={true} offset={-100} duration={500} >Platforms</Link></li>
                    <li><Link to="pricing" smooth={true} offset={-50} duration={500} >Pricing</Link></li>
                </ul>
            </div>
            <div className="hidden md:flex pr-4">
                <LinkDom to='/login' className="border-none bg-transparent px-8 py-3 text-black mr-4  border bg-indigo-600 border-indigo-600 hover:bg-transparent hover:text-indigo-600 rounded-md ">Sign In</LinkDom>
                <LinkDom to='/register'  className="px-8 py-3 text-white  border bg-indigo-600 border-indigo-600 hover:bg-transparent hover:text-indigo-600 rounded-md">Sign Up</LinkDom>
            </div>
            <div className="md:hidden mr-4" onClick={handleClick}>
                {!nav ? <Bars3Icon className="w-5" /> : <XMarkIcon className="w-5" /> }
            </div>            
        </div>
        {/* mobile navbar */}
        <ul className={!nav ? "hidden" : "absolute md:hidden bg-zinc-200 w-full px-8"}>
            <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500} >Home</Link></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500} >About</Link></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500} >Support</Link></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="allinone" smooth={true} offset={-100} duration={500} >Platforms</Link></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500} >Pricing</Link></li>
            <div className="flex flex-col my-4">
                <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4 ">Sign In</button>
                <button className="px-8 py-3 ">SIgn Up</button>
            </div>
        </ul>
    </div>
  )
}

export default Navbar