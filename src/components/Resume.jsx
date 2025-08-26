import React from "react";
import resumeBg from "../assets/resource-database-heCbzgivnHA-unsplash.jpg"; // Use a subtle tech or paper background

const Resume = () => (
  <section
    id="resume"
    style={{
      background: `linear-gradient(120deg,#1f1f46cd 80%,#0dd9b7 80%), url(${resumeBg}) center/cover no-repeat`,
      color: "white",
      padding: "3rem 0",
      minHeight: "50vh",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <h2 style={{ fontSize: "2rem", color: "#39e7f5", marginBottom: "1.5rem" }}>
      My Resume
    </h2>
    <p
      style={{
        maxWidth: "520px",
        margin: "0 auto 2rem auto",
        fontSize: "1.15rem",
        color: "#dedede",
      }}
    >
      Download my resume to know more about my education, experience, and
      skills.
    </p>
    <a
      href="/assets/Raushan_Kumar_Resume.pdf" // Place your PDF in the public/assets folder
      download="Resume.pdf"
      rel="noopener noreferrer"
      style={{
        background: "linear-gradient(90deg,#393dc8 60%,#27b2ef 130%)",
        color: "white",
        padding: "1rem 2.2rem",
        borderRadius: "40px",
        fontWeight: 600,
        fontSize: "1.12rem",
        boxShadow: "0 4px 24px #0005",
        textDecoration: "none",
        marginBottom: "2rem",
        display: "inline-block",
      }}
    >
      Download Resume (PDF)
    </a>
    <iframe
      src="/assets/Resume.pdf"
      title="Resume Preview"
      style={{
        width: "90%",
        maxWidth: "700px",
        height: "500px",
        border: "none",
        borderRadius: "18px",
        boxShadow: "0 2px 18px #0003",
        background: "#fff",
      }}
    />
  </section>
);

export default Resume;
