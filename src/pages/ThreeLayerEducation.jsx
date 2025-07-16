import React from "react";
import { FaBrain, FaChartLine, FaCogs } from "react-icons/fa";

const ThreeLayerEducation = () => {
  const layers = [
    {
      id: 1,
      title: "KNOWLEDGE",
      layer: "LAYER 1",
      description:
        "This is the first stage where a student is taught to be a lifetime learner. The programme encourages critical thinking, collaboration, self-awareness, and decision-making.",
      icon: <FaBrain />,
      color: "#E74C3C",
    },
    {
      id: 2,
      title: "SKILLS",
      layer: "LAYER 2",
      description:
        "In this phase, special skill-development programmes aid learners in identifying and bridging skill gaps to achieve their goals.",
      icon: <FaChartLine />,
      color: "#3498DB",
    },
    {
      id: 3,
      title: "DEVELOPMENT",
      layer: "LAYER 3",
      description:
        "This stage is created to make students proficient in life skills through hands-on experiences that give insight into the real world.",
      icon: <FaCogs />,
      color: "#F39C12",
    },
  ];

  return (
    <div className="three-layer-container">
      <h2 className="section-titles">3-Layer Education</h2>
      <p className="section-subtitle">
        The Three Layers of Learning ensures that all learners acquire key technical and soft skills and possess all necessary attributes for a successful life.
      </p>
      <div className="layers-wrapper">
        {layers.map((layer) => (
          <div key={layer.id} className="layer-card">
            <div
              className="layer-icon"
              style={{ borderColor: layer.color, color: layer.color }}
            >
              {layer.icon}
            </div>
            <h3 className="layer-title" style={{ color: layer.color }}>
              {layer.layer}
            </h3>
            <h2 className="layer-heading">{layer.title}</h2>
            <p className="layer-description">{layer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeLayerEducation;
