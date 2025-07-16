

// import React, { useState } from "react";
// import undergraduateImg from "../assets/Degreelogo/education.png";
// import postgraduateImg from "../assets/Degreelogo/post-graduation-1.png";
// import researchImg from "../assets/Degreelogo/doctoral.png";
// import diplomaImg from "../assets/Degreelogo/JRF.png";
// import onlineImg from "../assets/Degreelogo/education (1).png";


// const Tabs = () => {
//   const tabs = [
//     { 
//       id: "undergraduate", 
//       title: "Undergraduate Programmes", 
//       image: undergraduateImg,
//       content: [
//         "Engineering and Technology", 
//         "Science", 
//         "Management Studies", 
//         "Computer Applications", 
//         "Physiotherapy", 
//         "Arts", 
//         "Law", 
//         "Pharmacy", 
//         "Nursing"
//       ] 
//     },
//     { 
//       id: "postgraduate", 
//       title: "Postgraduate Programmes", 
//       image: postgraduateImg, 
//       content: ["Engineering and Technology", "Science", "Management Studies", "Computer Applications", "Arts","Law","Pharmacy","Physiotherapy"] 
//     },
//     { 
//       id: "research", 
//       title: "Research & Innovation", 
//       image: researchImg, 
//       content: ["Ph.D", "Research Projects", "Innovation Hub"] 
//     },
//     { 
//       id: "diploma", 
//       title: "Diploma & Certification", 
//       image: diplomaImg, 
//       content: ["Diploma in IT", "Diploma in Design", "Short Courses"] 
//     },
//     { 
//       id: "online", 
//       title: "Online Degree Programs", 
//       image: onlineImg, 
//       content: ["BBA Online", "MBA Online", "Data Science Online"] 
//     },
//   ];

//   const [activeTab, setActiveTab] = useState(tabs[0]);

//   return (
//     <div className="tabs-wrapper">
//       {/* Title */}
//       <h1 className="tabs-title">Courses Offered <br /> @ Marwadi</h1>

//       <div className="tabs-container">
//         {/* Left Sidebar Tabs */}
//         <div className="tabs-nav">
//           {tabs.map((tab) => (
//             <div 
//               key={tab.id} 
//               className={`tab-item ${activeTab.id === tab.id ? "active" : ""}`} 
//               onClick={() => setActiveTab(tab)}
//             >
//               <img src={tab.image} alt={tab.title} className="tab-icon-img" />
//               <span>{tab.title}</span>
//             </div>
//           ))}
//         </div>

//         {/* Right Side Content */}
//         <div className="tabs-content">
//           <h2>
//             <img src={activeTab.image} alt={activeTab.title} className="tab-icon-large" />
//             {activeTab.title}
//           </h2>
//           {/* Ordered List (Numbering) */}
//           <ol>
//             {activeTab.content.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ol>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tabs;














import React, { useState } from "react";
import undergraduateImg from "../assets/Degreelogo/education.png";
import postgraduateImg from "../assets/Degreelogo/post-graduation-1.png";
import researchImg from "../assets/Degreelogo/doctoral.png";
import diplomaImg from "../assets/Degreelogo/JRF.png";
import onlineImg from "../assets/Degreelogo/education (1).png";

const Tabs = () => {
  const tabs = [
    {
      id: "undergraduate",
      title: "Undergraduate Programmes",
      image: undergraduateImg,
      content: [
        "Engineering and Technology",
        "Science",
        "Management Studies",
        "Computer Applications",
        "Physiotherapy",
        "Arts",
        "Law",
        "Pharmacy",
        "Nursing"
      ]
    },
    {
      id: "postgraduate",
      title: "Postgraduate Programmes",
      image: postgraduateImg,
      content: ["Engineering and Technology", "Science", "Management Studies", "Computer Applications", "Arts","Law","Pharmacy","Physiotherapy"] 
    },
    {
      id: "research",
      title: "Research & Innovation",
      image: researchImg,
      content: ["Ph.D", "Available under all Faculties in various disciplines", "Research Projects", "Innovation Hub"]
    },
    {
      id: "diploma",
      title: "Diploma & Certification",
      image: diplomaImg,
      content: ["Automobile", "Chemical", "Civil", "Computer", "Electrical", "Mechanical", "ICT", "Nursing"]
    },
    {
      id: "online",
      title: "Online Degree Programs",
      image: onlineImg,
      isCustom: true, // Custom render flag
      content: [
        { type: "Undergraduate", image: undergraduateImg, courses: ["BBA", "BCA"] },
        { type: "Post Graduate", image: postgraduateImg, courses: ["MBA", "MCA", "MA English", "MSc Mathematics"] }
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabClick = (tab) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="tabs-wrapper">
      <h1 className="tabs-title">Courses Offered <br /> @ Marwadi</h1>
      <div class="underlines"></div>
      <div className="tabs-container">
        <div className="tabs-nav">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-item ${activeTab.id === tab.id ? "active" : ""}`}
              onClick={() => handleTabClick(tab)}
            >
              <img src={tab.image} alt={tab.title} className="tab-icon-img" />
              <span>{tab.title}</span>
            </div>
          ))}
        </div>

        <div className={`tabs-content ${isAnimating ? "fade-out" : "fade-in"}`}>
          {activeTab.id === "online" ? (
            <div className="online-degree-container">
              {activeTab.content.map((section, index) => (
                <div key={index} className="online-degree-section">
                  <h3>
                    <img src={section.image} alt={section.type} className="online-degree-img" />
                    {section.type}
                  </h3>
                  <ol>
                    {section.courses.map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          ) : (
            <>
              <h2>
                <img src={activeTab.image} alt={activeTab.title} className="tab-icon-large" />
                {activeTab.title}
              </h2>
              <ol>
                {activeTab.content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
