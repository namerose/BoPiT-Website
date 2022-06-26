import Animated from 'component/animation';
import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import HarrisonFord from '../../assets/image/HarrisonFord.jpg'

function HorrisonFordPage() {
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
            className='w-full h-screen bg-dark flex justify-center items-center'
            ref={section => {
                refView(section);
            }}>
            <Animated.FromDirection from='left' animate={controls} custom={0} delay={1}>
                <img src={HarrisonFord} className='h-96 rounded-3xl bg-white mx-12' alt='foto horisson ford' />
            </Animated.FromDirection>
            <div className='w-1/3'>
                <Animated.FromDirection from='right' animate={controls} custom={0} delay={1}>
                    <Animated.Reveal from='right' animate={controls} custom={1} delay={1}>
                        <p className='text-white px-12 text-4xl'>"Sederhananya, jika kita tidak melindungi alam, kita tidak bisa melindungi diri kita sendiri."</p>
                    </Animated.Reveal>
                </Animated.FromDirection>
                <p className='font-semibold text-white text-2xl float-right mt-7'>
                    <Animated.Letter text='~ Harrison Ford (2018)' animate={controls} custom={1} delay={1} />
                </p>
            </div>
        </div>
    )
}

export default HorrisonFordPage