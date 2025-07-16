






import React, { useState } from "react";

// Import Images
import heroImage from "../assets/Image-Slider/rajkotbg.jpg"; // Top banner image
import featureImage from "../assets/Image-Slider/Screenshot 2025-04-03 175710.png"; // Feature image
import rajkotwonder from "../assets/Image-Slider/image.png";
// Slider images
import image1 from "../assets/Image-Slider/Kaba-Gandhi-No-Delo-1024x373.jpg";
import image2 from "../assets/Image-Slider/Mahatma-Gandhi-Museum-1024x373.jpg";
import image3 from "../assets/Image-Slider/Nyari-dam1-1024x412.jpeg";
import image4 from "../assets/Image-Slider/Watson-Museum-Banner-1024x373.jpg";


import culturalImg from "../assets/Image-Slider/mar2.png";
import educationImg from "../assets/Image-Slider/mar1.png";
import industryImg from "../assets/Image-Slider/mar3.png";
import transportImg from "../assets/Image-Slider/mar4.png";

const sections = {

  Events: [
    {
      name: "CULTURAL",
      role: "HERITAGE",
      img: culturalImg,
      description: "Rajkot is one of the key tourist spots in Gujarat hosting historical landmarks, places and parks featuring historical events and monuments from colonial times in a highly preserved manner. The Connaught Hall, Mohandas Gandhi High School, Rashtriya Shala, Kaba Gandhi No Delo, Rotary Dolls Museum housing more than 1400 dolls from around the globe, Rotary Midtown Library, Watson Museum, Lang Library housing thousand of books and documents and Saurashtra Cricket Association Stadium are some of the notable points to visit in Rajkot. Masonic Hall, Swaminarayan Gurukul, Aji Dam, Race Course, Swaminarayan Temple and Vishwakarma Prabhuji Temple have also been the centre point of attraction for a large number of tourists in recent years."
    },
    {
      name: "EDUCATIONAL",
      role: "ASPECTS",
      img: educationImg,
      description: "Rajkot is popular for its education system and was an abode of education for the Father of the Nation, Mahatma Gandhi at the Alfred High School. More than 20 schools and learning institutes are run by the Municipal Corporation of Rajkot. A lot of self-financed public schools are also running in the district which brings the education levels of the city to higher numbers. Various Universities and several public and private institutions of higher studies are preferred by the students from all over the nation due to the level of education and placement opportunities provided right from the college campuses."
    },
    {
      name: "INDUSTRIAL",
      role: "DEVELOPMENT",
      img: industryImg,
      description: "In recent years, Rajkot has also witnessed rapid development wherein real estate has proved to be the key contribution to Rajkot’s development in terms of economy and infrastructure. The city now makes a vital contribution to the economic growth and stability of the state. A number of heavy and small scale industries are running successfully under GIDC and GSFC, the industrial development and financial corporations of the state. With the establishment of several casting and forging industries, Rajkot is becoming one of the top suppliers of heavy machinery and spare parts for reputed companies across the globe. Rajkot is famous for its jewellery market, silk embroidery and watch parts. There are a large number of textile printing units in Rajkot which produce cotton salwar and silk sarees loved by the people nationwide. More than 500 foundry units are established in Rajkot mainly serving the local diesel engine industry. Majorly the foundries deal with the grey iron castings in the local market and electric motor castings, automobile castings in the global market. Leading snacks manufacturers of India like Balaji Wafers Pvt Ltd, Gopal Snacks Pvt Ltd, Avadh Snacks Pvt Ltd also operate from Rajkot. With the widespread applications of IT services across the globe, Rajkot also acts as a key player in the Software and IT sectors by housing the operations and development centres of numerous SOHO companies, Software companies, and multinational call centres. The city is home to Samay Groups, Ajanta Clock, ORPAT Group, Rickon Quartz and Sonera industries."
    },
    {
      name: "COMMUTATION",
      role: "FACILITIES",
      img: transportImg,
      description: "Rajkot is one of the key cities of Gujarat and is well connected through all means of transport – Airway, Railway and Roadway. Numerous GSRTC and private buses run from Rajkot to various cities wherein more than 80000 people travel with GSRTC. The city is very well connected with the state highways and provides a highly comfortable ride on smooth roads. Rajkot BRTS has launched a 10 km corridor and AC buses for the rapid transit system. There are two railway stations in Rajkot wherein Rajkot Junction Railway Stations is widely used by travellers. The station provides connectivity with all the major cities of India while the other railway stations provide connectivity to Veraval, Junagadh, Somnath and Porbandar. The airport is located nearby and can be accessed by auto rickshaw and cab. There are regular flights to Mumbai and Delhi on a daily basis. Thus, from every aspect, Rajkot is one of the finest cities of India for happy living and career growth."


    },
  ]
};

