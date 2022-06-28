import React, { useEffect } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import TypeAnimation from 'react-type-animation';
import { Link } from 'react-router-dom'
import FAQ from '../component/FAQ'

import backgroundBantuan from '../assets/image/background/Bantuan.png'
import Logo from '../assets/image/LogoBerwarna.png'

function Bantuan() {
  useEffect(() => {
    document.title = "Bantuan | BoPiT";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar page='bantuan' />
      <div className="w-full h-screen bg-cover bg-no-repeat flex content-center " style={{
        backgroundImage: `url(${backgroundBantuan})`
      }}>
        <div className='flex flex-col justify-center'>
          <Link to='/' className='flex justify-center '>
            <img src={Logo} className="w-1/4" alt='' />
          </Link>
          <TypeAnimation
            cursor={true}
            sequence={['Hal yang sering ditanyakan.']}
            wrapper="div"
            className='text-4xl text-center pt-20 text-white font-bold'
          />
        </div>
      </div>
      <div className="w-full h-screen bg-dark">
        <div className='mx-44 py-32'>
          <FAQ />
        </div>
      </div>
      <Footer space />
    </div>
  )
}

export default Bantuan