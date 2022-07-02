import React, { useEffect } from 'react'
import { motion } from "framer-motion"

import backgrounProduk from '../../../assets/image/background/Produk.png'

function TitlePage() {
    useEffect(() => {
        document.title = "Produk | BoPiT";
        window.scrollTo(0, 0);
    }, []);

    return (
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
    )
}

export default TitlePage