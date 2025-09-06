import React from 'react'
import Navbar from '../components/Navbar'
import Navbuttons from '../components/Navbuttons'
import Title from '../components/Title'
import Consult from '../components/Consult'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Testomials from '../components/Testomials'
import BlindsProducts from '../components/Blindsproduct'
const page = () => {
  return (
    <div>
    <Navbuttons/>
    <Navbar/>
    <div className="relative flex flex-col lg:flex-row items-start justify-between px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 text-black min-h-screen h-screen w-full py-10"
      style={{
        backgroundImage: "url('/images/Blinds bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
       
      <div className="w-full mt-[200px] lg:w-2/3">
        <Title
          title="Blinds"
          subtitle="Backed by a lifetime warranty, you will find our products are of the highest quality, yet cost less than going to Lowe’s or Home Depot. With the convenience of in-home appointments we fit your time and budget.
"
          align="left"
        />
      </div>
      
    </div>
  
     <BlindsProducts/>       
    <Consult/>
    <Banner/>
    <Testomials/>
    <Footer/>
    </div>
  )
}

export default page
