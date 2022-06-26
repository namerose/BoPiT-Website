import React from 'react'
import backgroundBeranda from "../../assets/image/backgroundBeranda.png"
import { motion } from "framer-motion"

function BerandaTitle() {
    return (
        <div className="w-full h-screen bg-cover bg-no-repeat" style={{
            backgroundImage: `url(${backgroundBeranda})`
        }}>
            <motion.div
                animate={{ paddingTop: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 3 }}
                className="h-screen text-8xl leading-tight grid content-center text-white font-bold ml-36 pt-80 opacity-0">
                Ubah masa<br /> depan bumi,<br /> dengan kami!
            </motion.div>
        </div>
    )
}

export default BerandaTitle