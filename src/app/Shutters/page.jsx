import React from 'react'
import Navbar from '../components/Navbar'
import Navbuttons from '../components/Navbuttons'
import Title from '../components/Title'
import Consult from '../components/Consult'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Testomials from '../components/Testomials'
import ShuttersProducts from '../components/Shuttersproduct'
const page = () => {
  return (
    <div>
    <Navbuttons/>
    <Navbar/>
    <div className="relative flex flex-col lg:flex-row items-start justify-between px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 text-black min-h-screen h-screen w-full py-10"
      style={{
        backgroundImage: "url('/images/Shutters-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
       
      <div className="w-full mt-[200px] lg:w-2/3">
        <Title
          title="Shutters"
          subtitle="Made in America by the finest craftsman but still cost less than any other competitor, including the big box stores. We even stand behind them with a true lifetime warranty on both the frame and finish..
"
          align="left"
        />
      </div>
      
    </div>
  
    <ShuttersProducts/>      
    <Consult/>
    <Banner/>
    <Testomials/>
    <Footer/>
    </div>
  )
}

export default page
