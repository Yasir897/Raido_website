import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import AnimatedDivider from "@/components/AnimatedDivider";
import Services from "@/components/Services";
import Mission from "@/components/Mission";
import Vision from "@/components/Vision";
import RidersDrivers from "@/components/RidersDrivers";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <AnimatedDivider />
        <Services />
        <AnimatedDivider />
        <Mission />
        <Vision />
        <AnimatedDivider />
        <RidersDrivers />
        <AnimatedDivider />
        <ComingSoon />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
