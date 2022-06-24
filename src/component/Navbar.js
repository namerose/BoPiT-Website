import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Logo from '../assets/image/Logo.png'
import LogoBerwarna from '../assets/image/LogoBerwarna.png'

function Navbar({ page = 'beranda' }) {
    const [colorNav, setColorNav] = useState(false);
    const changeColorNav = () => {
        if (window.scrollY >= 100) {
            setColorNav(true);
        } else {
            setColorNav(false);
        }
    }
    window.addEventListener('scroll', changeColorNav);

    const activeLink = 'text-white underline underline-offset-8'
    return (
        <div className={`fixed h-28 w-full overflow-hidden ease-in transition-colors z-50 ${colorNav ? 'bg-dark' : ''}`}>
            <nav className="flex justify-between items-center m-auto h-full px-60">
                <a href="#">
                    <img src={colorNav ? LogoBerwarna : Logo} className="w-28" />
                </a>
                <ul className="flex">
                    <li className="p-4 text-xl">
                        <Link to='/' className={`font-bold transition-all hover:text-white hover:underline hover:underline-offset-8 ${page == 'beranda' ? activeLink : 'text-light'}`}>Beranda</Link>
                    </li>
                    <li className="p-4 text-xl">
                        <Link to='/tentang-kami' className={`font-bold transition-all hover:text-white hover:underline hover:underline-offset-8 ${page == 'tentang-kami' ? activeLink : 'text-light'}`}>Tentang Kami</Link>
                    </li>
                    <li className="p-4 text-xl">
                        <Link to='/produk' className={`font-bold transition-all hover:text-white hover:underline hover:underline-offset-8 ${page == 'produk' ? activeLink : 'text-light'}`}>Produk</Link>
                    </li>
                    <li className="p-4 text-xl">
                        <Link to='/hubungi-kami' className={`font-bold transition-all hover:text-white hover:underline hover:underline-offset-8 ${page == 'hubungi-kami' ? activeLink : 'text-light'}`}>Hubungi Kami</Link>
                    </li>
                    <li className="p-4 text-xl">
                        <Link to='/login' className={`font-bold transition-all text-light border-2 p-3 rounded-xl hover:text-white hover:border-white border-light`}>Masuk / Daftar</Link>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default Navbar