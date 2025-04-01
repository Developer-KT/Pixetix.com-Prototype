// import RealAg from "../images/RealAG Home1.png";
// import BeverlyCo from "../images/Beverly-Co. Home1.png";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./OurWork.css";
import ShoeWebsite from "../images/shoe-website.png";
import ParallaxSquares from "../images/parallax-squares.png";
import Dots from "../images/dots-svg.png";
import { Link, useNavigate } from "react-router";
import Bites from "../images/bites.png";
import RealAg from "../images/RealAG Home1.png";
import RealAg2 from "../images/RealAG Home2.png";
import RealAgFull from "../images/RealAG full.png";
import BeverlyCo from "../images/Beverly-Co. Home1.png";
import BeverlyCo2 from "../images/Beverly-Co. Home2.png";
import BeverlyCoFull from "../images/Beverly-Co Full.png";
import ProjectVid1 from "../images/project-vid-1.mp4";
import SaintRestaurant from "../images/saint-restaurant.png";
import DandA from "../images/damodels.co.za_2.png";

export default function OurWork() {
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
    <>
      <section className="our-work-hero">
        <h1>Our Work</h1>
        <p className="layer" data-speed="-1">
          our team loves to create unique web and graphic experience.
        </p>
      </section>
      <section className="projects-section">
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

        <div className="project">
          <img src={DandA} alt="RealAG website design" />
          <div className="project-text">
            <h1>D&A</h1>
            <p>
              D&A is a Cape Town based modeling agency. Designed and developed
              by us, the website blends creativity and functionality, just like
              the models themselves. It embodies a captivating and user-friendy
              feel attracting both aspiring models and potential clients.
            </p>
            <br />
            <p>Take a quick look!</p>
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
          <img src={SaintRestaurant} alt="RealAG website design" />
          <div className="project-text">
            <h1>Saint Restaurant</h1>
            <p>
              Saint, a Johannesburg-based restaurant reached out to Pixetix.com
              to get a captivating website with a user-friendy interface for
              their restaurant. And we built just that. This website is designed
              and developed to perfection, is eye catching and captures the
              users interest!
            </p>
            <br />
            <p>See it for yourself!</p>
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
          <img src={Bites} alt="RealAG website design" />
          <div className="project-text">
            <h1>Bites Restaurant</h1>
            <p>
              A brand new & ongoing restaurant prototype. Simplicity & usability
              is at the forefront of this website. Designed, and developed by
              us, we are blending usability with a seamless interface to deliver
              a quality product.
            </p>
            <br />
            <p>Take a quick look and contact us to get your own!</p>
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
          <video src={ProjectVid1} autoPlay loop muted>
            {" "}
          </video>
          <div className="project-text">
            <h1>The Loop</h1>
            <p>
              The Loop is an ongoing restaurant/cookbook/eatery project. Watch
              the concept video below.
            </p>
            <br />
            <p>Have a similar vision? Chat to us and let's make it happen!</p>
            <div className="view-project">View Project</div>
          </div>
        </div>

        <div className="project">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
          >
            <SwiperSlide className="swiper-slide">
              <img src={RealAg} alt="RealAG website design" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src={RealAg2} alt="RealAG website design" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src={RealAgFull}
                className="full-img"
                alt="RealAG website design"
              />
            </SwiperSlide>
          </Swiper>
          <div className="project-text">
            <h1>RealAG</h1>
            <p>
              RealAG is a content creator agency prototype. While still a
              prototype, this website embodies creativity at its best. We
              designed it with precision and attention to detail. We can't wait
              for the final product.
            </p>
            <br />
            <p>View the current project!</p>
            <a
              href="/images/RealAG full.png"
              className="no-style-link"
              download="RealAG full.png"
            >
              <div className="view-project">View Project</div>
            </a>
          </div>
        </div>
        <img
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
        <div className="project">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
          >
            <SwiperSlide className="swiper-slide">
              <img src={BeverlyCo} alt="RealAG website design" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src={BeverlyCo2} alt="RealAG website design" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img
                src={BeverlyCoFull}
                className="full-img"
                alt="RealAG website design"
              />
            </SwiperSlide>
          </Swiper>
          <div className="project-text">
            <h1>Beverly Co.</h1>
            <p>
              It doesn't get more luxurious than this! Beverly Co. is an african
              jeweller in the works. We were asked to create the prototype and
              the clients were impressed by the minimalism, creativity and
              simplicity we have produced - now it's time for development.
            </p>
            <br />
            <p> Check it out!</p>
            <a
              href="/images/Beverly-Co Full.png"
              className="no-style-link"
              download="Beverly-Co Full.png"
            >
              <div className="view-project">View Project</div>
            </a>
          </div>
        </div>

        <img
          src={Dots}
          data-speed="6"
          alt="Parallax dots"
          className="layer"
          id="parallax-dots11"
        />

        <h1 className="reach-out-paragraph">
          Reach out to us for your own website, whether you're starting from
          scratch or want to refresh an existing one - we're ready to help.
        </h1>

        <div className="projects-options">
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
      </section>
      <div className={`loading-screen ${isLoading ? "show" : ""}`}>
        <h1>Loading... {progress}%</h1>
      </div>
    </>
  );
}
