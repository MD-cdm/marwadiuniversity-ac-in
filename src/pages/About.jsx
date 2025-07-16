import React, { useState } from "react";
import Aboutbg from "../assets/Dean/About-bg.jpg";

import img1 from "../assets/Dean/Ketan-Marwadi-.png";
import img2 from "../assets/Dean/Jitubhai-Chandarana-1.png";
import img3 from "../assets/Dean/mr-sandeep-marwadi.png";
import img4 from "../assets/Dean/mr-amish-chandarana.png";
import img5 from "../assets/Dean/Jeet-Marwadi.png";
import img6 from "../assets/Dean/Amish-Chandarana.png";
import img7 from "../assets/Dean/dhruv-marwadi.png";
import img1keypeople from "../assets/Dean/Dr-Rajendrasinh-Jadeja-NEW.png"
import img2keypeople from "../assets/Dean/Naresh-Sir-Key-People-e1663739359754.png"



// Dummy images (Replace with actual image imports)
import img1dean from "../assets/Dean&Head/Dr-Rajendrasinh-Jadeja-NEW.png";
import img2dean from "../assets/Dean&Head/Dr-Sunil-Jakhoria.png";
import img3dean from "../assets/Dean&Head/Dr-Rhishikesh-Dave.png";
import img4dean from "../assets/Dean&Head/Dr-Sridaran-Rajagopal.png";
import img5dean from "../assets/Dean&Head/3.png";
import img6dean from "../assets/Dean&Head/Dr-Ramdevsinh-Jhala.png";
import img7dean from "../assets/Dean&Head/Dr-Lalji-Baldaniya.png";
import img8dean from "../assets/Dean&Head/Dr-Rajeshkumar-Patel.png";
import img9dean from "../assets/Dean&Head/Dr-Ashish-Kakkad.png";


