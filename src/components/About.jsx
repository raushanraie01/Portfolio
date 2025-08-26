import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import aboutBg from "../assets/clark-tibbs-oqStl2L5oxI-unsplash.jpg";
import linkedinLogo from "../assets/download (1).png";
import gmailLogo from "../assets/download (2).png";
import githubLogo from "../assets/download.png";

const About = () => {
  const aboutRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(aboutRef, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        translateY: 0,
        transition: {
          duration: 1.2,
          ease: [0.77, 0, 0.18, 1],
        },
      });
    }
  }, [controls, isInView]);

  return (
    <section
      id="about"
      style={{
        background: `linear-gradient(90deg, rgba(34, 37, 50, 0.9) 80%, rgba(2, 124, 177, 0.5) 100%), url(${aboutBg}) center/cover no-repeat`,
        color: "#f0f4f8",
        padding: "5rem 1rem",
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0, translateY: 60 }}
        animate={controls}
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          borderRadius: "30px",
          maxWidth: "620px",
          padding: "3rem 2.5rem",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: "#e0e7ff",
          userSelect: "none",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            color: "#60a5fa",
            fontWeight: "700",
            letterSpacing: "0.07em",
            marginBottom: "1.3rem",
            textShadow: "0 3px 6px rgba(96, 165, 250, 0.6)",
          }}
        >
          About Me
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            fontWeight: "500",
            marginBottom: "2.7rem",
            color: "#dbeafe",
          }}
        >
          Passionate developer skilled in JavaScript & C++. Experienced in
          building efficient algorithms, problem-solving, and creating seamless
          web experiences. Always learning new tech and sharing code.
        </p>
        <ul
          style={{
            listStyleType: "none",
            paddingLeft: 0,
            fontWeight: "600",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1.4rem",
            color: "#93c5fd",
          }}
        >
          {[
            "Algorithm Design",
            "Modern Frontend (React, TypeScript)",
            "Node.js / Competitive Coding",
          ].map((item) => (
            <li
              key={item}
              style={{
                position: "relative",
                paddingLeft: "1.8rem",
                userSelect: "text",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: "0.6rem",
                  width: "14px",
                  height: "14px",
                  background: "#60a5fa",
                  borderRadius: "50%",
                  boxShadow: "0 0 6px #60a5fa",
                }}
              ></span>
              {item}
            </li>
          ))}
        </ul>
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            marginTop: "2rem",
            justifyContent: "center",
          }}
        >
          <a
            href="https://www.linkedin.com/in/your-linkedin-id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinLogo}
              alt="LinkedIn"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            />
          </a>
          <a
            href="mailto:yourmail@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={gmailLogo}
              alt="Gmail"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            />
          </a>
          <a
            href="https://github.com/your-github-id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubLogo}
              alt="GitHub"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "8px",
                cursor: "pointer",
                background: "#fff",
              }}
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

// import React, { useEffect, useRef } from "react";
// import aboutBg from "../assets/clark-tibbs-oqStl2L5oxI-unsplash.jpg";
// import linkedinLogo from "../assets/download (1).png";
// import gmailLogo from "../assets/download (2).png";
// import githubLogo from "../assets/download.png";

// const About = () => {
//   const aboutRef = useRef(null);

//   useEffect(() => {
//     const el = aboutRef.current;
//     el.style.opacity = 1;
//     el.style.transform = "translateY(0)";
//   }, []);

//   return (
//     <section
//       id="about"
//       style={{
//         background: `linear-gradient(90deg, #2225 80%, #027cb180), url(${aboutBg}) center/cover no-repeat`,
//         color: "#222",
//         padding: "4rem 0",
//         minHeight: "70vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//       }}
//     >
//       <div
//         ref={aboutRef}
//         style={{
//           background: "rgba(255,255,255,0.9)",
//           borderRadius: "24px",
//           maxWidth: "580px",
//           padding: "2rem",
//           opacity: 0,
//           transform: "translateY(60px)",
//           transition:
//             "opacity 1.2s cubic-bezier(.77,0,.18,1), transform 1.2s cubic-bezier(.77,0,.18,1)",
//           backdropFilter: "blur(16px)",
//           WebkitBackdropFilter: "blur(16px)",
//           boxShadow: "0 8px 32px rgba(44,62,80,0.18)",
//         }}
//       >
//         <h2 style={{ fontSize: "2rem", color: "#295bd1", fontWeight: "600" }}>
//           About Me
//         </h2>
//         <p>
//           Passionate developer skilled in JavaScript & C++. Experienced in
//           building efficient algorithms, problem-solving, and creating seamless
//           web experiences. Always learning new tech and sharing code.
//         </p>
//         <ul style={{ fontWeight: 500, margin: "2rem 0 0 0" }}>
//           <li>Algorithm Design</li>
//           <li>Modern Frontend (React, TypeScript)</li>
//           <li>Node.js / Competitive Coding</li>
//         </ul>
//         <div
//           style={{
//             display: "flex",
//             gap: "1.5rem",
//             marginTop: "2rem",
//             justifyContent: "center",
//           }}
//         >
//           <a
//             href="https://www.linkedin.com/in/raushanraie01"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src={linkedinLogo}
//               alt="LinkedIn"
//               style={{
//                 width: "38px",
//                 height: "38px",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//               }}
//             />
//           </a>
//           <a
//             href="mailto:raushanraie01@gmail.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src={gmailLogo}
//               alt="Gmail"
//               style={{
//                 width: "38px",
//                 height: "38px",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//               }}
//             />
//           </a>
//           <a
//             href="https://github.com/raushanraie01"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src={githubLogo}
//               alt="GitHub"
//               style={{
//                 width: "38px",
//                 height: "38px",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 background: "#fff",
//               }}
//             />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
