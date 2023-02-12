import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../parts/Hero";
import ServicesSection from "../parts/ServicesSection";
import StartingProduct from "../parts/StartingProduct";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <StartingProduct />
      <ServicesSection />
    </div>
  );
}

export default HomePage;
