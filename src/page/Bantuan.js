import React, { useEffect } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

function Bantuan() {
  useEffect(() => {
    document.title = "Bantuan | BoPiT";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  )
}

export default Bantuan