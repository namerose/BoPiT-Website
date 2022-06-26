import React, { useEffect } from 'react'
import IotIC from '../../assets/image/IotIC.png'
import peopleHandphone from '../../assets/image/peopleHandphone.png'
import peopleCut from '../../assets/image/peopleCut.png'
import waterWorld from '../../assets/image/waterWorld.png'
import Animated from 'component/animation'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function StatistikPage() {
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
            className='w-full h-screen bg-dark'
            ref={section => {
                refView(section);
            }}>
            <div className='flex flex-col text-white text-3xl items-center pt-32 font-bold'>
                <Animated.Letter text='Dari hal kecil,' animate={controls} custom={0} delay={1} />
                <Animated.Letter text='tumbuh menjadi besar...' animate={controls} custom={2} delay={1} />
            </div>
            <div className='flex flex-wrap justify-center mt-44'>
                <Animated.FromDirection from='left' animate={controls} custom={0} delay={1}>
                    <div class="flex flex-col text-center p-10 pt-0 max-w-lg h-72 bg-green-light rounded-3xl shadow-sm shadow-green-light mx-6">
                        <Animated.FadeIn animate={controls} custom={1} delay={1}>
                            <img src={IotIC} className='h-24 -mt-12' alt='ic' />
                        </Animated.FadeIn>
                        <p className='font-extrabold text-4xl py-12'>3.4 ribu+</p>
                        <p className='max-w-fit text-center text-md font-medium'>Jumlah perangkat yang telah dipasarkan di seluruh dunia.</p>
                    </div>
                </Animated.FromDirection>
                <Animated.FromDirection from='top' animate={controls} custom={0} delay={1}>
                    <div class="flex flex-col text-center p-10 pt-0 max-w-lg h-72 bg-purple-light rounded-3xl shadow-sm shadow-green-light mx-6">
                        <Animated.FadeIn animate={controls} custom={1} delay={1}>
                            <img src={peopleHandphone} className='h-24 -mt-12' alt='people' />
                        </Animated.FadeIn>
                        <p className='font-extrabold text-4xl py-12'>2.1 ribu+</p>
                        <p className='max-w-fit text-center text-md font-medium'>Jumlah pengguna perangkat kami.</p>
                    </div>
                </Animated.FromDirection>
                <Animated.FromDirection from='bottom' animate={controls} custom={0} delay={1}>
                    <div class="flex flex-col text-center p-10 pt-0 max-w-lg h-72 bg-yellow-light rounded-3xl shadow-sm shadow-green-light mx-6">
                        <Animated.FadeIn animate={controls} custom={1} delay={1}>
                            <img src={peopleCut} className='h-24 -mt-12' alt='people' />
                        </Animated.FadeIn>
                        <p className='font-extrabold text-4xl py-12'>1.8 ribu+</p>
                        <p className='max-w-fit text-center text-md font-medium'>Ton emisi karbon yang telah diserap sejak 2018.</p>
                    </div>
                </Animated.FromDirection>
                <Animated.FromDirection from='right' animate={controls} custom={0} delay={1}>
                    <div class="flex flex-col text-center p-10 pt-0 max-w-lg h-72 bg-orange-light rounded-3xl shadow-sm shadow-green-light mx-6">
                        <Animated.FadeIn animate={controls} custom={1} delay={1}>
                            <img src={waterWorld} className='h-24 -mt-12' alt='foto water' />
                        </Animated.FadeIn>
                        <p className='font-extrabold text-4xl py-12'>5.8 ribu+</p>
                        <p className='max-w-fit text-center text-md font-medium'>Ton air yang telah di hemat sejak 2018.</p>
                    </div>
                </Animated.FromDirection>
            </div>
        </div>
    )
}

export default StatistikPage