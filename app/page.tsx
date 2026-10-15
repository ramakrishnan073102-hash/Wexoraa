import HeroSection from "./components/homepage/HeroSection";
import Marquee from "./components/homepage/Marquee";
import ServiceSection from "./components/homepage/ServicesStack";
import PortfolioSection from "./components/homepage/shared/PortfolioSection";
import OurProcess from "./components/homepage/OurProcess";
import ChooseBest from "./components/homepage/ChooseTheBest";
import TestimonialSection from "./components/homepage/TestimonialSection";
import Homeabout from "./components/homepage/HomeAbout";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Marquee />
      <div className="relative overflow-visible">
        <ServiceSection />
      </div>
      <Homeabout />
      
      <OurProcess />
      <ChooseBest />
      <TestimonialSection />
    </>
  );
}