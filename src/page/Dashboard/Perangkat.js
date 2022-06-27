import Sidebar from 'component/Sidebar'
import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from "react-icons/ai";

import Device from '../../component/Device.js'

function Perangkat() {
    return (
        <>
            <Sidebar page='perangkat'>
                <div className='text-white text-4xl font-extrabold ml-10 mt-5'>
                    Perangkat
                </div>
                <div className='flex justify-center pt-10'>
                    <div className='w-full mx-10 border-2 rounded-xl border-gray-500'>
                        <div className='flex justify-between items-center text-white mr-5'>
                            <div className='text-white text-2xl font-bold ml-5 my-2'>
                                Daftar Perangkat
                            </div>
                            <Link to='/dashboard/add-device' className={`cursor-pointer flex items-center text-white-menu hover:bg-gray-200 rounded-md hover:text-dark-content`}>
                                <AiOutlinePlus size={24} />
                            </Link>
                        </div>
                        <Device />
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default Perangkat