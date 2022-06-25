import React from 'react'
import Navbar from '../component/Navbar'
import { LocationIcon } from '../assets/svg'

function ContactUsPage() {
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
                    <div className='text-2xl pt-12'>
                        <div className='justify-center'>
                            <LocationIcon className='inline mr-3' />
                            <div className="text-2xl font-extrabold pt-12 inline">
                                Alamat kami:
                            </div>
                        </div>
                        <div className="mt-2">
                            Jl. Ring Road Utara, Ngringin, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsPage