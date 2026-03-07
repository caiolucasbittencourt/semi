import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import SpecsSection from "../components/SpecsSection";
import FeaturesSection from "../components/FeaturesSection";
import InteriorSection from "../components/InteriorSection";
import CTASection from "../components/CTASection";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.state]);

  return (
    <>
      <HeroSection />
      <SpecsSection />
      <FeaturesSection />
      <InteriorSection />
      <CTASection />
    </>
  );
}
