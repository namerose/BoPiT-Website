import React, { useEffect } from 'react'
import Navbar from "../component/Navbar"
import backgroundBeranda from "../assets/image/backgroundBeranda.png"
import worldPerson from "../assets/image/worldPerson.jpg"
import BopitAppScreen from "../assets/image/BopitAppScreen.png"
import Humidity from "../assets/image/Humidity.png"
import Temperature from "../assets/image/Temperature.png"
import WaterDrop from '../assets/image/WaterDrop.png'
import { SquareDot } from '../assets/svg'
import IotIC from '../assets/image/IotIC.png'
import peopleHandphone from '../assets/image/peopleHandphone.png'
import peopleCut from '../assets/image/peopleCut.png'
import waterWorld from '../assets/image/waterWorld.png'
import HarrisonFord from '../assets/image/HarrisonFord.jpg'

function Beranda() {
    useEffect(() => {
        document.title = "BoPiT"
    }, []);

    return (
        <div>
            <Navbar />
            <div className="w-full h-screen bg-cover bg-no-repeat" style={{
                backgroundImage: `url(${backgroundBeranda})`
            }}>
                <div class="h-screen text-8xl grid content-center text-white font-bold ml-36">
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
            <div className='w-full h-screen'>
                <div className='text-5xl text-center font-extrabold mt-44'>
                    Fitur perangkat kami
                </div>
                <div className='text-2xl text-grey text-center w-1/3 mx-auto mt-12'>
                    Beberapa fitur utama kami sediakan dalam perangkat untuk memudahkan dalam pengawasan tanaman
                </div>
                <div className='flex flex-wrap justify-center mt-24 relative py-24'>
                    <div className='absolute top-0 -z-10 left-36'>
                        <SquareDot />
                    </div>
                    <div class="flex p-10 max-w-md h-72 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl hover:scale-105 transition-all justify-between items-center">
                        <img src={Humidity} className='h-32' />
                        <div className='px-8'>
                            <p className='text-xl font-semibold mb-3'>Kelembaban</p>
                            <p class="font-normal text-gray-700 dark:text-gray-400">Pemantauan kelembaban udara dan tanah </p>
                        </div>
                    </div>
                    <div class="flex p-10 max-w-md h-72 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl hover:scale-105 transition-all justify-between items-center mx-12">
                        <img src={Temperature} className='h-32' />
                        <div className='px-8'>
                            <p className='text-xl font-semibold mb-3'>Suhu</p>
                            <p class="font-normal text-gray-700 dark:text-gray-400">Pemantauan suhu udara dan tanah </p>
                        </div>
                    </div>
                    <div class="flex p-10 max-w-md h-72 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl hover:scale-105 transition-all justify-between items-center">
                        <img src={WaterDrop} className='h-32' />
                        <div className='px-8'>
                            <p className='text-xl font-semibold mb-3'>Penyiraman</p>
                            <p class="font-normal text-gray-700 dark:text-gray-400">Pemantauan aktifitas penyiraman tanaman </p>
                        </div>
                    </div>
                    <div className='absolute bottom-0 -z-10 right-36'>
                        <SquareDot />
                    </div>
                </div>
            </div>
            <div className='w-full h-screen bg-dark'>
                <div className='text-white text-5xl flex justify-center text-center pt-48 font-bold'>
                    Dari hal kecil, <br />
                    tumbuh menjadi besar...
                </div>
                <div className='flex flex-wrap justify-center mt-44'>
                    <div class="flex flex-col text-center p-10 pt-0 max-w-lg h-72 bg-green-light rounded-3xl shadow-sm shadow-green-light mx-6">
                        <img src={IotIC} className='h-24 -mt-12' />
                        <p className='font-extrabold text-4xl py-12'>3.4 ribu+</p>
                        <p className='max-w-fit text-center text-md font-medium'>Jumlah perangkat yang telah dipasarkan di seluruh dunia.</p>
                    </div>
                    <div class="flex flex-col text-center p-10 pt-0 max-w-lg h-72 bg-purple-light rounded-3xl shadow-sm shadow-green-light mx-6">
                        <img src={peopleHandphone} className='h-24 -mt-12' />
                        <p className='font-extrabold text-4xl py-12'>2.1 ribu+</p>
                        <p className='max-w-fit text-center text-md font-medium'>Jumlah pengguna perangkat kami.</p>
                    </div>
                    <div class="flex flex-col text-center p-10 pt-0 max-w-lg h-72 bg-yellow-light rounded-3xl shadow-sm shadow-green-light mx-6">
                        <img src={peopleCut} className='h-24 -mt-12' />
                        <p className='font-extrabold text-4xl py-12'>1.8 ribu+</p>
                        <p className='max-w-fit text-center text-md font-medium'>Ton emisi karbon yang telah diserap sejak 2018.</p>
                    </div>
                    <div class="flex flex-col text-center p-10 pt-0 max-w-lg h-72 bg-orange-light rounded-3xl shadow-sm shadow-green-light mx-6">
                        <img src={waterWorld} className='h-24 -mt-12' />
                        <p className='font-extrabold text-4xl py-12'>5.8 ribu+</p>
                        <p className='max-w-fit text-center text-md font-medium'>Ton air yang telah di hemat sejak 2018.</p>
                    </div>
                </div>
            </div>
            <div className='w-full h-screen bg-dark flex justify-center items-center'>
                <img src={HarrisonFord} className='h-96 rounded-3xl bg-white mx-12' />
                <div className='w-1/3'>
                    <p className='text-white px-12 text-5xl'>"Sederhananya, jika kita tidak melindungi alam, kita tidak bisa melindungi diri kita sendiri."</p>
                    <p className='font-semibold text-white text-2xl float-right mt-7'>~ Harrison Ford (2018)</p>
                </div>
            </div>
        </div>
    )
}

export default Beranda