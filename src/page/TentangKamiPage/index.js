import Footer from 'component/Footer';
import React, { useEffect } from 'react'
import Navbar from '../../component/Navbar'
import BerawalGKM from './BerawalGKM';
import IndonesiaMaps from './IndonesiaMaps';
import Inspirasi from './Inspirasi';
import Penghargaan from './Penghargaan';
import TittlePage from './TittlePage';

function TentangKamiPage() {
    useEffect(() => {
        document.title = "Tentang kami | BoPiT";
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar page='tentang-kami' />
            <TittlePage />
            <BerawalGKM />
            <IndonesiaMaps />
            <Inspirasi />
            <Penghargaan />
            <Footer />
        </>
    )
}

export default TentangKamiPage