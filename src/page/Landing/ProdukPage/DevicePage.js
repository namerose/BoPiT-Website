import React, { useEffect } from 'react'
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Animated from 'component/animation'

import produkFront from '../../../assets/image/Device_front.png'
import produkBack from '../../../assets/image/Device_back.png'

function DevicePage() {
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
        <div className="w-full h-screen grid grid-cols-2"
            ref={section => {
                refView(section);
            }}>
            <div className='h-screen grid grid-rows-2 content-between pt-20 pl-10'>
                <div>
                    <Animated.FromDirection from="left" animate={controls} custom={1} delay={0.2}>
                        <div className='w-full grid'>
                            <img src={produkFront} className="w-2/4 justify-self-center" alt='' />
                        </div>
                    </Animated.FromDirection>
                </div>
                <div>
                    <Animated.FromDirection from="bottom" animate={controls} custom={0} delay={1}>
                        <Animated.Reveal from="bottom" animate={controls} custom={1} delay={1}>
                            <div className="text-2xl">
                                Banyak Pilihan
                            </div>
                            <div className="text-3xl font-extrabold pt-3">
                                Banyak Pilihan, Sesuai Kebutuhan Anda
                            </div>
                            <div className="text-2xl pt-3">
                                Dukungan LoRa-WAN dan panel surya untuk transmisi jarak jauh membuat perangkat BoPiT dapat dipasang pada daerah yang jauh dari pemukiman dan minim akes internet.
                            </div>
                        </Animated.Reveal>
                    </Animated.FromDirection>
                </div>
            </div>
            <div className='h-screen grid grid-rows-2 content-between pt-20 pr-10'>
                <div>
                    <Animated.FromDirection from="top" animate={controls} custom={0} delay={1}>
                        <Animated.Reveal from="top" animate={controls} custom={1} delay={1}>
                            <div className="text-2xl">
                                Harga Terbaik
                            </div>
                            <div className="text-3xl font-extrabold pt-3">
                                Biaya Hemat, Kualitas Hebat
                            </div>
                            <div className="text-2xl pt-3">
                                Anda bisa memiliki perangkat BoPiT  siap pakai dengan sedikit biaya. Fitur lengkap disertai WiFi akan memudahkan pengelolaan tanaman pada halaman rumah Anda.
                            </div>
                        </Animated.Reveal>
                    </Animated.FromDirection>

                </div>
                <div>
                    <Animated.FromDirection from="right" animate={controls} custom={1} delay={0.2}>
                        <div className='w-full grid'>
                            <img src={produkBack} className="w-3/4 justify-self-center" alt='' />
                        </div>
                    </Animated.FromDirection>
                </div>
            </div>
        </div>
    )
}

export default DevicePage