import React, { useEffect } from 'react'
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import logoGKM from '../../../assets/image/LogoGKM.png'
import Animated from 'component/animation';

function Penghargaan() {
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
            className="w-full h-screen bg-dark relative"
            ref={(section) => refView(section)}
        >
            <div className="items-center justify-center mx-10">
                <div className="text-center flex justify-center text-4xl font-bold pt-44 text-white">
                    <Animated.Letter text='Penghargaan' animate={controls} custom={0} delay={1} />
                </div>
                <div className='flex justify-center pt-20'>
                    <Animated.FromDirection from='left' animate={controls} custom={1} delay={1} className='flex justify-center'>
                        <Animated.Reveal from='left' animate={controls} custom={2} delay={1}>
                            <div className="flex p-10 w-[750px] h-72 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl hover:scale-105 transition-all justify-between items-center mx-12">
                                <img src={logoGKM} className='h-40' alt='' />
                                <div className='px-8'>
                                    <p className='text-3xl font-extrabold mb-3'>Gelar Karya Mahasiswa</p>
                                    <p className="text-xl font-normal text-gray-700 dark:text-gray-400">Peringkat 2 dalam lomba Gelar Karya Mahasiswa Universitas Amikom Yogyakarta dalam bidang Hardware dan IoT.</p>
                                </div>
                            </div>
                        </Animated.Reveal>
                    </Animated.FromDirection>
                </div>
            </div>
        </div>
    )
}

export default Penghargaan