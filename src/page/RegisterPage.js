import React, { useEffect } from 'react'
import { ArrowLeft } from '../assets/svg';
import ImagePeople from '../assets/image/bunchofpeople.png'
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Daftar | BoPiT"
    }, []);

    return (
        <div className='w-full h-screen grid grid-cols-2'>
            <div onClick={() => navigate(-1)} className='absolute top-8 left-10'>
                <ArrowLeft />
            </div>
            <div className="place-self-center">
                <div>
                    <div className='mt-10 text-3xl font-extrabold' >
                        Daftar akun baru
                    </div>
                    <div className="mt-5">
                        <p className="text-3xs font-semibold ml-2 ">Nama lengkap</p>
                        <input placeholder="Masukkan nama lengkap" className='mt-2 py-5 px-3 w-full h-5 bg-white rounded-xl border border-lightgrey justify-between items-center focus:outline-none focus:border-lightgrey focus:border-md placeholder:italic' />
                    </div>
                    <div className="mt-5">
                        <p className="text-3xs font-semibold ml-2 ">Nama pengguna</p>
                        <input placeholder="Masukkan nama pengguna" className='mt-2 py-5 px-3 w-full h-5 bg-white rounded-xl border border-lightgrey justify-between items-center focus:outline-none focus:border-lightgrey focus:border-md placeholder:italic' />
                    </div>
                    <div className="mt-5">
                        <p className="text-3xs font-semibold ml-2 ">Alamat pos-el</p>
                        <input placeholder="Masukkan alamat pos-el" className='mt-2 py-5 px-3 w-full h-5 bg-white rounded-xl border border-lightgrey justify-between items-center focus:outline-none focus:border-lightgrey focus:border-md placeholder:italic' />
                    </div>
                    <div className="flex flex-column">
                        <div className="mt-5 w-1/2">
                            <p className="text-3xs font-semibold ml-2 ">Kata Sandi</p>
                            <input placeholder="Masukkan kata sandi"
                                type='password'
                                className=' mt-2 py-5 px-3 w-full h-5 bg-white rounded-xl border border-lightgrey justify-between items-center focus:outline-none focus:border-lightgrey border-md placeholder:italic' />
                        </div>
                        <div className="w-5"></div>
                        <div className="mt-5 w-1/2">
                            <p className="text-3xs font-semibold ml-2 ">Verifikasi kata Sandi</p>
                            <input placeholder="Verifikasikan kata sandi"
                                type='password'
                                className='  mt-2 py-5 px-3 w-full h-5 bg-white rounded-xl border border-lightgrey justify-between items-center focus:outline-none focus:border-lightgrey border-md placeholder:italic' />
                        </div>
                    </div>
                    <div className="mt-6 " >
                        <a>
                            <div className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 rounded-2xl w-xl cursor-pointer">
                                <p class="font-normal text-white dark:text-white-400 text-center" >Daftar</p>
                            </div>
                        </a>
                    </div>
                    <div className="mt-5 flex justify-center">
                        <p className="text-2xs ml-2 inline">Sudah memiliki akun?</p>
                        <Link to='/login' className="text-2xs font-extrabold ml-2 text-blue-500 cursor-pointer inline">Masuk</Link>
                    </div>
                </div>
            </div>
            <div>
                <div className="mt-10 text-6xl grid leading-tight">
                    Ayo!,<br />bergabung <br />dengan kami.
                </div>
                <img src={ImagePeople} className="w-2/5 fixed bottom-0 right-16" />
            </div>
        </div>
    )
}

export default RegisterPage