import React from 'react'
import LogoBerwarna from '../assets/image/LogoBerwarna.png'
import DownloadAppStore from '../assets/image/DownloadAppStore.png'
import { Link } from "react-router-dom";

function Footer({ space = false }) {
    return (
        <div className={`w-full bg-dark p-20 ${space ? 'pt-14' : 'pt-0'}`}>
            <img src={LogoBerwarna} alt='logo' className='h-20' />
            <div className='grid grid-cols-3'>
                <div>
                    <ul className="list-none text-white mt-10">
                        <li className='font-bold text-xl py-4'>Perusahaan</li>
                        <li className='font-normal text-xl py-4'>
                            <Link to='/tentang-kami' className="text-xl text-white cursor-pointer">Tentang</Link>
                        </li>
                        <li className='font-normal text-xl py-4'>
                            <Link to='/produk' className="text-xl text-white cursor-pointer">Produk</Link>
                        </li>
                    </ul>
                </div>
                <div className='place-self-center'>
                    <ul className="list-none text-white mt-10">
                        <li className='font-bold text-xl py-4'>Hubungi Kami</li>
                        <li className='font-normal text-xl py-4'>
                            <Link to='/bantuan' className="text-xl text-white cursor-pointer">Bantuan</Link>
                        </li>
                        <li className='font-normal text-xl py-4'>
                            <Link to='/hubungi-kami' className="text-xl text-white cursor-pointer">Kontak</Link>
                        </li>
                    </ul>
                </div>
                <div className='place-self-center'>
                    <ul className="list-none text-white mt-10">
                        <li className='font-bold text-xl py-4 text-center'>Uduh Aplikasi</li>
                        <img src={DownloadAppStore} alt='logo' className='h-36' />
                    </ul>
                </div>
            </div>
            <div className='w-full grid mt-10'>
                <div className='text-white text-xl place-self-center'>
                    © {(new Date().getFullYear())} BoPiT Amikom Yk.
                </div>
            </div>
        </div>
    )
}

export default Footer