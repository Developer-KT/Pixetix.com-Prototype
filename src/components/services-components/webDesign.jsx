// import React, { useState } from "react";
// import "/src/components/Services.css";
// import DesignCollage from "/images/design-collage.png";
// import DevelopmentCollage from "/public/images/development-collage.png";
// // import Dots from "../images/dots-svg.png";
// // import ParallaxSquares from "../images/parallax-squares.png";
// import { Link, useNavigate } from "react-router";

// export default function WebDesign() {
//   const navigate = useNavigate();

//   const [isLoading, setIsLoading] = useState(false);
//   const [progress, setProgress] = useState(0);

//   const handleClick = (event, path) => {
//     event.preventDefault(); // Prevent immediate navigation
//     setIsLoading(true);
//     setProgress(0);

//     let counter = 0;
//     const interval = setInterval(() => {
//       counter += 10;
//       setProgress(counter);
//       if (counter >= 100) clearInterval(interval);
//     }, 200); // Updates every 200ms

//     setTimeout(() => {
//       clearInterval(interval);
//       setIsLoading(false);
//       navigate(path);
//     }, 2000); // Show loading for 2 seconds
//   };

//   return (
//     <div className="service-div-sp">
//       <div className="service-text">
//         <h1>Web & UI/UX Design</h1>
//         <p>
//           At ProCreatives, we design websites that don’t just look stunning but
//           also deliver an exceptional user experience. Our UI/UX & Web Design
//           services blend creativity with functionality, ensuring that every
//           pixel serves a purpose. From eye-catching visuals to intuitive user
//           flows, we craft digital experiences that engage users and drive
//           results. <br />
//           <br /> Whether you need a sleek business website or a complex web
//           application, our team ensures that design meets strategy for maximum
//           impact. We follow a user-first approach, conducting in-depth research,
//           wireframing, and prototyping to create designs that enhance usability
//           and accessibility. Our web design process combines modern aesthetics
//           with performance optimization, ensuring fast-loading, responsive, and
//           conversion-driven websites. With a keen focus on branding, typography,
//           and interaction design, we create digital experiences that not only
//           attract visitors but turn them into loyal customers.
//         </p>
//         <div className="view-service">
//           <Link
//             to="/contact"
//             className="contact-link"
//             onClick={(e) => handleClick(e, "/contact")}
//           >
//             Enquire
//           </Link>
//         </div>
//       </div>
//       <img src={DesignCollage} alt="Design collage" />
//     </div>
//   );
// }
