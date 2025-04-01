import React from "react";
// import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/Contact";
import "./Homepage.css";

export default function Homepage() {
  window.scrollTo(0, 0);

  return (
    <>
      {/* <Header /> */}
      <Hero />
      <Projects />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
