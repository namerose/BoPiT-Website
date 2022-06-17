import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Beranda from '../page/Beranda'
import TentangKami from '../page/TentangKami'
import Produk from '../page/Produk'
import Blog from '../page/Blog'
import Bantuan from '../page/Bantuan'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/tentang-kami" element={<TentangKami />} />
      <Route path="/produk" element={<Produk />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/bantuan" element={<Bantuan />} />
    </Routes>
  )
}

export default Router