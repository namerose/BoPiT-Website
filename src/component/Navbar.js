import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Logo from '../assets/image/Logo.png'

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
        <div className={`fixed h-28 w-full overflow-hidden ease-in transition-colors ${colorNav ? 'bg-dark' : ''}`}>
            <nav className="flex justify-between items-center m-auto h-full px-60">
                <a href="#">
                    <img src={Logo} className="w-28" />
                </a>
                <ul className="flex">
                    <li className="p-4 text-xl">
                        <Link to='/' className={`text-light font-bold transition-all hover:text-white hover:underline hover:underline-offset-8 ${page == 'beranda' ? activeLink : ''}`}>Beranda</Link>
                    </li>
                    <li className="p-4 text-xl">
                        <Link to='/tentang-kami' className={`text-light font-bold transition-all hover:text-white hover:underline hover:underline-offset-8 ${page == 'tentang-kami' ? activeLink : ''}`}>Tentang Kami</Link>
                    </li>
                    <li className="p-4 text-xl">
                        <Link to='/produk' className={`text-light font-bold transition-all hover:text-white hover:underline hover:underline-offset-8 ${page == 'produk' ? activeLink : ''}`}>Produk</Link>
                    </li>
                    <li className="p-4 text-xl">
                        <Link to='/blog' className={`text-light font-bold transition-all hover:text-white hover:underline hover:underline-offset-8 ${page == 'blog' ? activeLink : ''}`}>Blog</Link>
                    </li>
                    <li className="p-4 text-xl">
                        <Link to='/bantuan' className={`text-light font-bold transition-all hover:text-white hover:underline hover:underline-offset-8 ${page == 'bantuan' ? activeLink : ''}`}>Bantuan</Link>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default Navbar