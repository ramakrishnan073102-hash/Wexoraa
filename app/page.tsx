import HeroSection from "./components/HeroSection";
import Marquee from "./components/Marquee";
import ServiceSection from "./components/ServicesStack";
import PortfolioSection from "./components/PortfolioSection";
import OurProcess from "./components/OurProcess";
import ChooseBest from "./components/ChooseTheBest";
import TestimonialSection from "./components/TestimonialSection";
import Homeabout from "./components/HomeAbout";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Marquee />

      <div className="relative overflow-visible">
        <ServiceSection />
      </div>

      <Homeabout />
      <PortfolioSection />
      <OurProcess />
      <ChooseBest />
      <TestimonialSection />
    </>
  );
}