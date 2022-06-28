import React, { useEffect } from 'react'
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import Animated from 'component/animation';
import BopitAppScreen from "../../../assets/image/BopitAppScreen.png"

function AplikasiBopit() {
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
            className="w-full h-screen bg-dark"
            ref={section => {
                refView(section);
            }}>
            <div className="text-white text-3xl flex justify-center text-center pt-32 font-bold">
                <Animated.Reveal from="right" animate={controls} delay={0.2}>
                    Kenalin, BoPiT.<br />
                    Perangkat IoT yang dapat memantau dan menyiram tanaman otomatis
                </Animated.Reveal>
            </div>
            <div className="flex items-center mx-16 justify-between">
                <div className="text-2xl text-white">
                    Tak perlu lagi mengeluh 'ribet dan ngga ada waktu' untuk melakukan penyiraman tanaman. Dengan BoPiT, semua dapat di kontrol dari genggaman Anda.
                </div>
                <Animated.FadeIn animate={controls} delay={0.2} className="w-full m-16 rounded-3xl">
                    <img src={BopitAppScreen} alt='' />
                </Animated.FadeIn>
            </div>
        </div>
    )
}

export default AplikasiBopit