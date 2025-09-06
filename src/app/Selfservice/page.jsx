import React from 'react'
import Navbar from '../components/Navbar'
import Navbuttons from '../components/Navbuttons'
import Title from '../components/Title'
import Consult from '../components/Consult'
import Footer from '../components/Footer'
import Testomials from '../components/Testomials'
const page = () => {
  return (
    <div>
    <Navbuttons/>
    <Navbar/>
    <div className="relative flex flex-col lg:flex-row items-start justify-between px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 text-black min-h-screen h-screen w-full py-10"
      style={{
        backgroundImage: "url('/images/Self Service bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
       
      <div className="w-full mt-[200px] lg:w-2/3">
        <Title
          title="Book FREE In-Home Consultation"
          subtitle="Find a date & time that works best for your schedule! Book a No-Pressure, In-Home Appointment that is designed to find the perfect products for your home"
          align="left"
        />
      </div>
      
    </div>
      
    <Consult/>
    <Testomials/>
    <Footer/>
    </div>
  )
}

export default page
