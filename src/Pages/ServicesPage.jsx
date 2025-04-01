import React from "react";
import ServicesHero from "../components/ServicesHero";
import Services from "../components/Services";
import "./ServicesPage.css";

export default function ServicesPage() {
  window.scrollTo(0, 0);

  return (
    <>
      <ServicesHero />
      <Services />
    </>
  );
}
