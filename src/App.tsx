import { useState } from "react";
import HeaderNav from "./components/Header";
import Home from "./pages/Home";
import Marquee from "./components/Marquee";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import SoilSection from "./components/SoilSelection";
import GravelSection from "./components/GravelSelection";
import BarkSection from "./components/BarkSelection";
import DecorativeSection from "./components/DecorativeSelection";
import GreenhouseSection from "./components/GreenhouseSelection";
import ServicesSection from "./components/ServiceSelection";
import AffiliatesSection from "./components/AffiliatesSection";
import ContactSection from "./components/ContactSection";
import GreenhouseInventory from "./components/GreenhouseInventory";
import GreenhousePictures from "./components/GreenhousePictures";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "soil":
        return <SoilSection />;
      case "gravel":
        return <GravelSection />;
      case "bark":
        return <BarkSection />;
      case "rock":
        return <DecorativeSection />;
      case "greenhouse":
        return <GreenhouseSection />;
      case "inventory":
        return <GreenhouseInventory />;
      case "pictures":
        return <GreenhousePictures />;
      case "services":
        return <ServicesSection />;
      case "affiliates":
        return <AffiliatesSection />;
      case "contact":
        return <ContactSection />;
      case "home":
      default:
        return <Home onNavigate={setActiveSection} />;
    }
  };
  

  return (
    <>
      <HeaderNav onNavigate={setActiveSection} />

      <div className="pt-[14rem]">
        <Marquee />
        {renderSection()}
        {activeSection === "home" && <FAQs />}
        <Footer onNavigate={setActiveSection} />
      </div>
    </>
  );
}

export default App;
