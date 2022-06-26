import React, { useEffect } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { motion } from "framer-motion"

import backgrounProduk from '../assets/image/background/Produk.png'
import produkFront from '../assets/image/Device_front.png'
import produkBack from '../assets/image/Device_back.png'

function Produk() {
    useEffect(() => {
        document.title = "Produk | BoPiT";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Navbar page='produk' />
            <div className="w-full h-screen bg-cover bg-no-repeat" style={{
                backgroundImage: `url(${backgrounProduk})`
            }}>
                <motion.div
                    animate={{ paddingTop: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 2 }}
                    className="h-screen text-6xl leading-tight grid content-center text-white font-bold ml-36 pt-80 opacity-0">
                    Kami membuat alat untuk <br /> memperbaiki bumi, <br />bersama
                </motion.div>
            </div>
            <div className="w-full h-screen grid grid-cols-2">
                <div className='h-screen grid grid-rows-2 content-between pt-20 pl-10'>
                    <img src={produkFront} className="w-2/4 justify-self-center" alt='' />
                    <div>
                        <div className="text-2xl">
                            Banyak Pilihan
                        </div>
                        <div className="text-3xl font-extrabold pt-3">
                            Banyak Pilihan Sesuai Kebutuhan Anda
                        </div>
                        <div className="text-2xl pt-3">
                            Dukungan LoRa-WAN dan panel surya untuk transmisi jarak jauh membuat perangkat BoPiT dapat dipasang pada daerah yang jauh dari pemukiman dan minim akes internet.
                        </div>
                    </div>
                </div>
                <div className='h-screen grid grid-rows-2 content-between pt-20 pr-10'>
                    <div>
                        <div className="text-2xl">
                            Harga Terbaik
                        </div>
                        <div className="text-3xl font-extrabold pt-3">
                            Biaya Hemat, Kualitas Hebat
                        </div>
                        <div className="text-2xl pt-3">
                            Anda bisa memiliki perangkat BoPiT  siap pakai dengan sedikit biaya. Fitur yang lengkap dilengkapi dengan WiFi akan memudahkan pengelolaan tanaman pada halaman rumah Anda.
                        </div>
                    </div>
                    <img src={produkBack} className="w-3/4 justify-self-center" alt='' />
                </div>
            </div>
            <Footer space />
        </div>
    )
}

export default Produk