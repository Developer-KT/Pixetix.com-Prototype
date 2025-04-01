import React, { useEffect } from "react";
import logo from "../images/Pixetix.com-logo.svg";
import "./Header.css";
import { NavLink, useLocation } from "react-router";
import { useState } from "react";
import { Navigate } from "react-router";
import { useNavigate } from "react-router";

export default function Header() {
  const location = useLocation(); // Get the current URL path
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const header = document.querySelector("header"); // Select your header element
      if (window.scrollY > 70) {
        header.style.backgroundColor = "#0e161d"; // Change to any color you like
        header.style.transition = "background-color 0.3s ease-in-out";
      } else {
        header.style.backgroundColor = "transparent";
      }
    });
  });

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
    <header>
      <NavLink
        to="/"
        className={location.pathname === "/" ? "active logo-link" : "logo-link"}
        onClick={(e) => handleClick(e, "/")}
      >
        <img src={logo} alt="Logo" />
      </NavLink>

      <nav>
        <ul>
          <li className="tab">
            <NavLink
              to="/services"
              className={
                location.pathname === "/services"
                  ? "active tab-link default-tab"
                  : "tab-link default-tab"
              }
              onClick={(e) => handleClick(e, "/services")}
            >
              Services
            </NavLink>
          </li>
          <li className="tab">
            <NavLink
              to="/contact"
              className={
                location.pathname === "/contact"
                  ? "active tab-link default-tab"
                  : "tab-link default-tab"
              }
              onClick={(e) => handleClick(e, "/contact")}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>

      <div
        className={`hamburger-menu ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          <ul>
            <li>
              <NavLink
                to="/"
                className={
                  location.pathname === "/"
                    ? "active tab-link t-col1"
                    : "tab-link t-col1"
                }
                onClick={(e) => {
                  handleClick(e, "/");
                  setIsOpen(!isOpen);
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/our-work"
                className={
                  location.pathname === "/our-work"
                    ? "active tab-link t-col2"
                    : "tab-link t-col2"
                }
                onClick={(e) => {
                  handleClick(e, "/our-work");
                  setIsOpen(!isOpen);
                }}
              >
                Our Work
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={
                  location.pathname === "/services"
                    ? "active tab-link t-col1"
                    : "tab-link t-col1"
                }
                onClick={(e) => {
                  handleClick(e, "/services");
                  setIsOpen(!isOpen);
                }}
              >
                Our Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={
                  location.pathname === "/contact"
                    ? "active tab-link t-col2"
                    : "tab-link t-col2"
                }
                onClick={(e) => {
                  handleClick(e, "/contact");
                  setIsOpen(!isOpen);
                }}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      )}
      <div className={`loading-screen ${isLoading ? "show" : ""}`}>
        <h1>Loading... {progress}%</h1>
      </div>
    </header>
  );
}

// We swapped "onClick={() => setIsOpen(!isOpen)}" with onClick={"handleClick"} because
// it somehow couldn't display the loading animation with both functions on...
// The mobile menu still disappears because the page reloads after the loading animation
// (Remember: this function "onClick={() => setIsOpen(!isOpen)}" was to close the mobile menu when
// one of the tabs is clicked)
