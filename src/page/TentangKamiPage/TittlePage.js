import React from 'react'
import TypeAnimation from 'react-type-animation';
import backgroundBeranda from "../../assets/image/background/Beranda.png"

function TittlePage() {
    return (
        <div className="w-full h-screen bg-cover bg-no-repeat" style={{
            backgroundImage: `url(${backgroundBeranda})`
        }}>
            <TypeAnimation
                cursor={true}
                sequence={['Harapan yang berasal dari hati.']}
                wrapper="div"
                className='h-screen w-full text-6xl flex justify-center items-center text-white font-bold'
            />
        </div>
    )
}

export default TittlePage