import React from "react";
import graduateImage from "../assets/images.png";

const WhyMarwadi = () => {
  const points = [
    { number: "01", title: "NAAC A+", description: "Surety of quality education at affordable cost at Gujarat’s first NAAC A+ accredited Institute" },
    { number: "02", title: "Centre Of Excellence", description: "Government of Gujarat recognized Marwadi University and awarded it with 'Centre of Excellence' status" },
    { number: "03", title: "Youngest University", description: "MU is the youngest university in Western India with 12000+ students from 53 Countries" },
    { number: "04", title: "Top 50 Private Universities", description: "Marwadi University is among the Top 50 Private Universities of India according to India Today, Outlook Ranking 2021" },
    { number: "05", title: "Study In India (SII)", description: "The University is a Prestigious Member under SII (STUDY IN INDIA), Govt. of India, Ministry of Education" },
    { number: "06", title: "Campus Placements", description: "Pioneering University of Western India with highest Placement Opportunities – 480 COMPANIES visited for Campus Placement for the AY 2020-21" },
    { number: "07", title: "FORBES Awarded", description: "FORBES has awarded the University as the Top Law School in India" }
  ];

  return (
    <div className="why-marwadi">
        
      <h2 className="section-titless">Why Marwadi?</h2>
      <div class="underlines"></div>
      <div className="why-container">
        <div className="why-content">
          {points.map((point, index) => (
            
            <div key={index} className="why-item">
              <span className="why-number">{point.number}</span>
              <h3 className="why-title">{point.title}</h3>
              <p className="why-description">{point.description}</p>
            </div>
            
          ))}
        </div>
        <div className="why-image">
        <img src={graduateImage} alt="Graduate" />

        </div>
      </div>
    </div>
  );
};

export default WhyMarwadi;

