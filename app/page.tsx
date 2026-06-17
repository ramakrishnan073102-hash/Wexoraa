
import HeroSection from "./components/HeroSection";
import Marquee from "./components/Marquee"
import ServicesStack from "./components/ServicesStack"
import PortfolioSection from "./components/PortfolioSection";
import OurProcess from "./components/OurProcess"
import ChooseBest from "./components/ChooseTheBest";
import TestimonialSection from "./components/TestimonialSection"

import Homeabout from "./components/HomeAbout"




export default function Home() {
  return (
      
    <>
  
  
      <HeroSection />
      <Marquee />
     
      <ServicesStack />
       <Homeabout />
        <PortfolioSection />
        <OurProcess />
        <ChooseBest />
        <TestimonialSection/>
      
       
       
     
     
     
 
    </>
   
  );
}