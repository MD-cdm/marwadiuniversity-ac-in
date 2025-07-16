import React from "react";
import Slider from "react-slick";
import bannerImg from "../assets/Library/Copy-of-3G7A2176-1-scaled.jpg"; // upar wali image
// import sideimg from "../assets/Library/Library.png"
import slide1 from "../assets/Library/0M7A7109-768x512.jpg";
import slide2 from "../assets/Library/0M7A7123-768x512.jpg";
import slide3 from "../assets/Library/0M7A7128-768x512.jpg";
import slide4 from "../assets/Library/0M7A7113-768x512.jpg";
import slide5 from "../assets/Library/0M7A7135-768x512.jpg";
import slide6 from "../assets/Library/0M7A7147-768x512.jpg";
import slide7 from "../assets/Library/0M7A7151-768x512.jpg";
import slide8 from "../assets/Library/0M7A7157-768x512.jpg";
import slide9 from "../assets/Library/0M7A7163-768x512.jpg";
import slide10 from "../assets/Library/0M7A7274-768x512.jpg";
import slide11 from "../assets/Library/0M7A7278-768x512.jpg";
import slide12 from "../assets/Library/0M7A7294-768x512.jpg";
import slide13 from "../assets/Library/0M7A7296-768x512.jpg";
import slide14 from "../assets/Library/0M7A7305-768x512.jpg";
import slide15 from "../assets/Library/0M7A7375-768x512.jpg";
import slide16 from "../assets/Library/0M7A7393-768x512.jpg";
import slide17 from "../assets/Library/0M7A7402-768x512.jpg";
import slide18 from "../assets/Library/0M7A7420-768x512.jpg";
import slide19 from "../assets/Library/0M7A7421-768x512.jpg";
import slide20 from "../assets/Library/Copy-of-3G7A2176-1-scaled.png";
import slide21 from "../assets/Library/0M7A7393-768x512.jpg";

// Image imports (update paths as needed based on your project structure)
import security from "../assets/Library/Other Facilities/Vector-Smart-Object-12-1.png";
import furnishedRoom from "../assets/Library/Other Facilities/Vector-Smart-Object-13-1.png";
import wifi from "../assets/Library/Other Facilities/Vector-Smart-Object-14.png";
import indoorGames from "../assets/Library/Other Facilities/Vector-Smart-Object-15.png";
import laundry from "../assets/Library/Other Facilities/Vector-Smart-Object-16.png";
import library from "../assets/Library/Other Facilities/Vector-Smart-Object-17-1.png";
import hostel from "../assets/Library/Other Facilities/Vector-Smart-Object-18-1.png";
import dance from "../assets/Library/Other Facilities/Vector-Smart-Object-19-1.png";
import gym from "../assets/Library/Other Facilities/Vector-Smart-Object-20-1.png";

import hotWater from "../assets/Library/Other Facilities/Vector-Smart-Object-21.png";
import banking from "../assets/Library/Other Facilities/Vector-Smart-Object-22-1.png";
import meetings from "../assets/Library/Other Facilities/Vector-Smart-Object-23-1.png";
import transport from "../assets/Library/Other Facilities/Vector-Smart-Object-24-1.png";
import medical from "../assets/Library/Other Facilities/Vector-Smart-Object-25.png";
import hostelFull from "../assets/Library/Other Facilities/Vector-Smart-Object-26.png";
import atm from "../assets/Library/Other Facilities/Vector-Smart-Object-27.png";
import music from "../assets/Library/Other Facilities/Vector-Smart-Object-28.png";
import commonRoom from "../assets/Library/Other Facilities/Vector-Smart-Object-29.png";

const facilities = [
  { image: security, text: "24×7 Securities" },
  { image: furnishedRoom, text: "Well-furnished rooms" },
  { image: wifi, text: "Wi-Fi Internet facility" },
  { image: indoorGames, text: "Indoor games (Carom, Badminton etc)" },
  { image: laundry, text: "Laundry Facility" },
  {
    image: library,
    text:
      "Library collection of national/international newspapers, magazines, etc. from morning 7:00 am to 8:00 pm",
  },
  {
    image: hostel,
    text: "Hostel facilities for strength of more than 2000 students.",
  },
  { image: dance, text: "Dance room" },
  { image: gym, text: "Separate gymnasium for girls and boys" },

  { image: hotWater, text: "Hot and Cold Water" },
  { image: banking, text: "Banking Facility" },
  {
    image: meetings,
    text:
      "Regular meetings of the student committees and administration department.",
  },
  { image: transport, text: "Transportation" },
  { image: medical, text: "Medical Facility" },
  {
    image: hostelFull,
    text:
      "Hostel rooms are fully furnished with beds, ceiling fans and lights, study tables, chairs and inbuilt cupboards.",
  },
  { image: atm, text: "ATM Facility" },
  { image: music, text: "Music room" },
  {
    image: commonRoom,
    text: "Common room with TV & cable facility",
  },
];

