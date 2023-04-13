import { Outlet } from "react-router-dom";
import bgImage from '../assets/BG.png';
import logo from '../assets/logo.png'
import { UserIcon } from "@heroicons/react/20/solid";
import { LockClosedIcon } from "@heroicons/react/24/outline";

export default function Auth() {
  return (
    <div className="bg-[#2148C0] w-full h-screen flex justify-center items-center absolute">
      <div className="relative z-10 border border-transparent h-[398px] w-[300px] py-4 px-2">
        <img src={logo} className="mx-auto" alt="" />
        <div className="mx-auto">
            <Outlet />
        </div>
      </div>
      <img src={bgImage} className="w-full h-full absolute top-0 left-0 z-0" alt="" />
    </div>
  )
}
