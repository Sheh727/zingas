import React from 'react'
import Navbar from '../components/Navbar'
import Navbuttons from '../components/Navbuttons'
import Title from '../components/Title'
import Consult from '../components/Consult'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Testomials from '../components/Testomials'
import DrapsProducts from '../components/Drapsproduct'
const page = () => {
  return (
    <div>
    <Navbuttons/>
    <Navbar/>
    <div className="relative flex flex-col lg:flex-row items-start justify-between px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 text-black min-h-screen h-screen w-full py-10"
      style={{
        backgroundImage: "url('/images/Drapes bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
       
      <div className="w-full mt-[200px] lg:w-2/3">
        <Title
          title="Draps"
          subtitle="Whether you want custom side panels or an elegant traditional drapery for your window we make custom draperies from hundreds of fabric and style options. We also offer all hardware options."

          align="left"
        />
      </div>
      
    </div>
  
    <DrapsProducts/>     
    <Consult/>
    <Banner/>
    <Testomials/>
    <Footer/>
    </div>
  )
}

export default page
