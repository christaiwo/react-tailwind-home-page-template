import { LockClosedIcon, UserIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className=''>
        <form action="" className="">
            <div className="mt-10 flex items-center border border-white rounded-sm gap-2 py-1">
                <UserIcon className="w-8 text-white" />
                <input type="text" className="w-full h-10 border-none outline-none bg-transparent placeholder:text-left text-white" placeholder="USERNAME"/>
            </div>
            <div className="mt-4 flex items-center border border-white rounded-sm gap-2 py-1">
                <LockClosedIcon className="w-8 text-white" />
                <input type="password" className="w-full h-10 border-none outline-none bg-transparent placeholder:text-left text-white" placeholder="PASSWORD"/>
            </div>
            <div className="mt-10 flex items-center rounded-sm gap-2 py-1">
                <button className="w-full h-10 bg-white hover:bg-white text-[#2148C0]">LOGIN</button>
            </div>
            <div className="mt-4 flex flex-col py-1 text-center">
            <p className='justify-center text-white'>Don't have an account ? <Link to="/register" className='text-neutral-500'> Register </Link> </p>
            <p className="text-white">Forgot Password?</p>
        </div>
        </form>
    </div>
  )
}
