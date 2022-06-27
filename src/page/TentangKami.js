// Import components
import React, { useEffect } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import TypeAnimation from 'react-type-animation';

// Import assets
import peopleGraduate from '../assets/image/peopleGraduate.png'
import backgroundBeranda from "../assets/image/background/Beranda.png"
import logoGKM from '../assets/image/LogoGKM.png'
import worldMap from '../assets/image/WorldMap.png'


function TentangKami() {
    useEffect(() => {
        document.title = "Tentang kami | BoPiT";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Navbar page='tentang-kami' />
            <div className="w-full h-screen bg-cover bg-no-repeat" style={{
                backgroundImage: `url(${backgroundBeranda})`
            }}>
                <TypeAnimation
                    cursor={true}
                    sequence={['Harapan yang berasal dari hati.']}
                    wrapper="div"
                    className='h-screen w-full text-6xl flex justify-center items-center text-white font-bold'
                />
            </div>
            <div className="w-full h-screen relative">
                <div className="items-center justify-center mx-32">
                    <div className="text-center text-4xl font-bold pt-44">
                        Semuanya berawal ketika GKM
                    </div>
                    <div className="text-justify text-2xl pt-12">
                        Berawal mengikuti lomba Gelar Karya Mahasiswa (GKM) Universitas Amikom Yogyakarta dengan tema yang kami bawa yaitu sebuah penyiram tanaman otomatis. Membuat kami terpikir untuk mencoba memasarkan produk pertama kami, penyiram tanaman otomatis yang kami beri nama Bot Penyiram Tanaman (BoPiT), yang kemudian menjadi cikal bakal perusahaan.
                    </div>
                </div>
                <div className='absolute bottom-0 -z-10 flex justify-center'>
                    <img src={peopleGraduate} className="w-6/12" alt='people-graduate' />
                </div>
            </div>
            <div className="w-full h-screen bg-dark relative">
                <div className="items-center justify-center mx-10">
                    <div className="text-center text-4xl font-bold pt-44 text-white">
                        Dari Indonesia, untuk dunia
                    </div>
                    <div className='w-full flex items-center justify-center pt-10'>
                        <img src={worldMap} className="w-3/5" />
                    </div>
                    <div className="text-center text-2xl pt-10 text-white">
                        Saat ini, client kami tersebar di lebih dari 20 negara
                    </div>
                </div>
            </div>
            <div className="w-full h-screen bg-dark relative">
                <div className="items-center justify-center mx-10">
                    <div className="text-center text-4xl font-bold pt-40 text-white">
                        Inspirasi kami
                    </div>
                    <div className='w-full flex justify-center pt-10'>
                        <iframe width="720"
                            height="420"
                            src="https://www.youtube-nocookie.com/embed/DhhVr5iLF-c"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen />
                    </div>
                </div>
            </div>
            <div className="w-full h-screen bg-dark relative">
                <div className="items-center justify-center mx-10">
                    <div className="text-center text-4xl font-bold pt-44 text-white">
                        Penghargaan
                    </div>
                    <div className='flex justify-center pt-20'>
                        <div className="flex p-10 w-1/2 h-72 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl hover:scale-105 transition-all justify-between items-center mx-12">
                            <img src={logoGKM} className='h-40' />
                            <div className='px-8'>
                                <p className='text-3xl font-extrabold mb-3'>Gelar Karya Mahasiswa</p>
                                <p className="text-xl font-normal text-gray-700 dark:text-gray-400">Peringkat 2 dalam lomba Gelar Karya Mahasiswa Universitas Amikom Yogyakarta dalam bidang Hardware dan IoT.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TentangKami