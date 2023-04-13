import { ExclamationCircleIcon, LockClosedIcon, UserCircleIcon, UserIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { FaMailchimp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className=''>
    <form action="" className="">
    <div className="mt-10 flex items-center border border-white rounded-sm gap-2 py-1">
            <UserIcon className="w-8 text-white" />
            <input type="text" className="w-full h-10 border-none outline-none bg-transparent placeholder:text-left text-white" placeholder="FULLNAME"/>
        </div>
        <div className="mt-4 flex items-center border border-white rounded-sm gap-2 py-1">
            <UserCircleIcon className="w-8 text-white" />
            <input type="text" className="w-full h-10 border-none outline-none bg-transparent placeholder:text-left text-white" placeholder="USERNAME"/>
        </div>
        <div className="mt-4 flex items-center border border-white rounded-sm gap-2 py-1">
            <FaMailchimp className="w-8 text-white" />
            <input type="email" className="w-full h-10 border-none outline-none bg-transparent placeholder:text-left text-white" placeholder="EMAIL"/>
        </div>
        <div className="mt-4 flex items-center border border-white rounded-sm gap-2 py-1">
            <LockClosedIcon className="w-8 text-white" />
            <input type="password" className="w-full h-10 border-none outline-none bg-transparent placeholder:text-left text-white" placeholder="PASSWORD"/>
        </div>
        <div className="mt-10 flex items-center rounded-sm gap-2 py-1">
            <button className="w-full h-10 bg-white hover:bg-white text-[#2148C0]">LOGIN</button>
        </div>
        <div className="mt-4 flex flex-col py-1 text-center">
            <p className='justify-center text-white'>Already have an account ? <Link to="/login" className='text-neutral-500'> Login </Link> </p>
        </div>
    </form>
</div>
  )
}
