import "./About.css";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="full-bleed about">
      <motion.div
        className="left"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="pic-box">
          <img
            className="pic"
            src="/images/portfolio-pic.jpg"
            alt="profile-pic"
          />
        </div>
      </motion.div>
      <motion.div
        className="right"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>ABOUT</h2>
        <p>
          A front-end developer passionate about continuous learning and professional
          growth. Experienced in collaborating effectively with teams, refining
          technical proficiencies, and dedicated to user-centric design
          principles.
        </p>
        <div className="about-links">
          <a href="https://github.com/ini-s">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/inioluwa-soetan-b082aa244/">
            <FaLinkedin />
          </a>
        </div>
        <button className="cv-btn">
          <a
            href="https://docs.google.com/document/d/1KZ3-xvZuS7dCUmcyOJPvf9F3bMjYjoMRLyXtfgTWGYc/export?format=pdf"
            target="_blank"
          >
            resume
          </a>
        </button>
      </motion.div>
    </section>
  );
};

export default About;
