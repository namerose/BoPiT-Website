import React, { useEffect } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

import { LocationIcon } from '../assets/svg'

function ContactUsPage() {
    useEffect(() => {
        document.title = "Kontak kami | BoPiT";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Navbar page='hubungi-kami' />
            <div className="w-full h-screen bg-dark relative">
                <div className="items-center justify-center mx-44  text-white">
                    <div className="text-center text-4xl font-bold pt-44">
                        Kontak kami
                    </div>
                    <div className='text-2xl pt-12'>
                        <div className="font-extrabold">
                            Pos-el:
                        </div>
                        <div className="mt-2">
                            customerservice@bopit.id
                        </div>
                    </div>
                    <div className='text-2xl pt-12'>
                        <div className="font-extrabold">
                            Telepon:
                        </div>
                        <div className="mt-2">
                            (0274) 884201
                        </div>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='text-2xl pt-12'>
                            <div className='justify-center'>
                                <LocationIcon className='inline mr-3' />
                                <div className="text-2xl font-extrabold pt-12 inline">
                                    Kantor kami:
                                </div>
                            </div>
                            <div className="mt-2">
                                Jl. Ring Road Utara, Ngringin, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
                            </div>
                        </div>
                        <div className="-mt-40 ml-6">
                            <div className="gmap_canvas">
                                <iframe width="600" height="350" id="gmap_canvas" src="https://maps.google.com/maps?q=amikom%20yogyakarta&t=&z=17&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer space />
        </div>
    )
}

export default ContactUsPage