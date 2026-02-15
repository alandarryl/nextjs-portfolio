import React from "react";
import Image from "next/image";
import Profile from "../../assets/profile.jpg";
import TimelineTabs from "./TimelineTabs";

export default function AboutPage() {
  return (
    <section className="about-section sec-padding" id="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          {/* IMAGE */}
          <div className="about-img">
            <div className="img-box">
              <Image src={Profile} alt="about img" />
            </div>
          </div>

          {/* TEXTE */}
          <div className="about-text">
            <p>
              I am Okana Jonathan, a freelance web and multimedia developer. I self-taught myself programming and web development through projects and online courses. My main objective is to provide services using my diverse set of skills. I offer web development (HTML, CSS, JavaScript, React, Node.js) and appealing design with Adobe XD and Photoshop, as well as basic 2D/3D animation skills.
            </p>

            <h3>Skills</h3>
            <div className="skills">
              <div className="skill-item">HTML</div>
              <div className="skill-item">CSS</div>
              <div className="skill-item">SASS</div>
              <div className="skill-item">Bootstrap</div>
              <div className="skill-item">Tailwind</div>
              <div className="skill-item">JavaScript</div>
              <div className="skill-item">Git</div>
              <div className="skill-item">Adobe XD</div>
            </div>

            {/* TIMELINE TABS */}
            <TimelineTabs />

            {/* BUTTONS */}
            <a href="cv.pdf" target="_blank" className="btn">
              Download CV
            </a>
            <a href="#contact" className="btn link-item">
              Contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
