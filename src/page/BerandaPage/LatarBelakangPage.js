import React, { useEffect } from 'react'
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import Animated from 'component/animation';
import worldPerson from "../../assets/image/worldPerson.jpg"

function LatarBelakangPage() {
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
            className="w-full h-screen bg-white"
            ref={section => {
                refView(section);
            }}>
            <div className="grid grid-cols-2 place-items-center h-full">
                <Animated.FromDirection from="bottom" animate={controls} custom={1} delay={0.2}>
                    <img src={worldPerson} className="w-full p-16 rounded-[99px]" alt='' />
                </Animated.FromDirection>
                <div className="text-xl w-full p-24">
                    <Animated.FromDirection from="left" animate={controls} custom={0} delay={1}>
                        <Animated.Reveal from="left" animate={controls} custom={1} delay={1}>
                            Pemanasan global yang kita rasakan saat ini merupakan akibat dari revolusi industri sejak abad ke-19. Solusi untuk mengatasi nya adalah dengan memperbaiki, dan merawat alam. Memperbaiki alam bukanlah hal mudah. Kami berpikir masih kurangnya teknologi modern yang hadir. Banyak nya perbaikan alam secara manual memiliki tingkat efisiensi yang kurang.
                            <br /><br />
                            BoPiT hadir untuk mengatasi masalah itu. Dengan mengusung teknologi jembatan perbaikan alam sebagai visi kami.  Meningkatkan efisiensi adalah prioritas kami untuk mempercepat perbaikan alam.
                        </Animated.Reveal>
                    </Animated.FromDirection>
                </div>
            </div>
        </div>
    )
}

export default LatarBelakangPage