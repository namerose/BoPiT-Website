import React from 'react'
import Logo from '../assets/image/LogoBerwarna.png'
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { IoTvOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { logout } from '../firebase';

function Sidebar({ children, page = 'beranda' }) {

    const logOut = () => {
        logout();
    }

    return (
        <>
            <div className="flex">
                <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-dark-sidebar">
                    <img src={Logo} alt='logo-bopit' className='w-28 self-center mt-6' />
                    <div className="flex flex-col justify-between mt-14">
                        <aside>
                            <ul>
                                <li>
                                    <Link to='/dashboard' className={`cursor-pointer flex items-center px-4 py-2 text-white-menu hover:bg-gray-200 rounded-md hover:text-dark-content  ${page === 'beranda' ? 'text-dark-content bg-gray-100' : ''}`}>
                                        <AiOutlineHome size={24} />
                                        <span className="mx-4 font-medium ">Beranda</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/dashboard/perangkat' className={`cursor-pointer mt-2 flex items-center px-4 py-2 text-white-menu hover:bg-gray-200 rounded-md hover:text-dark-content  ${page === 'perangkat' ? 'text-dark-content bg-gray-100' : ''}`}>
                                        <IoTvOutline size={24} />
                                        <span className="mx-4 font-medium ">Perangkat</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/dashboard/pengaturan' className={`cursor-pointer mt-2 flex items-center px-4 py-2 text-white-menu hover:bg-gray-200 rounded-md hover:text-dark-content  ${page === 'pengaturan' ? 'text-dark-content bg-gray-100' : ''}`}>
                                        <AiOutlineSetting size={24} />
                                        <span className="mx-4 font-medium">Pengaturan</span>
                                    </Link>
                                </li>
                            </ul>
                        </aside>
                    </div>
                    <div onClick={logOut} className="absolute bottom-5 w-fit ">
                        <Link to='/' className={` bottom-5 w-48 cursor-pointer mt-2 flex items-center px-4 py-2 text-white-menu hover:bg-gray-200 rounded-md hover:text-dark-content }`}>
                            <BiLogOut size={24} />
                            <span className="mx-4 font-medium">Keluar</span>
                        </Link>
                    </div>
                </div>
                <div className='w-full h-screen bg-dark-content'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Sidebar