const images = [
  { src: image1, name: "Kaba Gandhi no Delo" },
  { src: image2, name: "Mahatma Gandhi Museum" },
  { src: image3, name: "Nyari Dam" },
  { src: image4, name: "Watson Museum" }
];

const FeatureComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("india");

  const data = {
    india: [
      "Fastest growing economy – ranked by The World Bank & IMF",
      "2nd fastest growing service sector in the world by CII & KPMG",
      "The largest democracy in the world and the 7th largest country",
      "India has 39,050+ colleges & universities with 36.64 million students",
      "2nd largest pool of Engineers and Scientists in the world",
      "India is the 2nd largest English-speaking country in the world",
    ],
    gujarat: [
      "Gujarat is recognised as an educational hub led by premier institutions such as IIM-A, IRMA and NID in Ahmedabad & Marwadi University in Rajkot",
      "One of the most prosperous states in the country having a per-capita GDP 3.2 times India’s average",
      "Around 60 universities & over 800 colleges are based in Gujarat with around 1.4 million students",
      "Government-promoted programmes like ‘Student Start-up & Innovation Policy (SSIP)’ to encourage research and innovation",
      "One of the safest states in India",
      "World’s Tallest Statue in Gujarat with the height of 182 metres",
    ],
    rajkot: [
      "Rajkot is envisioned as a smart city with an intense focus on developing next-gen leaders and entrepreneurs through education",
      "Rajkot is the 35th largest metropolitan area in India, with a population of more than 2 million as of 2021. It is the 7th fastest-growing city in the world",
      "The city boasts of historical landmarks, parks featuring historical events, & monuments from colonial times in a highly preserved manner",
      "The leading centre of India in the field of diesel-engines, submersible pumps, and forging industries, ceramic as well as textile industries",
      "Mahatma Gandhi spent early years of his life in Rajkot",
      "Rajkot was once the capital of the princely state of Saurashtra",
    ],
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="feature-wrapper">
      {/* <h1 className="aboutrajkot">About Rajkot</h1>
      <div className="underlines"></div> */}

      {/* Hero Section */}
      <div className="hero-section">
        <img src={heroImage} alt="City of Rajkot" className="hero-image" />
        <div className="hero-text">
          <h1>KNOW THE CITY OF RAJKOT</h1>
          <h2>COLOURFUL, CULTURAL, ETHNIC</h2>
        </div>
      </div>

      {/* Rajkot Title */}
      <div className="rajkottitle">
        <h1>
          With 14 ‘Talukas’, Rajkot area is regarded as the economic,<br />
          industrial, and pedagogical hub of Saurashtra-Kutch region
        </h1>
      </div>

      {/* Feature Image */}
      <div className="feature-container">
        <div className="feature-image">
          <img src={featureImage} alt="Feature" />
        </div>

        {/* Image Slider */}
        <h1 className="slider-title">PLACES TO VISIT IN RAJKOT</h1>
        <div className="image-slider">
          <button className="slider-btn left" onClick={prevSlide}>
            &#10094;
          </button>
          <img src={images[currentIndex].src} alt="Slider" className="slider-image" />
          <div className="image-name">{images[currentIndex].name}</div>
          <button className="slider-btn right" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>

      {/* Wondering Image */}
      <img src={rajkotwonder} alt="City of Rajkot" className="wonderingimage" />

      {/* Tabbed Content Section */}
      <div className="tabs-containers">
        <div className="tabs-header">
          <button className={activeTab === "india" ? "active" : ""} onClick={() => setActiveTab("india")}>
            INDIA
          </button>
          <button className={activeTab === "gujarat" ? "active" : ""} onClick={() => setActiveTab("gujarat")}>
            GUJARAT
          </button>
          <button className={activeTab === "rajkot" ? "active" : ""} onClick={() => setActiveTab("rajkot")}>
            RAJKOT
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          <ul>
            {data[activeTab].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>



        {/* Leadership Section */}
      <div className="leadership-contentssss">
        {sections.Events.map((person, index) => (
          <div key={index} className="leader-cardss">
            <img src={person.img} alt={person.name} className="leader-imaging" />
            <div className="leader-information">
              <h3 className="sliderbelow ">{person.name}</h3>
              <h4 className="sliderbelows">{person.role}</h4>
              <p className="leader-des">{person.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>


  );
};

export default FeatureComponent;
