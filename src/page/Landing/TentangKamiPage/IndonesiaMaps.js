import React, { useEffect } from 'react'
import Animated from 'component/animation';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import worldMap from '../../../assets/image/WorldMap.png'

function IndonesiaMaps() {
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
                <div className="text-center text-4xl flex justify-center font-bold pt-44 text-white">
                    <Animated.Letter text='Dari Indonesia, untuk dunia' animate={controls} custom={0} delay={1} />
                </div>
                <div className='w-full pt-10'>
                    <Animated.FromDirection from='bottom' animate={controls} custom={1} delay={1} className='flex justify-center'>
                        <img src={worldMap} className="w-[850px]" alt='' />
                    </Animated.FromDirection>
                </div>
                <div className="text-center text-2xl pt-10 text-white">
                    <Animated.FromDirection from='right' animate={controls} custom={1} delay={1}>
                        <Animated.Reveal from='right' animate={controls} custom={2} delay={1}>
                            Saat ini, client kami tersebar di lebih dari 20 negara
                        </Animated.Reveal>
                    </Animated.FromDirection>
                </div>
            </div>
        </div>
    )
}

export default IndonesiaMaps