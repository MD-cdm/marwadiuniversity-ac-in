import React from "react";

import universityImage from "../assets/marwadi image.jpg"; // ✅ Image ko import karo
// import statesImage  from "../assets/Image-Slider/statesimg.png"
import img1 from "../assets/Image-Slider/image090.jpg"
import img2 from "../assets/Image-Slider/image092.jpg"
import img3 from "../assets/Image-Slider/image093.jpg"
import img4 from "../assets/Image-Slider/image094.jpg"
import img5 from "../assets/Image-Slider/image095.jpg"
import img6 from "../assets/Image-Slider/Vector-Smart-Object-35.png"
const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-image">
        <h2 className="States-titless">Status & Accreditation</h2>

        <img src={universityImage} alt="University" /> {/* ✅ Directly use karo */}

      </div>
      <div className="hero-content">

        <h2>
          <span className="highlight">Centre</span> of Excellence
        </h2>
        <p>
          The Government of Gujarat has awarded the University with a status of “Centre of Excellence”. This status has elevated the University as one among the top seven Institutes of Gujarat. This distinction bestowed upon the University showcases that Quality Education, Excellent Research, Innovative Teaching Methodologies, Quality of Extension Services, High Employability and Entrepreneurship are being imparted. Other Institutes receiving Centre of Excellence status are Pandit Deendayal Energy University (PDEU), Nirma University, Ahmedabad University, CEPT, Charusat and DA-IICT.
        </p>

        <h3>NAAC</h3>
        <p>Marwadi University received NAAC A+ [CGPA 3.31/4] Accreditation during the Period 2023-2028. Marwadi University and has emerged as the highest-ranking institution in the region.
        </p>

        <h3>What is NAAC?</h3>
        <p>National Assessment and Accreditation Council (NAAC) is an autonomous institution of University Grants Commission (UGC) established in 1994 with a vision to assure quality and make it an integral part of Higher Education Institutions (HEIs). The governing body comprises policy makers, educational administrators, and senior academicians. NAAC is the external independent agency that gives a formal recognition of quality of education by an impartial assessment procedure. They have a well defined criteria for the same.

          According to the latest data, only 22% of all colleges and universities in India, have been given A grade and higher in the accreditation. Marwadi Education Foundation’s Group of Institutions is one of them with NAAC A+ Grade.</p>

        <h3>Benefits of NAAC A+?</h3>
        <p>The NAAC accreditation system aims to contribute to National Development, foster global competencies among students, inculcate a value system among students, and promote the use of technology. With this, an institution knows its strengths, weaknesses, opportunities, and threats through the informed review process. It helps in initiating innovative and modern methods of pedagogy. It gives a new sense of identity and direction. The society is provided with reliable information on the quality of education of any institution. It provides scope for Intra and Inter Institutional interactions.</p>



        <h3> List Benefits of NAAC A+?</h3>
        <h4>1️⃣ Start-ups by Marwadi University Students Preferred for Funding 🚀</h4>
        <p>Students at Marwadi University are launching innovative start-ups that are becoming the top choice for investors and funding agencies. The university's incubation centers and mentorship programs are guiding young entrepreneurs toward success.</p>


        <h4>2️⃣ An Edge Over Other University Students 📚</h4>
        <p>Students at Marwadi University gain a competitive edge in the job market. The advanced curriculum, industry collaborations, and skill-based learning prepare them to tackle real-world challenges effectively.</p>


        <h4>3️⃣ First Choice of International Companies for Placement 🌍 </h4>
        <p>Graduates from Marwadi University are highly preferred by international companies due to the institution's industry-aligned education system. Every year, numerous multinational corporations recruit top talent from the university.</p>


        <h4>4️⃣ Ease in Higher Education in Foreign Countries 🎓</h4>
        <p>Marwadi University's degrees are internationally recognized, providing students with a strong foundation for securing admissions and scholarships at foreign universities.</p>



        <h4>5️⃣ Innovative and Modern Teaching Methods 🏫</h4>
        <p>The university employs modern technology and interactive teaching methods, such as AI-based learning, virtual labs, and practical case studies, ensuring students receive the best learning experience possible.</p>
        {/* <img src={statesImage} alt="statesImage" />  */}


        <h3>How Does it Help?</h3>
        <p>With the accreditation, students are easily able to select the institutions and programmes for admission. It is easy for employers to select institutions for recruitment drives. The institute is eligible for availing benefits from regulatory bodies and funding agencies. The A+ grade gives a benchmark and provides our University with a motivation for continuous improvement. At an international level, a degree from a highly graded institution helps in mobility of students for employment and higher studies in other countries.</p>


        <h3>Efforts Taken by MEFGI</h3>
        <p>Marwadi University focuses on 3-level education of students. With this, they receive not only theoretical knowledge but also practical knowledge. Various laboratories, library, equipment, make students industry ready. They are trained in a way that they easily adapt to the work atmosphere and thus, get absorbed in the workforce quickly.

          The University aims at overall development of students. Seminars from international faculty members, industry experts, research motivation, industrial tie-ups, startup labs, various events, fests, clubs pushes the students to explore their limits. The University campus has a modern infrastructure to facilitate almost all outdoor sports activities. With a total of 50-acre spread, 4 acres are completely dedicated to sports facilities. The University lays due emphasis not only on the academic growth of its students but also on their holistic development.</p>

      </div>
      {/* <div className="What-does">
      <h3>What does<br/>
      The A+ Grade Mean?</h3>
        
      <img src={img1} alt="University" /> 
      <img src={img1} alt="University" /> 
      <img src={img2} alt="University" /> 
      <img src={img3} alt="University" /> 
      <img src={img4} alt="University" /> 
      <img src={img5} alt="University" /> 
      <img src={img6} alt="University" /> 
      </div> */}



      <div className="What-does">
        <h3>What does<br />The A+ Grade Mean?</h3>

        <div className="image-wrapper">
          <p className="img-title">Innovative Teaching Methodologies</p>
          <img src={img1} alt="Innovative Campus" />
        </div>

        <div className="image-wrapper">
          <p className="img-title">Research, Innovations, <br/> & Extensions</p>
          <img src={img1} alt="Student Activities" />
        </div>

        <div className="image-wrapper">
          <p className="img-title">Holistic Development <br/> and Progression</p>
          <img src={img2} alt="Research Labs" />
        </div>

        <div className="image-wrapper">
          <p className="img-title">Support for Higher <br/> Studies and <br/> Placement</p>
          <img src={img3} alt="NAAC A+ Achievement" />
        </div>

        <div className="image-wrapper">
          <p className="img-title">Well Qualified and
            Supportive Faculties</p>
          <img src={img4} alt="Tech Events" />
        </div>

        <div className="image-wrapper">
          <p className="img-title">Modern Infrastructure <br/>
            and Practical <br/>
            Laboratories</p>
          <img src={img5} alt="Placement Drives" />
        </div>

        <div className="image-wrapper">
          <p className="img-title">Learning, Resources, Motivation,<br/>
          and Assistance</p>
          <img src={img6} alt="Global Recognition" />
        </div>
      </div>

    </div>
  );
};

export default HeroSection;
