import React from "react";
import "./ServicesHero.css";
import BespokeWD1 from "../images/bespoke_sq1.mp4";
import BespokeWD2 from "../images/bespoke_sq2.mp4";

export default function ServicesHero() {
  return (
    <section className="hero-section-sp">
      <div className="heading-text">
        <h1>OUR SERVICES</h1>
        <p>
          WE CATER FOR YOUR SMALL BUSINESS. WE DESIGN, WE DEVELOP, YOU PROFIT.
        </p>
      </div>

      <video src={BespokeWD2} autoPlay loop muted className="hero-vid2"></video>

      <video src={BespokeWD1} autoPlay loop muted className="hero-vid"></video>
    </section>
  );
}
