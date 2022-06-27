import React, { useEffect } from 'react'
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Animated from 'component/animation';

function Inspirasi() {
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
                <div className="text-center flex justify-center text-4xl font-bold pt-40 text-white">
                    <Animated.Letter text='Inspirasi kami' animate={controls} custom={0} delay={1} />
                </div>
                <div className='w-full flex justify-center pt-10'>
                    <Animated.FadeIn animate={controls} custom={1} delay={1}>
                        <iframe width="720"
                            height="420"
                            src="https://www.youtube-nocookie.com/embed/DhhVr5iLF-c"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen />
                    </Animated.FadeIn>
                </div>
            </div>
        </div>
    )
}

export default Inspirasi