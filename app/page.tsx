import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Marquee from "./components/Marquee"
import MoreServiceSection from "./components/SeviceSection"
import PortfolioSection from "./components/PortfolioSection";
import OurProcess from "./components/OurProcess"
import ChooseBest from "./components/ChooseTheBest";
import TestimonialSection from "./components/TestimonialSection"
import Footer from "./components/Footer";



export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Marquee />
       <MoreServiceSection />
        <PortfolioSection />
        <OurProcess />
        <ChooseBest />
        <TestimonialSection/>
        <Footer />
     
     
     
 
    </>
  );
}