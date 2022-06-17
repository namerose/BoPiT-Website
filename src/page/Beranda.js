import React from 'react'
import Navbar from "../component/Navbar"
import backgroundBeranda from "../assets/image/backgroundBeranda.png"
import worldPerson from "../assets/image/worldPerson.jpg"
import BopitAppScreen from "../assets/image/BopitAppScreen.png"

function Beranda() {
    return (
        <div>
            <Navbar />
            <div className="w-full h-screen bg-cover bg-no-repeat" style={{
                backgroundImage: `url(${backgroundBeranda})`
            }}>
                <div class="h-screen text-9xl grid content-center text-white font-bold ml-36">
                    Ubah masa<br /> depan bumi,<br /> dengan kami!
                </div>
            </div>
            <div className="w-full h-screen bg-white">
                <div className="flex items-center h-screen justify-center">
                    <img src={worldPerson} className="w-middle m-16 rounded-3xl" />
                    <div className="text-2xl w-1/3 ml-12">
                        Pemanasan global yang kita rasakan saat ini merupakan akibat dari revolusi industri sejak abad ke-19. Solusi untuk mengatasi nya adalah dengan memperbaiki, dan merawat alam. Memperbaiki alam bukanlah hal mudah. Kami berpikir masih kurangnya teknologi modern yang hadir. Banyak nya perbaikan alam secara manual memiliki tingkat efisiensi yang kurang.
                        <br /><br />
                        BoPiT hadir untuk mengatasi masalah itu. Dengan mengusung teknologi jembatan perbaikan alam sebagai visi kami.  Meningkatkan efisiensi adalah prioritas kami untuk mempercepat perbaikan alam.
                    </div>
                </div>
            </div>
            <div className="w-full h-screen bg-dark">
                <div className="text-white text-5xl flex justify-center text-center pt-52 font-bold">
                    Kenalin, BoPiT.<br />
                    Perangkat IoT yang dapat memantau dan menyiram tanaman otomatis
                </div>
                <div className="flex items-center mx-16 justify-between">
                    <div className="text-4xl text-white">
                        Tak perlu lagi mengeluh 'ribet dan ngga ada waktu' untuk melakukan penyiraman tanaman. Dengan BoPiT, semua dapat di kontrol dari genggaman Anda.
                    </div>
                    <img src={BopitAppScreen} className="w-middle m-16 rounded-3xl" />
                </div>
            </div>
        </div>
    )
}

export default Beranda