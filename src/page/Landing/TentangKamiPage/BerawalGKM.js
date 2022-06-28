import React, { useEffect } from 'react'
import Animated from 'component/animation'
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import peopleGraduate from '../../../assets/image/peopleGraduate.png'

function BerawalGKM() {
    const controls = useAnimation();
    const [refView, inView] = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            controls.start('show');
        }
    }, [controls, inView]);

    return (
        <div
            className="w-full h-screen relative"
            ref={(section) => refView(section)}
        >
            <div className="items-center justify-center mx-32">
                <div className="text-center text-4xl font-bold pt-44">
                    <Animated.Letter text='Semuanya berawal ketika GKM' animate={controls} custom={0} delay={1} />
                </div>
                <div className="text-justify text-2xl pt-12">
                    <Animated.FromDirection from='left' animate={controls} custom={1} delay={1}>
                        <Animated.Reveal from='left' animate={controls} custom={2} delay={1}>
                            Berawal mengikuti lomba Gelar Karya Mahasiswa (GKM) Universitas Amikom Yogyakarta dengan tema yang kami bawa yaitu sebuah penyiram tanaman otomatis. Membuat kami terpikir untuk mencoba memasarkan produk pertama kami, penyiram tanaman otomatis yang kami beri nama Bot Penyiram Tanaman (BoPiT), yang kemudian menjadi cikal bakal perusahaan.
                        </Animated.Reveal>
                    </Animated.FromDirection>
                </div>
            </div>
            <div className='absolute bottom-0 -z-10'>
                <Animated.FromDirection from='bottom' animate={controls} custom={3} delay={1}>
                    <img src={peopleGraduate} className="w-6/12 float-right" alt='people-graduate' />
                </Animated.FromDirection>
            </div>
        </div>
    )
}

export default BerawalGKM