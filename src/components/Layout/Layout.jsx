import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from "../Footer/Footer"
import { Outlet } from 'react-router-dom'
import ScrollTop from '../ScrollTop'
import ved from '../../assets/giphy.mp4'
import ScrollToTop from '../SceollToTop/SceollToTop'

export default function Layout() {
  return (
   <>
   <Navbar/>
<ScrollTop/>
<video autoPlay muted loop id="background-video">
        <source src={ved} type="video/mp4" />
      </video>
<div className="container mx-auto overflow-hidden">
  <ScrollToTop/>
<Outlet/>
</div>

   <Footer/>
   </>
  )
}
