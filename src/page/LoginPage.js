import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/image/LogoBerwarna.png'

function LoginPage() {
    useEffect(() => {
        document.title = "Masuk | BoPiT"
    }, []);

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <div className="w-1/4">
                <Link to='/' className="flex justify-center">
                    <img src={Logo} className="w-middle" />
                </Link>
                <div className='mt-10 text-3xl text-center font-extrabold' >
                    Masuk
                </div>
                <div className="border-gray-light border-2 shadow-md rounded-xl p-4 mt-5">
                    <div className="mt-5">
                        <p className="text-3xs font-semibold ml-2 ">Nama pengguna/pos-el</p>
                        <input placeholder="Masukkan nama pengguna/pos-el" className='mt-2 py-5 px-3 w-full h-5 bg-white rounded-xl border border-lightgrey justify-between items-center focus:outline-none focus:border-lightgrey focus:border-md placeholder:italic' />
                    </div>
                    <div className="mt-5">
                        <p className="text-3xs font-semibold ml-2">Kata Sandi</p>
                        <input placeholder="Masukkan kata sandi" className='mt-2 py-5 px-3 w-full h-5 bg-white rounded-xl border border-lightgrey justify-between items-center focus:outline-none focus:border-lightgrey border-md placeholder:italic' />
                        <a>
                            <div className="mt-2 flex justify-end cursor-pointer">
                                <p className="text-1xs mr-2 text-blue-600 ">Lupa kata sandi?</p>
                            </div>
                        </a>
                    </div>
                    <div className="mt-6" >
                        <a>
                            <div className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 rounded-2xl w-xl cursor-pointer">
                                <p class="font-normal text-white dark:text-white-400 text-center" >Masuk</p>
                            </div>
                        </a>
                    </div>
                    <div className="mt-5 flex justify-center">
                        <p className="text-2xs ml-2 inline">Belum memiliki akun?</p>
                        <Link to='/register' className="text-2xs font-extrabold ml-2 text-blue-500 cursor-pointer inline">Daftar</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage