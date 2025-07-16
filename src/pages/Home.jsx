import React, { useState } from "react";

// import bgVideo from "../assets/school-bg.mp4"; // Background video
import bgVideo from "../assets/school-bg2.mp4"; // Add your video in the 'assets' folder
import campusImage from "../assets/marwadi 360.png"; // Apni local image ka path yahan daalo
// import whatsappIcon from "../assets/whats-app.png"
import whats from "../assets/whats.png"

const Home = () => {
  const [showImage, setShowImage] = useState(false);

  return (
    <section id="home">
      {/* Background Video */}
      <video autoPlay loop muted className="bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Content */}
      <div className="home-content">
        <h1>Welcome to Marwadi University</h1>
        <p>
          Empowering students with knowledge, creativity, and excellence. 
          Join us to explore a world of opportunities.
        </p>
        <button className="btn" onClick={() => setShowImage(true)}>
          Explore Now
        </button>

        {/* Image Display */}
        {showImage && (
          <img
            src={campusImage}
            alt="Campus View"
            className="campus-image"
          />
        )}

        {/* WhatsApp Chat Button */}
        <div className="whatsapp-chat">
          <a href="https://wa.me/+918980030090" target="_blank" rel="noopener noreferrer">
            <img src={whats}alt="WhatsApp" />
            <span className="chat-text">Connect with us</span>
          </a>
          <span className="notification-badge">1</span>
        </div>
      </div>
    </section>
  );
};

export default Home;
