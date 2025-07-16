
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { FaBuilding } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaPlaneDeparture, FaTrain, FaBus } from "react-icons/fa";
// import { BiUnderline } from "react-icons/bi";
import Googleplay from "../assets/Google play.png";
import Appstore from "../assets/App-Store.png";
import backreach from "../assets/backreach.png"


const footer = () => {
  return (
    <div className="get-connected-container">
      <h2 className="get-connected-title">
      <img
  src={backreach}
  alt="Campus View"
  className="backreach"
/>

        Get <span>Connected</span>
        <div class="underline"></div>
      </h2>

      <div className="get-connected-grid">
        {/* Social Media & App Links */}
        <div className="text-center">
          <h3 className="section-title">FOLLOW US ON</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/@Marwadiuniversity/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="icon-facebook  cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/marwadi.university/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon-instagram  cursor-pointer" />
            </a>
            <a href="https://in.linkedin.com/school/marwadiuniversity/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon-linkedin  cursor-pointer" />
            </a>
            <a href="https://www.youtube.com/user/marwadieducation" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="icon-youtube  cursor-pointer" />
            </a>
          </div>

          <h3 className="section-title">DOWNLOAD APP NOW</h3>
          <div className="download-container">
            <a href="https://play.google.com/store/apps/details?id=com.mefgi.login" target="_blank" rel="noopener noreferrer">
              <img src={Googleplay} alt="Google Play" width="300" />
            </a>

            <a href="https://apps.apple.com/in/app/mu-student-login/id895752150" target="_blank" rel="noopener noreferrer">
              <img src={Appstore} alt="App Store" />
            </a>
          </div>
        </div>


        {/* Contact Info */}
        <div className="text-center">
          <h3 className="section-title">REACH US</h3>
          <div className="info-container">
            <p className="info-item">
              <a href="https://www.marwadiuniversity.ac.in/">
                <FaBuilding /> Marwadi University
          </a>
          </p>
          <p className="info-item"><MdLocationOn /> Rajkot-Morbi Road, Rajkot 360 003, Gujarat, India</p>

          <p className="info-item">
            <a href="tel:+918980030090">
              <IoMdCall /> Admission help-line: +91 8980030090
            </a>
          </p>

          <p className="info-item">
            <a href="tel:+912817123456">
              <MdPhone /> Office: +91 2817123456
            </a>
          </p>

          <p className="info-item">
            <a href="mailto:info@marwadiuniversity.ac.in">
              <MdEmail /> info@marwadiuniversity.ac.in
            </a>
          </p>

        </div>
      </div>

      {/* Distance Info */}
      <div className="text-center">
        <h3 className="section-title">DISTANCE FROM</h3>
        <div className="distance-container">
          <a href="https://www.google.com/maps/dir/Rajkot+International+Greenfield+Airport/Marwadi+university/@22.3552202,70.7496561,11z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3959af201c8cab21:0xfe502e85ec1be5d3!2m2!1d71.0316944!2d22.3818371!1m5!1m1!1s0x3959c972761ce515:0x3651e3fe1e9df4f8!2m2!1d70.7971926!2d22.3676617?entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="distance-item">
            <FaPlaneDeparture className="icon" /> International Airport
          </a>

          <a href="https://www.google.com/maps/dir/Railway+Station+Rd,+Junction+Plot,+Rajkot,+Gujarat+360001/Marwadi+university/@22.3361225,70.7687361,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3959c9fa80a882bb:0x1eae06a7a8412ffc!2m2!1d70.8026083!2d22.3105717!1m5!1m1!1s0x3959c972761ce515:0x3651e3fe1e9df4f8!2m2!1d70.7971926!2d22.3676617?entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="distance-item">
            <FaTrain className="icon" /> Railway Station
          </a>

          <a href="https://www.google.com/maps/dir/Rajkot+Central+Bus+Station+-+Bus+port,+Dhebar+Road,+Raghuveer+Para,+Lohana+Para,+Rajkot,+Gujarat/Marwadi+university/@22.3294079,70.7590433,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3959ca1b29032ecd:0x58635ee5519080ac!2m2!1d70.8021165!2d22.2910217!1m5!1m1!1s0x3959c972761ce515:0x3651e3fe1e9df4f8!2m2!1d70.7971926!2d22.3676617?entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="distance-item">
            <FaBus className="icon" /> GSRTC Bus Port
          </a>
        </div>

      </div>
    </div>
    </div >
  );
};

export default footer;
