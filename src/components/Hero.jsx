// import React from "react";
// import heroBg from "../assets/ales-nesetril-Im7lZjxeLhg-unsplash.jpg"; // Use an image with computers, code on screens, or a coding workspace

// const Hero = () => (
//   <section
//     id="hero"
//     style={{
//       minHeight: "100vh",
//       background: `linear-gradient(90deg, #18192b99, #272a41bb),
//        url(${heroBg})
//         center/cover no-repeat`,
//       color: "white",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//       textAlign: "center",
//     }}
//   >
//     <h1 style={{ fontSize: "3rem", fontWeight: "700" }}>
//       Hi, I'm Raushan Kumar
//     </h1>
//     <h2
//       style={{
//         fontSize: "2.1rem",
//         fontWeight: 500,
//         margin: "1.5rem 0",
//         letterSpacing: "-0.5px",
//       }}
//     >
//       Software Developer & Problem Solver
//     </h2>
//     <p
//       style={{
//         maxWidth: "520px",
//         fontSize: "1.2rem",
//         marginBottom: "2rem",
//         color: "#dedede",
//       }}
//     >
//       Specializing in JavaScript, C++, and building robust algorithmic
//       solutions.
//       <br />
//       Scroll down to see my work in code, data structures, and modern web
//       platforms.
//     </p>
//     <a
//       href="#projects"
//       style={{
//         background: "linear-gradient(90deg,#393dc8 60%,#27b2ef 130%)",
//         color: "white",
//         padding: "1rem 2.2rem",
//         borderRadius: "40px",
//         fontWeight: 600,
//         fontSize: "1.12rem",
//         boxShadow: "0 4px 24px #0005",
//         textDecoration: "none",
//       }}
//     >
//       View Projects
//     </a>
//   </section>
// );

// export default Hero;

import React, { useEffect, useRef } from "react";
import heroBg from "../assets/ales-nesetril-Im7lZjxeLhg-unsplash.jpg";

const AnimatedText = ({ text }) => {
  const letters = text.split("");
  return (
    <span>
      {letters.map((char, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            opacity: 0,
            transform: "translateY(30px)",
            animation: `fadeUp 0.5s forwards`,
            animationDelay: `${i * 0.07}s`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
      <style>
        {`
          @keyframes fadeUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </span>
  );
};

const Hero = () => (
  <section
    id="hero"
    style={{
      minHeight: "100vh",
      background: `linear-gradient(90deg, #18192b99, #272a41bb),
       url(${heroBg})
        center/cover no-repeat`,
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    }}
  >
    <h1 style={{ fontSize: "3rem", fontWeight: "700" }}>
      <AnimatedText text="Hi, I'm Raushan Kumar" />
    </h1>
    <h2
      style={{
        fontSize: "2.1rem",
        fontWeight: 500,
        margin: "1.5rem 0",
        letterSpacing: "-0.5px",
      }}
    >
      Software Developer & Problem Solver
    </h2>
    <p
      style={{
        maxWidth: "520px",
        fontSize: "1.2rem",
        marginBottom: "2rem",
        color: "#dedede",
      }}
    >
      Specializing in JavaScript, C++, and building robust algorithmic
      solutions.
      <br />
      Scroll down to see my work in code, data structures, and modern web
      platforms.
    </p>
    <a
      href="#projects"
      style={{
        background: "linear-gradient(90deg,#393dc8 60%,#27b2ef 130%)",
        color: "white",
        padding: "1rem 2.2rem",
        borderRadius: "40px",
        fontWeight: 600,
        fontSize: "1.12rem",
        boxShadow: "0 4px 24px #0005",
        textDecoration: "none",
      }}
    >
      View Projects
    </a>
  </section>
);

export default Hero;
