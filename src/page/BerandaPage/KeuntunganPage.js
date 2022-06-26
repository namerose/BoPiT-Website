import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Factory from '../../assets/image/Factory.jpg'
import SandArid from '../../assets/image/SandArid.jpg'
import RainforestEmergents from '../../assets/image/RainforestEmergents.jpg'
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Animated from 'component/animation';

function KeuntunganPage() {
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
            <div className='text-white text-3xl flex justify-center text-center pt-38 font-bold'>
                <Animated.Letter text='Keuntungan penggunaan BoPiT adalah...' animate={controls} custom={0} delay={1} />
            </div>
            <Animated.FadeIn animate={controls} custom={1} delay={1}>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={2}
                    initialSlide={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    centeredSlides
                    className='mt-28'
                >
                    <SwiperSlide>
                        <div className="relative h-72 rounded-3xl overflow-hidden">
                            <img src={Factory} alt="Avatar" className="object-cover w-full h-full" />
                            <div className="absolute w-full p-6 bottom-0 inset-x-0 font-extrabold text-xl text-white leading-4">
                                Berpartisipasi tahun 2050, 0% emisi karbon
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative h-72 rounded-3xl overflow-hidden">
                            <img src={SandArid} alt="Avatar" className="object-cover w-full h-full" />
                            <div className="absolute w-full p-6 bottom-0 inset-x-0 font-extrabold text-xl text-white leading-4">
                                Mengurangi efek pemanasan global
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative h-72 rounded-3xl overflow-hidden">
                            <img src={RainforestEmergents} alt="Avatar" className="object-cover w-full h-full" />
                            <div className="absolute w-full p-6 bottom-0 inset-x-0 font-extrabold text-xl text-white leading-4">
                                Menjaga keseimbangan alam
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Animated.FadeIn>
        </div>
    )
}

export default KeuntunganPage