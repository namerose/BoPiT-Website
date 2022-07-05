import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/image/LogoBerwarna.png'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logInWithEmailAndPassword, forgotPassword } from '../firebase';
import { validateEmail } from '../function';
import Animated from 'component/animation'

function LoginPage() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const [response, setResponse] = useState({ success: true });

    useEffect(() => {
        document.title = "Masuk | BoPiT"

        if (loading) {
            return;
        }

    }, [user, loading, navigate]);

    const handleLogin = () => {
        logInWithEmailAndPassword(email, password)
            .then((res) => {
                setResponse(res);
                if (res.success) {
                    navigate('/dashboard');
                }
            }).catch(err => {
                console.log(err);
            })
    }

    const handleForgotPassword = () => {
        forgotPassword(email);
    }

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <div className="md:w-1/4">
                <Animated.FromDirection from="bottom" custom={1} delay={0.2}>
                    <Link to='/' className="flex justify-center">
                        <img src={Logo} className="w-middle" alt='' />
                    </Link>

                    <div className='mt-10 text-3xl text-center font-bold' >
                        Masuk
                    </div>
                    <div className="border-gray-light border-2 shadow-md rounded-xl p-4 mt-5">
                        {!response.success && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                <strong className="font-bold">Gagal </strong>
                                <span className="block sm:inline">{response.message}</span>
                            </div>
                        )}
                        <div className="mt-5">
                            <p className="text-3xs font-semibold ml-2 ">Alamat pos-el</p>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={() => validateEmail(email)}
                                placeholder="Alamat pos-el"
                                className='mt-2 py-5 px-3 w-full h-5 bg-white rounded-xl border border-lightgrey justify-between items-center focus:outline-none focus:border-lightgrey focus:border-md placeholder:italic'
                            />
                        </div>
                        <div className="mt-5">
                            <p className="text-3xs font-semibold ml-2">Kata Sandi</p>
                            <input
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Masukkan kata sandi"
                                className='mt-2 py-5 px-3 w-full h-5 bg-white rounded-xl border border-lightgrey justify-between items-center focus:outline-none focus:border-lightgrey border-md placeholder:italic'
                            />
                            <div onClick={handleForgotPassword} className="mt-2 flex justify-end cursor-pointer">
                                <p className="text-1xs mr-2 text-blue-600 ">Lupa kata sandi?</p>
                            </div>
                        </div>
                        <div className="mt-6" >
                            <div
                                onClick={handleLogin}
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 rounded-2xl w-xl cursor-pointer">
                                <p className="font-normal text-white dark:text-white-400 text-center" >Masuk</p>
                            </div>
                        </div>
                        <div className="mt-5 flex justify-center">
                            <p className="text-2xs ml-2 inline">Belum memiliki akun?</p>
                            <Link to='/register' className="text-2xs font-extrabold ml-2 text-blue-500 cursor-pointer inline">Daftar</Link>
                        </div>
                    </div>
                </Animated.FromDirection>
            </div>
        </div >
    )
}

export default LoginPage