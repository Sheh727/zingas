import React from 'react'
import Navbar from '../components/Navbar'
import Navbuttons from '../components/Navbuttons'
import Title from '../components/Title'
import Consult from '../components/Consult'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Testomials from '../components/Testomials'
import ShadesProducts from '../components/Shadesproduct'
const page = () => {
  return (
    <div>
    <Navbuttons/>
    <Navbar/>
    <div className="relative flex flex-col lg:flex-row items-start justify-between px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 text-black min-h-screen h-screen w-full py-10"
      style={{
        backgroundImage: "url('/images/Shades bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
       
      <div className="w-full mt-[200px] lg:w-2/3">
        <Title
          title="Shades"
          subtitle="Zinga’s offers the highest quality shades with a true lifetime warranty, all at prices that beat the big box stores. Let us meet you at your home and show you options that fit your style and needs."
          align="left"
        />
      </div>
      
    </div>
  
    <ShadesProducts/>        
    <Consult/>
    <Banner/>
    <Testomials/>
    <Footer/>
    </div>
  )
}

export default page
