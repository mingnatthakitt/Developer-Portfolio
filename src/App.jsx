import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";
import { FloatingNav } from "./components/FloatingNav";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./App.css";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Experiences", link: "#experiences" },
  { name: "Portfolio", link: "#portfolio" },
  { name: "Education", link: "#education" },
  { name: "Contact", link: "#contact" },
];

const App = () => {
  return (
    <div className="bg-background min-h-screen relative">
      {/* Global Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-tunnel opacity-30"></div>
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="absolute inset-0 scanlines opacity-20"></div>
      </div>

      <div className="relative z-10">
        <FloatingNav navItems={navItems} />

        {/* Hero Section */}
        <div id="home" className="h-[100vh] relative">
          <Hero />
        </div>

        <About />
        <Experiences />
        <Portfolio />
        <Education />
        <Contact />

        <Footer />
        <SpeedInsights />
      </div>
    </div>
  );
};

export default App;


