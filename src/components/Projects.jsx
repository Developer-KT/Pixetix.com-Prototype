import React, { useState } from "react";
import "./Projects.css";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Bites from "../images/bites(demo).png";
import ParallaxSquares from "../images/parallax-squares.png";
import Dots from "../images/dots-svg.png";
import { Link } from "react-router";
import SaintRestaurant from "../images/saint.restaurant(demo1).png";
import DAModels from "../images/damodels.co.za(demo1).png";
import { useNavigate } from "react-router";

export default function Projects() {
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
    <section className="projects-section">
      <div className="video-section">
        {/* <div className="vid-row">
          <video
            src={designVideo}
            autoPlay
            loop
            muted
            className="video"
          ></video>
          <video
            src={designVideo2}
            autoPlay
            loop
            muted
            className="video"
          ></video>
        </div> */}
        {/* <div className="vid-row">
          <video
            src={designVideo}
            autoPlay
            loop
            muted
            className="video"
          ></video>
        </div> */}
      </div>

      <div className="work-section">
        <img
          src={ParallaxSquares}
          data-speed="-5"
          alt="Parallax squares"
          className="layer"
          id="parallax-squares7"
        />
        <img
          src={Dots}
          data-speed="1"
          alt="Parallax dots"
          className="layer"
          id="parallax-dots6"
        />

        <h1 className="recent-work">Our Recent Work</h1>

        {/* <div className="project">
          <img src={Bites} alt="RealAG website design" />
          <div className="project-text">
            <h1>Bites Restaurant</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
              dignissimos amet recusandae, qui accusamus libero cum velit aut
              nihil suscipit!
            </p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <div className="view-project">
              <a
                href="https://bites-one.vercel.app/"
                className="contact-link"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="project">
          <img src={SaintRestaurant} alt="RealAG website design" />
          <div className="project-text">
            <h1>Saint Restaurant</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
              dignissimos amet recusandae, qui accusamus libero cum velit aut
              nihil suscipit!
            </p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <div className="view-project">
              <a
                href="https://saint.restaurant/"
                className="contact-link"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="swiper">
            <video src={ProjectVid1} autoPlay loop muted>
              {" "}
            </video>
          </div>
          <div className="project-text">
            <h1>The Loop</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
              dignissimos amet recusandae, qui accusamus libero cum velit aut
              nihil suscipit!
            </p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <div className="view-project">View Project</div>
          </div>
        </div> */}

        <div className="projects-row">
          <div className="projects">
            <img src={Bites} alt="RealAG website design" />
            <div className="project-details">
              <a
                href="https://bites-one.vercel.app/"
                className="view-btn contact-link"
                target="_blank"
              >
                Live Demo
              </a>
              <h3>Bites Restaurant</h3>
            </div>
          </div>
          <div className="projects">
            <img src={SaintRestaurant} alt="RealAG website design" />
            <div className="project-details">
              <a
                href="https://saint.restaurant/"
                className="view-btn contact-link"
                target="_blank"
              >
                Live Demo
              </a>
              <h3>Saint Restaurant</h3>
            </div>
          </div>
          <div className="projects">
            <img src={DAModels} alt="RealAG website design" />
            <div className="project-details">
              <a
                href="https://www.damodels.co.za/"
                className="view-btn contact-link"
                target="_blank"
              >
                Live Demo
              </a>
              <h3>D&A Models</h3>
            </div>
          </div>
        </div>

        {/* <img
          src={Dots}
          data-speed="2"
          alt="Parallax dots"
          className="layer"
          id="parallax-dots7"
        />

        <img
          src={Dots}
          data-speed="-2"
          alt="Parallax dots"
          className="layer"
          id="parallax-dots8"
        />
        <img
          src={ParallaxSquares}
          data-speed="8"
          alt="Parallax squares"
          className="layer"
          id="parallax-squares8"
        />

        <img
          src={Dots}
          data-speed="-2"
          alt="Parallax dots"
          className="layer"
          id="parallax-dots9"
        />
        <img
          src={ParallaxSquares}
          data-speed="1"
          alt="Parallax squares"
          className="layer"
          id="parallax-squares9"
        />

        <img
          src={Dots}
          data-speed="4"
          alt="Parallax dots"
          className="layer"
          id="parallax-dots10"
        />

        <img
          src={Dots}
          data-speed="6"
          alt="Parallax dots"
          className="layer"
          id="parallax-dots11"
        /> */}

        <div className="projects-options">
          <div className="view-more-btn">
            <Link
              to="/our-work"
              className="contact-link"
              onClick={(e) => handleClick(e, "/our-work")}
            >
              View More
            </Link>
          </div>
          <div className="get-own-btn">
            <Link
              to="/contact"
              className="contact-link"
              onClick={(e) => handleClick(e, "/contact")}
            >
              Get Your Own
            </Link>
          </div>
        </div>
      </div>
      <div className={`loading-screen ${isLoading ? "show" : ""}`}>
        <h1>Loading... {progress}%</h1>
      </div>
    </section>
  );
}
