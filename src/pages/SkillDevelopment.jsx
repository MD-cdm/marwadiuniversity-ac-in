import React from "react";
import logoimg from "../assets/Image-Slider/Screenshot-123.png"
const SkillDevelopmentReport = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="header-image">
        Skill Development Initiatives
      </div>

      {/* Content Section */}
      <div className="content-section">
        <h1>Report on Skill Development Initiatives</h1>
        <img  src={logoimg} alt="Student Activities" />
        <a
          href="/Report-on-SKILL-Development-Initiatives-2023-24.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="pdf-link"
        >
           Academic Year 2023-24
        </a>

      </div>
    </div>
  );
};

export default SkillDevelopmentReport;
