import React from "react";
import Image from "next/image";
import Profile from "../../assets/profile.jpg";
import TimelineTabs from "./TimelineTabs";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="about-section sec-padding" id="about">
      <div className="container">
        <div className="section-title">
          <h2>A propos de moi</h2>
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
              Je suis en deuxième année de Bachelor en développement web. Je fais
              preuve d’une grande capacité d’adaptation et d’un bon esprit d’équipe.
              J’aime apprendre et résoudre des problèmes.
              <br/><br/>
              Intégration web (HTML, CSS, JavaScript,
              Tailwind CSS, responsive design) ;<br/><br/>
              Développement front-end (React et autre
              framework js) ;<br/><br/>
              Développement back-end (PHP, node js,
              Express js, MongoDB, MySQL et autres
              selon les projets) ;<br/><br/>
              Utilisation de CMS et outils de no-code
              (WordPress, etc) ;<br/><br/>
              Git, Trello, Notion de déploiement
              (Netlify, Vercel, GitHub Pages) ;<br/><br/>
              Maîtrise des outils de développement
              (Visual Studio Code, Postman, jMerise,
              Looping, Figma, Linux, Firebase,
              XAMPP serveur).
            </p>

            <h3>mes competences</h3>
            <div className="skills">
              <div className="skill-item">React js</div>
              <div className="skill-item">TypeScript</div>
              <div className="skill-item">Next js</div>
              <div className="skill-item">HTML</div>
              <div className="skill-item">Express js</div>
              <div className="skill-item">PHP</div>
              <div className="skill-item">Python</div>
              <div className="skill-item">C#</div>
              <div className="skill-item">Rest API</div>
              <div className="skill-item">MyQL</div>
              <div className="skill-item">Mongodb</div>
              <div className="skill-item">CSS</div>
              <div className="skill-item">Bootstrap</div>
              <div className="skill-item">Tailwind</div>
              <div className="skill-item">JavaScript</div>
              <div className="skill-item">Git</div>
              <div className="skill-item">Docker</div>
            </div>

            {/* TIMELINE TABS */}
            <TimelineTabs />

            {/* BUTTONS */}
            <a href="/cv.pdf" target="_blank" className="btn">
              Télécharger Mon CV
            </a>
            <Link href="/contact" className="btn link-item">
              Me contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
