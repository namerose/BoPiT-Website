import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Beranda from '../page/Beranda'
import TentangKami from '../page/TentangKami'
import Produk from '../page/Produk'
import LoginPage from '../page/LoginPage'
import HubungiKami from '../page/HubungiKamiPage'
import RegisterPage from '../page/RegisterPage'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/tentang-kami" element={<TentangKami />} />
      <Route path="/produk" element={<Produk />} />
      <Route path="/hubungi-kami" element={<HubungiKami />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}

export default Router