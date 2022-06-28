import React, { useEffect } from 'react'
import { SquareDot } from '../../../assets/svg'
import Humidity from "../../../assets/image/Humidity.png"
import Temperature from "../../../assets/image/Temperature.png"
import WaterDrop from '../../../assets/image/WaterDrop.png'
import Animated from 'component/animation'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function FiturPerangkat() {
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
            className='w-full h-screen'
            ref={section => {
                refView(section);
            }}>
            <div className='text-3xl font-extrabold mt-32'>
                <Animated.Letter text='Fitur perangkat kami' animate={controls} custom={0} delay={1} className='text-center' />
            </div>
            <div className='text-xl text-grey text-center w-1/3 mx-auto mt-8'>
                <Animated.FromDirection from="top" animate={controls} custom={0} delay={1}>
                    <Animated.Reveal from="top" animate={controls} custom={1} delay={1}>
                        Beberapa fitur utama kami sediakan dalam perangkat untuk memudahkan dalam pengawasan tanaman
                    </Animated.Reveal>
                </Animated.FromDirection>
            </div>
            <div className='flex flex-wrap justify-center mt-20 relative py-24'>
                <div className='absolute top-0 -z-10 left-36'>
                    <Animated.FromDirection from="top" animate={controls} custom={1} delay={0.5}>
                        <SquareDot />
                    </Animated.FromDirection>
                </div>
                <Animated.FadeIn animate={controls} custom={0} delay={0.2}>
                    <div className="flex p-10 max-w-md h-52 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl hover:scale-105 transition-all justify-between items-center">
                        <img src={Humidity} className='h-32' alt='' />
                        <div className='px-8'>
                            <p className='text-lg font-semibold mb-3'>Kelembaban</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">Pemantauan kelembaban udara dan tanah </p>
                        </div>
                    </div>
                </Animated.FadeIn>
                <Animated.FadeIn animate={controls} custom={1} delay={0.2}>
                    <div className="flex p-10 max-w-md h-52 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl hover:scale-105 transition-all justify-between items-center mx-12">
                        <img src={Temperature} className='h-32' alt='' />
                        <div className='px-8'>
                            <p className='text-lg font-semibold mb-3'>Suhu</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">Pemantauan suhu udara dan tanah </p>
                        </div>
                    </div>
                </Animated.FadeIn>
                <Animated.FadeIn animate={controls} custom={2} delay={0.2}>
                    <div className="flex p-10 max-w-md h-52 bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl hover:scale-105 transition-all justify-between items-center">
                        <img src={WaterDrop} className='h-32' alt='water' />
                        <div className='px-8'>
                            <p className='text-lg font-semibold mb-3'>Penyiraman</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">Pemantauan aktifitas penyiraman tanaman </p>
                        </div>
                    </div>
                </Animated.FadeIn>
                <div className='absolute bottom-0 -z-10 right-36'>
                    <Animated.FromDirection from="bottom" animate={controls} custom={1} delay={0.5}>
                        <SquareDot />
                    </Animated.FromDirection>
                </div>
            </div>
        </div>
    )
}

export default FiturPerangkat