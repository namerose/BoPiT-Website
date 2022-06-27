import Sidebar from 'component/Sidebar'
import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { BsTrashFill } from "react-icons/bs";
import Device from '../../component/Device.js'

function AddDevice() {

    return (
        <>
            <Sidebar page='perangkat'>
                <div className='text-white text-4xl font-extrabold ml-10 mt-5'>
                    Perangkat
                </div>
                <div className='flex justify-center pt-10 text-white'>
                    <div className='w-full mx-10 border-2 rounded-xl border-gray-500'>
                        <div className='flex justify-between items-center text-white mr-5'>
                            <div className='text-2xl font-bold ml-5 my-2'>
                                Tambah Perangkat
                            </div>
                            <AiOutlinePlus size={24} />
                        </div>
                        <div className='w-full border-b-2 border-gray-500'></div>
                        <div className='my-5'>
                            <div className="mt-5 mx-5">
                                <p className="text-3xs font-semibold ml-2 ">Nama perangkat</p>
                                <input
                                    placeholder="Nama perangkat"
                                    className='mt-2 py-5 px-3 w-full h-5 text-white bg-dark-content rounded-xl border border-lightgrey justify-between items-center focus:outline-none focus:border-md placeholder:italic'
                                />
                            </div>
                            <div className="mt-5 mx-5">
                                <p className="text-3xs font-semibold ml-2 ">Id perangkat</p>
                                <input
                                    placeholder="Id perangkat"
                                    className='mt-2 py-5 px-3 w-full h-5 text-white bg-dark-content rounded-xl border border-lightgrey justify-between items-center focus:outline-none focus:border-md placeholder:italic'
                                />
                            </div>
                            <div className="mt-6 flex justify-end mr-5" >
                                {/* <div
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 w-28 rounded-2xl cursor-pointer mr-5"> */}
                                <Link to='/dashboard/perangkat' className={`cursor-pointer flex justify-center bg-red-500 hover:bg-red-700 text-white font-bold py-3 w-28 mr-5  rounded-2xl`}>
                                    <p className="font-normal text-white dark:text-white-400" >Batal</p>
                                </Link>
                                {/* </div> */}
                                <div
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 w-28 rounded-2xl cursor-pointer">
                                    <p className="font-normal text-white dark:text-white-400 text-center " >Tambah</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default AddDevice