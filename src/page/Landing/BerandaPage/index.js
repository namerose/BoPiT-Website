import Footer from 'component/Footer';
import React, { useEffect } from 'react'
import Navbar from '../../../component/Navbar'
import AplikasiBopit from './AplikasiBopit';
import FiturPerangkat from './FiturPerangkat';
import HorrisonFordPage from './HorrisonFordPage';
import KeuntunganPage from './KeuntunganPage';
import LatarBelakangPage from './LatarBelakangPage';
import StatistikPage from './StatistikPage';
import BerandaTitle from './TittlePage';

function BerandaPage() {
    useEffect(() => {
        document.title = "BoPiT";
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <BerandaTitle />
            <LatarBelakangPage />
            <AplikasiBopit />
            <FiturPerangkat />
            <StatistikPage />
            <HorrisonFordPage />
            <KeuntunganPage />
            <Footer />
        </>
    )
}

export default BerandaPage