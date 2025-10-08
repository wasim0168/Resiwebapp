import Image from "next/image";
import HeroSection from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServiceSection";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <CTASection />
    </>
  );
}
