import skillsBg from "../assets/bgGround.avif"; // Use a subtle code or tech background

const skills = [
  { name: "JavaScript (ES6+)", icon: "🟨" },
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Node.js", icon: "🟩" },
  { name: "C++", icon: "💻" },
  // { name: "Python", icon: "🐍" },
  { name: "Styled Components", icon: "🎨" },
  { name: "Algorithms", icon: "🧠" },
  { name: "Data Structures", icon: "🌳" },
  { name: "Git & GitHub", icon: "🐙" },
  { name: "REST APIs", icon: "🔗" },
  { name: "Competitive Coding", icon: "🏆" },
];

const skillCardStyle = {
  background: "rgba(34, 43, 68, 0.92)",
  borderRadius: "16px",
  padding: "1.2rem 1.5rem",
  margin: "0.7rem",
  minWidth: "160px",
  color: "#fff",
  fontWeight: 600,
  fontSize: "1.08rem",
  boxShadow: "0 2px 16px #0002",
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
  transition: "transform 0.2s",
};

const Skills = () => (
  <section
    id="skills"
    style={{
      background: `linear-gradient(120deg,#1f1f46cd 80%,#0dd9b7 80%), url(${skillsBg}) center/cover no-repeat`,
      color: "white",
      padding: "3.5rem 0",
      minHeight: "60vh",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <h2
      style={{
        fontSize: "2.2rem",
        color: "#39e7f5",
        marginBottom: "2rem",
        fontWeight: 700,
      }}
    >
      <span style={{ letterSpacing: "2px" }}>Skills & Technologies</span>
    </h2>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1.2rem",
        maxWidth: "900px",
      }}
    >
      {skills.map((skill) => (
        <div
          key={skill.name}
          style={skillCardStyle}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.07)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <span style={{ fontSize: "1.6rem" }}>{skill.icon}</span>
          {skill.name}
        </div>
      ))}
    </div>
    <p
      style={{
        marginTop: "2.5rem",
        color: "#dedede",
        fontSize: "1.13rem",
        maxWidth: "600px",
      }}
    >
      <span style={{ color: "#39e7f5", fontWeight: 600 }}>Pro Coder Tip:</span>
      <br />I love solving complex problems, writing clean code, and learning
      new technologies. My toolkit is always evolving—let's build something
      awesome together!
    </p>
  </section>
);
export default Skills;
