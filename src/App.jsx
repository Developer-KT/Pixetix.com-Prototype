import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./components/Header";
import Homepage from "./Pages/Homepage";
import ServicesPage from "./Pages/ServicesPage";
import { useEffect, useState } from "react";
import ContactPage from "./Pages/ContactPage";
import Footer from "./components/Footer";
import OurWorkPage from "./Pages/OurWorkPage";
import RedirectHandler from "./components/RedirectHandler";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      counter += 10;
      setProgress(counter);
      if (counter >= 100) clearInterval(interval);
    }, 200);

    setTimeout(() => {
      clearInterval(interval);
      setIsLoading(false);
      console.log("is loading");
    }, 2100);

    const handleMouseMove = (e) => {
      document.querySelectorAll(".layer").forEach((layer) => {
        const speed = layer.getAttribute("data-speed") || 1; // Default speed to 1 if not set

        const x = (window.innerWidth / 2 - e.pageX) * (speed / 100);
        const y = (window.innerHeight / 2 - e.pageY) * (speed / 100);

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove); // Cleanup event listener
    };
  }, []);

  // const handleClick = (event) => {
  //   event.preventDefault(); // Prevent immediate navigation
  //   setIsLoading(true);
  //   setProgress(0);

  //   let counter = 0;
  //   const interval = setInterval(() => {
  //     counter += 10;
  //     setProgress(counter);
  //     if (counter >= 100) clearInterval(interval);
  //   }, 200); // Updates every 200ms

  //   setTimeout(() => {
  //     clearInterval(interval);
  //     setIsLoading(false);
  //     window.location.href = event.target.href; // Navigate after loading effect
  //   }, 2000); // Show loading for 2 seconds
  // };

  return (
    <Router>
      <>
        {isLoading && (
          <div className={`loading-screen ${isLoading ? "show" : ""}`}>
            <h1>Pixevit.com: {progress}%</h1>
          </div>
        )}
        <RedirectHandler />
        {!isLoading && (
          <>
            <Header />

            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/our-work" element={<OurWorkPage />} />
            </Routes>

            <Footer />
          </>
        )}
      </>
    </Router>
  );
}
