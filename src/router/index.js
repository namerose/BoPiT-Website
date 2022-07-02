import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProdukPage from '../page/Landing/ProdukPage'
import LoginPage from '../page/LoginPage'
import HubungiKami from '../page/HubungiKamiPage'
import RegisterPage from '../page/RegisterPage'
import HelpPage from '../page/Bantuan'
import BerandaPage from '../page/Landing/BerandaPage'
import TentangKamiPage from '../page/Landing/TentangKamiPage'

import Beranda from 'page/Dashboard/Beranda'
import Perangkat from 'page/Dashboard/Perangkat'
import AddDevice from 'page/Dashboard/AddDevice'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<BerandaPage />} />
      <Route path="/tentang-kami" element={<TentangKamiPage />} />
      <Route path="/bantuan" element={<HelpPage />} />
      <Route path="/produk" element={<ProdukPage />} />
      <Route path="/hubungi-kami" element={<HubungiKami />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Beranda />} />
      <Route path='/dashboard/perangkat' element={<Perangkat />} />
      <Route path='/dashboard/add-device' element={<AddDevice />} />
    </Routes>
  )
}

export default Router