const About = () => {
  const [activeTab, setActiveTab] = useState("management");

  const tabData = {
    management: [
      {
        name: "Mr Ketan Marwardi",
        role: "Founder & President",
        img: img1,
        description: "At Marwadi University, we are committed to offering our students a unique platform that makes them industry-qualified and enhances their knowledge that can be practically implemented in the real world. Gaining knowledge with the help of analytical tools that unlocks the limitless potential of an individual is no more a distant dream. With the help of 3-layer learning at Marwadi University, we aim to promote technological expertise with a mix of vigorous research and revised skill sets. The first layer consists of Knowledge that focuses on attributes like critical thinking, identifying opportunities, and decision-making. While the second layer aims at improving the individual skills that push the students closer to their goals. With the acquired technical and soft skills, the third layer which is the development stage prepares the students to implement the gained knowledge in real-life situations. The convergence of the competence will accelerate the students’ proficiency in contributing in the highest manner to our society. With Rajkot being the entrepreneurial hub of the Saurashtra region of Gujarat that provides plenty of employment opportunities, a lack of knowledge and its implementation was seen. Marwadi University had been established with the sole purpose of bridging the gap between the immense economic growth and the lack of technological advancements. With the research-oriented tech-focused curriculum, Marwadi University aims to direct its students to the path that leads them to become successful entrepreneurs. This pushes them to utilize the available opportunities in a manner that also contributes to the betterment of our society."
      },
      {
        name: "Mr. Jitubhai Chandarana",
        role: "Co-Founder & Vice Chairman",
        img: img2,
        description: "While Marwadi University exclusively focuses on building expertise through hands-on learning method, the holistic development of the students is not left in the lurch. The competency of our faculty members is time and again revived with the help of efficient Faculty Development Programmes, and the recurring strive to constructively hone our students through workshops and training that takes them closer to self-learning. The ethical values that we acuminate, nurture and mentor our students and lean them to the area of revolution along with self-discovery. The amalgamation of analytical knowledge along with acquired skill- learning would generate a plethora of opportunities for the students. By providing them with the necessary tools, resources, and strategic guidance; Marwadi University aims at promoting self-learning and self-discover. To this end, we are committed to empowering our students with the accumulated knowledge and driving them towards a healthier, progressive, and prosperous future. This kind of educational system not only focuses on the socio-economic growth of the region but takes a leap towards international recognition as well. With the establishment of Marwadi University, we intend to considerably invest in the educational sector in order to proportionately focus on entrepreneurship along with education. By doing so, we aim to nurture society in the areas of research and technology and also drive growth via industrial and academic partnerships."
      },
      {
        name: "Mr. Sandeep Harward",
        role: "Honourable Trustee",
        img: img3,
        description: "MU has a unique platform that gives students a plethora of unparalleled opportunities to experience the joy of learning, the wonders of new knowledge and to unearth their limitless potential and capabilities. When you become part of the MU family, we leave no stone unturned to guide, mentor, nurture and prepare you to meet the global requirements, both personal and professional. Our gift to you and our nation are strong and ethical leaders who will shape and change the destiny and future of the world."
      },
      {
        name: "Mr. Nishit Chandarana",
        role: "Honourable Trustee",
        img: img4,
        description: "At MU, we continue to stand by our belief in expanding human knowledge and to benefit society through an environment that integrates joy, learning and researching with education. We, at MU, strive to provide culture and a platform that drives the students to pursue the most challenging and fundamental problems in a plethora of fields. Moving forward, we are convinced that with the right team, led by a culture of innovation and excellence, we will continue to deliver."
      },
      {
        name: "Mr. Jeet Marwadi",
        role: "Honourable Trustee",
        img: img5,
        description: "Student empowerment has been our primary focus. A structured education system driven by technology, blended with enhanced communication skills ensures that our students evolve to be responsible world citizens. The entire ecosystem is designed to accelerate the holistic growth of our students and enable them to confidently step up to solve the challenges of our planet, be it tech, environment, or people related.I welcome you to the world of opportunities that is often summarised in one name – Marwadi University."
      },
      {
        name: "Mr. Amish Chandarana",
        role: "Honourable Trustee",
        img: img6,
        description: "At Marwadi University, ‘Discover You’ is not just a theme. It is the commitment and the belief that gives us the impulse to go a step further and help make each and every student discover their true potential. We, at Marwadi University, do not limit ourselves in imparting academic education, but also inspire to develop a progressive outlook, to transform our understanding of the world and to pursue unpredicted ways of thinking to help our students become creative members of the society imparting academic education, but also inspire to develop a progressive outlook, to transform our understanding of the world and to pursue unpredicted ways of thinking to help our students become creative members of the society."
      },
      {
        name: "Mr. Dhruv Marwadi",
        role: "Honourable Trustee",
        img: img7,
        description: "Welcome to Marwadi University, where we believe that university time is not just a phase of academic pursuit, but a transformative journey that shapes the trajectory of one’s life. As students step onto our campus, they embark on a path of self-discovery, growth, and preparation for the challenges and opportunities that lie ahead. We recognize that university serves as a pivotal bridge between the sheltered realms of school life, where dependency on parents is often the norm, and the realms of professional life, where independence and self-reliance become paramount. It is during this critical juncture that students undergo profound personal and intellectual development, laying the foundation for their future endeavors. At Marwadi University, we foster a culture of “Discovery” – a mindset that encourages students to explore, question, and innovate without the fear of judgment or failure. We believe in empowering individuals to uncover their passions, interests, and aspirations, enabling them to chart their own unique paths towards success. Central to our mission is the creation of an inclusive and supportive environment where students feel empowered to express themselves authentically. We are committed to providing resources, mentorship, and opportunities for students to thrive academically, personally, and professionally. Moreover, we recognize the importance of bridging the gap between academia and industry. Through strategic partnerships and experiential learning initiatives, we offer students valuable exposure to real-world practices and challenges, equipping them with the skills and insights necessary to excel in their chosen fields upon graduation. We are dedicated to nurturing the next generation of leaders, innovators, and change-makers. Together, let us embark on this journey of discovery, growth, and transformation. Welcome to Marwadi University, where your journey begins, and the possibilities are endless."
      }
    ],


    keyPeople: [
      {
        name: "Prof. (Dr) Rajendrasinh Jadeja",
        role: "Provost",
        img: img1keypeople,
        description: "Marwadi University has always been committed to providing a transformative educational experience that empowers our students to excel in their chosen fields and contribute meaningfully to society. I am delighted to extend a warm welcome to students from every corner of the country and around the globe to become a part of Marwadi University. Our programs offer education that goes beyond classrooms, lectures, examinations and degrees. Our comprehensive industry relevant programs, dedicated faculty, state-of-the-art facilities, and industry partnerships ensure that you receive a well-rounded education that prepares you for the challenges and opportunities of the modern world. Beyond academics, we encourage students to engage in extracurricular activities, explore your interests, and embrace new experiences. Whether it’s participating in sports, cultural events, or community service initiatives, there are ample opportunities for personal and professional growth. I encourage each student to actively engage in all facets of University life, whether it is through academics, research, extracurricular activities, or community service. We are dedicated to a continuous journey of self-improvement, focusing on enhancing our standards in academics, research, and experiential learning to stay at the forefront of global challenges and opportunities. Welcome to a world of possibilities and growth!"
      },
      {
        name: "Mr Naresh Jadeja",
        title: " “With a good education, the world is your oyster.”",
        role: "Executive Registrar ",
        img: img2keypeople,
        description: "Marwadi University is the centre of quality education in the highly entrepreneurial region of Gujarat. Within a span of 14 years, the Institute has been successful in stretching its educational belt in 51 countries. With the mission of cultivating the culture of research and advancement, Marwadi University has taken advancing steps to inculcate the practice of research-based learning in its curriculum. Various advanced labs like iOS, the real-time success of Incubation and Research Centre, highly efficient Learning Resource Centre with more than 50,000 physical books along with high-end computing facilities like a supercomputer Param Shavak – all of these are the little steps that the University is making in order to efficiently focus on research and learning. I, wholeheartedly welcome you to become a part of the MU Family and I assure that with the gained education you will definitely become the shining star of the society through your valuable contributions. At Marwadi University, we help you to march forward with the right ethical knowledge that will eventually make you a valuable citizen of the society."
      },
    ],
    deans: [
      
    ],
  
  };
  

  const deansData = [
    {
      name: "Rajendrasinh Jadeja",
      role: "Dean, Faculty of Engineering",
      img: img1dean
    },
    {
      name: "Dr Sunilkumar Jakhoria",
      role: "Dean, Faculty of Management",
      img: img2dean

    },
    {
      name: "Dr Rhishikesh Dave",
      role: "Dean, Faculty of Law",
      img: img3dean

    },
    {
      name: "Dr Sridaran Rajagopal",
      role: "Dean, Faculty of Computer Applications",
      img: img4dean

    },
    {
      name: "Dr Kantha Deivi Arunachalam",
      role: "Dean, Faculty of Science",
      img: img5dean

    },
    {
      name: "Dr Ramdevsinh Jhala",
      role: "Dean, Faculty of Technology",
      img: img6dean

    },
    {
      name: "Dr Lalji Baldaniya",
      role: "Principal, Faculty of Pharmacy",
      img: img7dean

    },
    {
      name: "Dr Rajesh Patel",
      role: "Principal, Faculty of Diploma Studies",
      img: img8dean

    },
    {
      name: "Dr Ashish Kakkad",
      role: "Principal, Faculty of Physiotherapy",
      img: img9dean

    },
  ];
  return (
    <section className="leadership-container">
      {/* 🔹 Image with Text Overlay */}
      <div className="leadership-header">
        <img src={Aboutbg} alt="Leadership Team" className="leadership-image" />
        <h1 className="leadership-title">LEADERSHIPS</h1> {/* Overlay Text */}
      </div>

      {/* 🔹 Tabs */}
      <div className="leadership-tabs">
        
        <button
          className={`leadership-tab ${activeTab === "management" ? "active-tab" : ""}`}
          onClick={() => setActiveTab("management")}
        >
          MANAGEMENT
        </button>
        <button
          className={`leadership-tab ${activeTab === "keyPeople" ? "active-tab" : ""}`}
          onClick={() => setActiveTab("keyPeople")}
        >
          KEY PEOPLE
        </button>

        <button
          className={`leadership-tab ${activeTab === "deans" ? "active-tab" : ""}`}
          onClick={() => setActiveTab("deans" )}
          
        >
          DEANS AND HEADS
        </button>

      </div>

      {/* 🔹 Section Title */}
      <h1 className="boss">{activeTab.toUpperCase()}</h1>
      <div class="underlines"></div>
      {/* 🔹 Tab Content */}
      <div className="leadership-content">
        {Array.isArray(tabData[activeTab]) ? (
          tabData[activeTab].map((person, index) => (
            <div key={index} className="leader-card">
              <img src={person.img} alt={person.name} className="leader-image" />
              <div className="leader-info">
                <h3 className="aboutkah3">{person.name}</h3>
                <h4 className="aboutkah4">{person.role}</h4>
                <h4 className="aboutkah5">{person.title}</h4>
                <p className="leader-description">{person.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>{tabData[activeTab]}</p>
        )}
      </div>

      {/* ✅ Deans tab ka data sirf tab click hone par dikhega */}
      {activeTab === "deans" && (
        <section className="deans-section">
          <div className="deans-section-grid">
            {deansData.map((dean, index) => (
              <div className="deans-section-card" key={index}>
                <img src={dean.img} alt={dean.name} className="deans-section-image" />
                <h3 className="deans-section-name">{dean.name}</h3>
                <p className="deans-section-role">{dean.role}</p>
              </div>
            ))}
          </div>
        </section>
      )}




      {/* 🔹 Video Section */}
      <div className="video-section">
        <h2 className="video-titlel">MCG Corporate Movie</h2>
        <div className="video-container">
          <iframe
            className="video-frame"
            src="https://www.youtube.com/embed/iOGs6_z6-Hc?si=HTkZxqE3eAgQtFy4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default About;






