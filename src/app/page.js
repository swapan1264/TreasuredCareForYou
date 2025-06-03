"use client";  
// import AboutSection from "./components/AboutSection";
// import CompanyValues from "./components/CompanyValues";
// import ContactUs from "./components/Contactus";
import HeroSection from "./components/HeroSection";
// import VisionMission from "./components/VissionMission";
// import WelcomeMessage from "./components/Welcome";
import ExperienceSection from "./ExperienceSection/page";
import JoinUsSection from "./JoinUsSection/page";
import PersonalisedSupportSection from "./PersonalisedSupportSection/page";
import ServicesPage from "./mainservices/page";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPage/>
      <ExperienceSection/>
      <PersonalisedSupportSection/>
      <JoinUsSection/>
      {/* <WelcomeMessage/>
      <VisionMission/>
      <CompanyValues/>
      <AboutSection/>
      <ContactUs/> */}

      {/* You could also include a brief About preview, etc. */}
    </>
  );
}
