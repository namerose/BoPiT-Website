import Footer from 'component/Footer';
import React, { useEffect } from 'react'
import Navbar from '../../../component/Navbar'
import TitlePage from './TittlePage';
import DevicePage from './DevicePage';

function ProdukPage() {
    useEffect(() => {
        document.title = "BoPiT";
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar page = 'produk'/>
            <TitlePage />
            <DevicePage />
            <Footer space/>
        </>
    )
}

export default ProdukPage