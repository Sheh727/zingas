import Image from "next/image"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer"
import Consult from "./components/Consult";
import Products from "./components/Products";
import Banner from "./components/Banner";
import About from "./components/About";
import Navbuttons from "./components/Navbuttons";
import Testomials from "./components/Testomials";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <>
    <Navbuttons/>
    <Navbar/>
    <Hero/> 
    <Gallery/>
    <Products/>
    <Consult/>
    <Banner/>
    <About/>
    <Testomials/>
    <Footer/>
    </>
  );
}