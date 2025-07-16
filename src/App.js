

import React from "react";
import { Routes, Route } from "react-router-dom";  
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Recruiters from "./pages/Recruiters";
import WhyMarwadi from "./pages/WhyMarwadi";
import ThreeLayerEducation from "./pages/ThreeLayerEducation";
import StatsSection from "./pages/StatsSection";
import CampusLife from "./pages/CampusLife";
import HeroSection  from "./pages/Status&Accredition"
import Tabs from "./pages/Tabs";
import Library from "./pages/Library"
import SkillDevelopmentReport   from "./pages/SkillDevelopment"
import Aboutrajkot from "./pages/Aboutrajkot"
import PhotoStackGallery from "./pages/PhotoStackGallery"
import GuinnessSection from "./pages/Guinnessworld"
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />  {/* ✅ Navbar Har Page Pe Dikhega */}
      <Routes>
        <Route path="/" element={<HomeWithRecruiters />} />  {/* ✅ Home me Recruiters Include */}
        <Route path="/home" element={<HomeWithRecruiters />} />
        <Route
          path="/about"
          element={
            <>
              <About />
              {/* <ThreeLayerEducation />
              <WhyMarwadi />
             <Aboutrajkot/>
             <HeroSection/>
             <SkillDevelopmentReport/> */}
            </>
          }
        />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/library" element={<><Library/> <PhotoStackGallery/> <GuinnessSection/></> } />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />


        {/* About Sub Pages */}
        <Route path="/about/three-layer-education" element={<ThreeLayerEducation />} />
        <Route path="/about/why-marwadi" element={<WhyMarwadi />} />
        <Route path="/about/aboutrajkot" element={<Aboutrajkot />} />
        <Route path="/about/hero-section" element={<HeroSection />} />
        <Route path="/about/skill-development-report" element={<SkillDevelopmentReport />} />
        <Route path="/about/about" element={<About/>} />
      </Routes>

      <Footer />  {/* ✅ Footer Har Page Pe Dikhega */}
    </>
  );
}

// ✅ Home Component ke andar Recruiters ko dikhana
function HomeWithRecruiters() {
  return (
    <>
      <Home />
      <Tabs />
      <Recruiters />  {/* ✅ Ye sirf Home page pe dikhega */}
      <WhyMarwadi />
      <ThreeLayerEducation />
      <StatsSection />
      <CampusLife /> 
    </>
  );
}

export default App;
