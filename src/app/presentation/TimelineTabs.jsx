"use client"; // permet d'utiliser le state dans Next.js 13+

import { useState } from "react";

export default function TimelineTabs() {
    const [activeTab, setActiveTab] = useState("education");

    return (
        <div className="about-tabs-container">
        {/* Tabs */}
        <div className="about-tabs">
            <button
            type="button"
            className={` timeline-btn tab-item ${activeTab === "education" ? "active" : ""}`}
            onClick={() => setActiveTab("education")}
            >
            Education
            </button>
            <button
            type="button"
            className={`timeline-btn tab-item ${activeTab === "experience" ? "active" : ""}`}
            onClick={() => setActiveTab("experience")}
            >
            Experience
            </button>
        </div>

        {/* Content */}
        <div className="tab-content">
            {activeTab === "education" && (
            <div className="timeline">
                <div className="timeline-item">
                <span className="date">2025 – 2026</span>
                <h4>Bachelor En Developement web - <span>DIGITAL CAMPUS PARIS</span></h4>
                <p>Formation en 2e année Bachelor Développement web.</p>
                </div>
                <div className="timeline-item">
                    <span className="date">2024 - 2025</span>
                    <h4>Bachelor En Developement web - <span>L’ECE : la grande école de l’ingénierie Numérique</span></h4>
                    <p>Formation en développement web et application .</p>
                </div>
                <div className="timeline-item">
                    <span className="date"> 2020 – 2022</span>
                    <h4>Responsive web design <span> - FreeCodeCamp</span></h4>
                    <p>Formation à distance sur le responsive web design.</p>
                </div>
            </div>
            )}

            {activeTab === "experience" && (
            <div className="timeline">
                <div className="timeline-item">
                <span className="date">sept 2025 – Nov 2025</span>
                <h4>Intégrateur web - Stage - BTI-Advisory</h4>
                <p>
                    Résolution des bugs sur la plateforme BTI-Advisory (Wordpress)
                    Création de pages (WordPress),
                    Intégration du suivi des données analytiques (Motamo, google Analytics).
                </p>
                </div>
                <div className="timeline-item">
                <span className="date">Mars 2022 – Aout 2024</span>
                <h4>Développeur web - Stage - KOSALA PME </h4>
                <p> 
                    Développement de la plateforme de l’entreprise from scratch (HTML, CSS,
                    JavaScript, PHP, Git/Github),
                    Maintenance et correction de bugs (HTML, CSS, JavaScript)
                    .</p>
                </div>
            </div>
            )}
        </div>
        </div>
    );
}
