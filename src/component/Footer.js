import React from 'react'
import LogoBerwarna from '../assets/image/LogoBerwarna.png'
import DownloadAppStore from '../assets/image/DownloadAppStore.png'

function Footer() {
    return (
        <div className='w-full bg-dark pt-0 p-20'>
            <img src={LogoBerwarna} alt='logo' className='h-28' />
            <div className='grid grid-cols-3'>
                <div>
                    <ul className="list-none text-white mt-10">
                        <li className='font-bold text-2xl py-4'>Perusahaan</li>
                        <li className='font-normal text-2xl py-4'>Tentang</li>
                        <li className='font-normal text-2xl py-4'>Produk</li>
                        <li className='font-normal text-2xl py-4'>Blog</li>
                    </ul>
                </div>
                <div className='place-self-center'>
                    <ul className="list-none text-white mt-10">
                        <li className='font-bold text-2xl py-4'>Hubungi Kami</li>
                        <li className='font-normal text-2xl py-4'>Bantuan</li>
                        <li className='font-normal text-2xl py-4'>Kontak</li>
                    </ul>
                </div>
                <div className='place-self-center'>
                    <ul className="list-none text-white mt-10">
                        <li className='font-bold text-2xl py-4 text-center'>Uduh Aplikasi</li>
                        <img src={DownloadAppStore} alt='logo' className='h-44' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer