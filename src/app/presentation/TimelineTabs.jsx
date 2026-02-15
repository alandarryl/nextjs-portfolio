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
                <span className="date">2022 - 2024</span>
                <h4>Bachelor of Technology - <span>Accra Institute of Technology</span></h4>
                <p>Three years of study with strong emphasis on personal and collaborative projects.</p>
                </div>
                <div className="timeline-item">
                <span className="date">2024 - 2025</span>
                <h4>Masters in Computer Science - <span>Example University</span></h4>
                <p>Specialized in full-stack development and modern web technologies.</p>
                </div>
            </div>
            )}

            {activeTab === "experience" && (
            <div className="timeline">
                <div className="timeline-item">
                <span className="date">2023 - 2024</span>
                <h4>Web Developer - Kosala</h4>
                <p>Worked as a junior web developer, providing solutions for clients and maintaining web projects.</p>
                </div>
                <div className="timeline-item">
                <span className="date">2024 - Present</span>
                <h4>Freelance Developer</h4>
                <p>Providing web and multimedia services to clients worldwide, building modern and responsive applications.</p>
                </div>
            </div>
            )}
        </div>
        </div>
    );
}
