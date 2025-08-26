import React from "react";
import projectsBg from "../assets/projectBg.jpg"; // Use a background of dev workspace or code environment
import proj1 from "../assets/tour-1-cover.jpg"; // Project images: code snippets, dashboards, etc.
import proj2 from "../assets/videoTube.jpg"; // Project images: code snippets, dashboards, etc.
import proj3 from "../assets/images.jpeg"; // Project images: code snippets, dashboards, etc.

const projects = [
  {
    title: "Natours API",
    img: proj1,
    desc: "Backend-focused project designed to manage tour bookings and user interactions efficiently.",
    link: "https://github.com/raushanraie01/Natours",
  },
  {
    title: "VideoTube Api",
    img: proj2,
    desc: " React-based front end UI that consumes data from third-party APIs.",
    link: "https://github.com/raushanraie01/Backend-Learning",
  },
  {
    title: "Image Generator",
    img: proj3,
    desc: "Backend-focused project designed to manage tour bookings and user interactions efficiently.",
    link: "https://github.com/raushanraie01/Image-Generator",
  },
  // Add more projects here...
];

const Projects = () => (
  <section
    id="projects"
    style={{
      background: `linear-gradient(120deg,rgba(37,99,233,0.07),#2a2d3a99), url(${projectsBg}) center/cover no-repeat`,
      color: "white",
      padding: "4rem 0",
      minHeight: "80vh",
    }}
  >
    <div style={{ maxWidth: "1050px", margin: "0 auto" }}>
      <h2
        style={{
          fontSize: "2.3rem",
          fontWeight: 700,
          color: "#f1ba38",
          marginBottom: "2rem",
        }}
      >
        Projects
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        {projects.map((proj) => (
          <div
            key={proj.title}
            style={{
              background: "rgba(0,0,0,0.85)",
              borderRadius: "16px",
              width: "320px",
              boxShadow: "0 8px 28px #2225",
              overflow: "hidden",
            }}
          >
            <img
              src={proj.img}
              alt={proj.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderBottom: "1px solid #333",
              }}
            />
            <div style={{ padding: "1.2rem" }}>
              <h3 style={{ color: "#47eaa8" }}>{proj.title}</h3>
              <p style={{ fontSize: "1.04rem", color: "#c6c6d4" }}>
                {proj.desc}
              </p>
              <a
                href={proj.link}
                style={{
                  color: "#3b82f6",
                  fontWeight: 600,
                  textDecoration: "underline",
                  fontSize: "1.04rem",
                }}
              >
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
