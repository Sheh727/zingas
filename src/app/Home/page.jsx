import React from 'react'
import Navbar from '../components/Navbar'
import Navbuttons from '../components/Navbuttons'
import Title from '../components/Title'
import Consult from '../components/Consult'
import Banner from '../components/Banner'
import About from '../components/About'
import Footer from '../components/Footer'
import Testomials from '../components/Testomials'
import Products from '../components/Products'
const page = () => {
  return (
    <div>
    <Navbuttons/>
    <Navbar/>
    <div className="relative flex flex-col lg:flex-row items-start justify-between px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 text-black min-h-screen h-screen w-full py-10"
      style={{
        backgroundImage: "url('/images/Home Builders bg.jpeg')",
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
     <form className="flex flex-col items-center mb-8 bg-gray-100 text-sm">
            <p className="text-lg text-blue-600  mt-8 font-medium pb-2">Contact Us</p>
            <h1 className="text-4xl font-semibold text-slate-700 pb-4">Get in touch with us</h1>
            <p className="text-sm text-gray-500 text-center pb-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum has been the industry's standard dummy text.</p>
            
            <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
                <div className="w-full">
                    <label className="text-black/70" htmlFor="name">Your Name</label>
                    <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" required />
                </div>
                <div className="w-full">
                    <label className="text-black/70" htmlFor="Email">Your Email</label>
                    <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="email" required />
                </div>
                 <div className="w-full">
                    <label className="text-black/70" htmlFor="Builder">Builder</label>
                    <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="email" required />
                </div>
            </div>
        
            <div className="mt-6 w-[350px] md:w-[700px]">
                <label className="text-black/70" htmlFor="name">Message</label>
                <textarea className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300" required></textarea>
            </div>
        
            <button type="submit" className="mt-5 mb-8 bg-indigo-600 text-white h-12 w-56 px-4 rounded active:scale-95 transition">Submit</button>
        </form>

    <Products/>
    <Consult/>
    <Banner/>
    <About/>
    <Testomials/>
    <Footer/>
    </div>
  )
}

export default page
