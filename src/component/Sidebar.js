import React, { useState } from 'react'
import Logo from '../assets/image/LogoBerwarna.png'
import { AiOutlineHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { BsChevronLeft } from "react-icons/bs";
import { IoTvOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { logout } from '../firebase';

function Sidebar({ children, page = 'beranda' }) {
    const [isOpen, setOpen] = useState(true);

    const logOut = () => {
        logout();
    }

    return (
        <div className="flex">
            <div className={`flex relative flex-col ${isOpen ? 'w-64' : 'w-24'} duration-300 p-4 h-screen bg-dark-sidebar justify-between`}>
                <div>
                    <div className={`absolute cursor-pointer -right-5 top-9 duration-300 bg-white border-8 p-1 items-center border-dark-sidebar rounded-full  ${!isOpen && "-rotate-180"}`} onClick={() => setOpen(!isOpen)}>
                        <BsChevronLeft size={20} />
                    </div>
                    <div className={`flex justify-center ${!isOpen && 'mt-4'}`}>
                        <img src={Logo} alt='logo-bopit' className={`w-32 mt-14 duration-300 ${isOpen ? 'delay-100 ease-out' : 'hidden'}`} />
                    </div>
                    <div className="flex flex-col justify-between mt-14 duration-300">
                        <Link to='/dashboard' className={`cursor-pointer flex items-center px-4 py-2 text-white-menu duration-200 hover:bg-gray-200 rounded-md hover:text-dark-content  ${page === 'beranda' ? 'text-dark-content bg-gray-100' : ''}`}>
                            <AiOutlineHome size={28} />
                            <span className={`${page === "beranda" ? 'font-bold' : 'font-medium'} ${isOpen ? 'mx-4' : 'hidden'}`}>Beranda</span>
                        </Link>
                        <Link to='/dashboard/perangkat' className={`cursor-pointer mt-2 flex items-center px-4 py-2 text-white-menu duration-200 hover:bg-gray-200 rounded-md hover:text-dark-content  ${page === 'perangkat' ? 'text-dark-content bg-gray-100' : ''}`}>
                            <IoTvOutline size={28} />
                            <span className={`${page === "perangkat" ? 'font-bold' : 'font-medium'} ${isOpen ? 'mx-4' : 'hidden'}`}>Perangkat</span>
                        </Link>
                    </div>
                </div>
                <div onClick={logOut}>
                    <Link to='/' className={`w-full cursor-pointer mt-2 flex items-center px-4 py-2 duration-200 text-white-menu hover:bg-gray-200 rounded-md hover:text-dark-content }`}>
                        <BiLogOut size={28} />
                        <span className={`${isOpen ? 'mx-4 font-medium' : 'hidden'}`}>Keluar</span>
                    </Link>
                </div>
            </div>
            <div className={`flex-1 overflow-auto bg-dark-content h-screen `}>
                {children}
            </div>
        </div>
    )
}

export default Sidebar