const Library = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <div className="library-container">
      <h2 className="librarykah2">Library</h2>
      <img src={bannerImg} alt="Library Banner" className="library-banner" />
      {/* <div className="side-img">
          <img src={sideimg} alt="" />
        </div> */}
      <div className="library-content">
        <h2>Introduction</h2>
        
        <ul>
          There are two main libraries which make up the MU Learning <br /> Resource Centre. Specialist collections, use of up-to-date<br /> technology, and a team of enthusiastic and dedicated staff all<br /> combined to form a library which serves the users of the<br /> Marwadi Education as well as contributes towards the research <br /> needs of the Institution, and is one of the best ICT-equipped <br /> academic libraries in the region.
       
        </ul>
        
        <ul className="custom-bullet-list">
          <h5>Fully equipped with RFID (Radio Frequency Identification Device) Technology</h5>
          <h5>Specially devised and designed Self KIOSK for Self Check in & Check out</h5>
          <h5> E-Resource Lab having 60+ computer systems with latest configuration to assist for online research and resources</h5>
          <h5>Specially devised and designed Mobile Application having features of; Intimation, Alerts, History, Account Status and Book Search facilities</h5>
          <h5>Connected with other libraries and resource centers to retrieve information resources worldwide.</h5>
          <h5>Separate Study rooms and discussion rooms</h5>
          <h5> Additional transportation facility for special Late Evening & Sunday Library users</h5>
        </ul>    
        <h2>Facilities</h2>
        
        <ul className="custom-bullet-list">
          <h5>50,000+ Books</h5>
          <h5>60+ E-Resources</h5>
          <h5>15+ Kindle E-Reader</h5>
          <h5>200+ Print Journals</h5>
          <h5>3000+ Online Journals</h5>
          <h5>5TB+ Videos</h5>
          <h5>800+ E-content</h5>
          <h5>Open Resource Journals and E-Journals curated subject wise</h5>
          <h5>National Digital Library of India</h5>
          <h5>GTU e-library</h5>
          <h5>Swayam Online Courses</h5>
          <h5>ShodhGanga</h5>
          <h5>Khan Academy</h5>
        </ul>


        <div className="library-button">
          <button>Access Online Library</button>
        </div>
      </div>

      <div className="library-slider">
        <Slider {...sliderSettings}>
          <img src={slide1} alt="Library 1" />
          <img src={slide2} alt="Library 2" />
          <img src={slide3} alt="Library 3" />
          <img src={slide4} alt="Library 4" />
          <img src={slide5} alt="Library 5" />
          <img src={slide6} alt="Library 6" />
          <img src={slide7} alt="Library 7" />
          <img src={slide8} alt="Library 8" />
          <img src={slide9} alt="Library 9" />
          <img src={slide10} alt="Library 10" />
          <img src={slide11} alt="Library 11" />
          <img src={slide12} alt="Library 12" />
          <img src={slide13} alt="Library 13" />
          <img src={slide14} alt="Library 14" />
          <img src={slide15} alt="Library 15" />
          <img src={slide16} alt="Library 16" />
          <img src={slide17} alt="Library 17" />
          <img src={slide18} alt="Library 18" />
          <img src={slide19} alt="Library 19" />
          <img src={slide20} alt="Library 20" />
          <img src={slide21} alt="Library 21" />
        </Slider>
      </div>
      <div className="facility-section">
      <h2>Other Facilities</h2>
      <div className="facility-grid">
        {facilities.map((item, index) => (
          <div className="facility-card" key={index}>
            <img src={item.image} alt={`facility-${index}`} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      {/* Final description at the bottom */}
      <div className="facility-note">
        <p>
          The campus premises has a fully equipped gym and separate courts for
          Volley Ball, Basket Ball, and Badminton. The concerned staff looks
          after the university assets and ensures that the hostel remains
          responsive all the time.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Library;
