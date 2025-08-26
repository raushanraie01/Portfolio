import { useState } from "react";
import contactBg from "../assets/photo-1528747045269-390fe33c19f2.avif"; // Background: developer workspace or simple tech pattern

const inputStyle = {
  width: "100%",
  margin: "0.7rem 0",
  padding: "0.9rem",
  borderRadius: "10px",
  border: "none",
  fontSize: "1.08rem",
  background: "#222b",
  color: "#fff",
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send form data to your backend or show a message here
    console.log(form);
    alert("Thank you for contacting me!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      style={{
        background: `linear-gradient(60deg,#039be5bb, #dfff 60%), url(${contactBg}) center/cover no-repeat`,
        color: "white",
        padding: "4rem 0",
        minHeight: "60vh",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2rem", color: "#7f47eb" }}>Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "400px",
          margin: "2rem auto",
          background: "rgba(27,32,51,0.82)",
          borderRadius: "20px",
          padding: "2rem",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <button
          type="submit"
          style={{
            background: "linear-gradient(90deg,#393dc8 60%,#27b2ef 130%)",
            color: "#fff",
            border: "none",
            borderRadius: "25px",
            padding: "0.9rem 2rem",
            fontWeight: 600,
            fontSize: "1.09rem",
            marginTop: "1.2rem",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>
      <p style={{ marginTop: "2rem", color: "#fff", fontSize: "1.08rem" }}>
        Or contact me directly at: <br />
        <a href="mailto:yourmail@example.com" style={{ color: "#995C57" }}>
          raushanraie01@gmail.com
        </a>{" "}
        <br />
        <span style={{ color: "#765D5D" }}>+91-6207058960</span>
      </p>
    </section>
  );
};

export default Contact;
