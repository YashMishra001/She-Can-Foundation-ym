import React from 'react'
import Header from '../Pages/Header'
import Footer from '../Pages/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
