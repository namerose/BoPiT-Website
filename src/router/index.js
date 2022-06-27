import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TentangKami from '../page/TentangKami'
import Produk from '../page/Produk'
import LoginPage from '../page/LoginPage'
import HubungiKami from '../page/HubungiKamiPage'
import RegisterPage from '../page/RegisterPage'
import HelpPage from '../page/Bantuan'
import BerandaPage from '../page/BerandaPage'

import Beranda from 'page/Dashboard/Beranda'
import Pernagkat from 'page/Dashboard/Pernagkat'
import Pengaturan from 'page/Dashboard/Pengaturan'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<BerandaPage />} />
      <Route path="/tentang-kami" element={<TentangKami />} />
      <Route path="/bantuan" element={<HelpPage />} />
      <Route path="/produk" element={<Produk />} />
      <Route path="/hubungi-kami" element={<HubungiKami />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Beranda />} />
      <Route path='/dashboard/perangkat' element={<Pernagkat />} />
      <Route path='/dashboard/pengaturan' element={<Pengaturan />} />
    </Routes>
  )
}

export default Router