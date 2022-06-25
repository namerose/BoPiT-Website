import React, { useEffect } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

function Produk() {
    useEffect(() => {
        document.title = "Produk | BoPiT";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Navbar page='produk' />
            <Footer />
        </div>
    )
}

export default Produk