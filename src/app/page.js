import Image from "next/image"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer"
import Consult from "./components/Consult";
import Products from "./components/Products";
import Banner from "./components/Banner";
import About from "./components/About";
import Testomials from "./components/Testomials";
import Gallery from "./components/Gallery";

import Custom from "./components/Custom";

export default function Home() {
  return (
    <>
    
    <Navbar/>
    <Hero/> 
    <Gallery/>
    <Products/>
    <Consult/>
    <Banner/>
    <About/>
    
    <Testomials/>
    <Custom/>
    <Footer/>
    </>
  );
}