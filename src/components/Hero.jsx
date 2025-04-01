import React, { useState } from "react";
import "./Hero.css";
import squares from "../images/parallax-squares1.svg";
import Dots from "../images/dots-svg.png";
import designVideo from "../images/home-1-Trim.mp4";
import designVideo2 from "../images/homepage-2.mp4";
import { Link, NavLink } from "react-router";
import { useNavigate } from "react-router";

export default function Hero() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleClick = (event, path) => {
    event.preventDefault(); // Prevent immediate navigation
    setIsLoading(true);
    setProgress(0);

    let counter = 0;
    const interval = setInterval(() => {
      counter += 10;
      setProgress(counter);
      if (counter >= 100) clearInterval(interval);
    }, 200); // Updates every 200ms

    setTimeout(() => {
      clearInterval(interval);
      setIsLoading(false);
      navigate(path);
    }, 2000); // Show loading for 2 seconds
  };

  return (
    <section className="hero-section main-hero">
      <div className="hero-text">
        <h1>Crafting Digital Solutions That</h1>
        <h1>
          <span>Elevate Your Brand!</span>
        </h1>
        <p>
          Take your business to the next level. We are a consistently 5-star
          rated digital & web agency. Whether you’re starting from scratch, need
          to refresh an existing website, or want professional digital marketing
          - we’re here to help you make the most of your online presence.
        </p>
        <div className="contact-btn">
          <Link to="/contact" onClick={(e) => handleClick(e, "/contact")}>
            Contact Us
          </Link>
        </div>
      </div>
      <img
        src={Dots}
        alt="Dots svg"
        data-speed="-2"
        className="layer"
        id="dots-15"
      />
      <div className="squares-img">
        <img
          src={squares}
          alt="Squares for parallax"
          data-speed="4"
          className="layer"
          id="squares-hero"
        />
      </div>
      <video
        src={designVideo}
        autoPlay
        loop
        muted
        className="video-hero1"
      ></video>
      <video
        src={designVideo2}
        autoPlay
        loop
        muted
        className="video-hero2"
      ></video>

      <div className={`loading-screen ${isLoading ? "show" : ""}`}>
        <h1>Loading... {progress}%</h1>
      </div>
    </section>
  );
}
