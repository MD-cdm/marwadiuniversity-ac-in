import React, { useState } from "react";
import contactBg from "../assets/contactpage/Rectangle-1-copy-2-7.png"; // ✅ Background Image
import locationIcon from "../assets/contactpage/Vector-Smart-Object-5.png"; // ✅ Location Icon
import studentIcon from "../assets/contactpage/emplyee-copy-2 (1).png"; // ✅ Student Icon

// ✅ Faculty Images
import nileshIcon from "../assets/contactpage/420X467_PX_PROF.-NILESH-ADVANI.jpg";
import dhavalIcon from "../assets/contactpage/420X467_PX_PROF.-DHAVAL-ANADKAT.jpg";
import priyeshIcon from "../assets/contactpage/420X467_PX_MR-PRIYESH-VAYA.jpg";
import krunalIcon from "../assets/contactpage/420X467_PX_DR-KRUNAL-VAGHELA.jpg";
import bavarvaIcon from "../assets/contactpage/420X467_PX_DR-ARJAV-BAVARVA.jpg";
import gauravIcon from "../assets/contactpage/gaurav-gandhi.png"
import vivekpatelIcon from "../assets/contactpage/emplyee-copy-2 (2).png"
const officesData = [
  {
    state: "ANDHRA PRADESH",

  },
  {
    state: "BIHAR",
    city: "Patna",
    address: "2nd Floor OP Complex, Opposite Loyola School, Patliputra Kurji Road, Patna 800010",
    email: "ragini.kumari@marwadieducation.edu.in",
    mobile: "+91-9687680267",
  },
  {
    state: "DELHI",
    city: "Delhi",
    email: "saurav.kumar@marwadieducation.edu.in",
    mobile: " +91-9909917416",
  },
  {
    state: "GUJARAT",
    city: "Gujarat",
    address: "For Aviation and Fintech programs C/o Aerostar Aviation Academy 26,27 “The Emporia”, 2nd Floor, A.G. Chowk, Kalawad Road, Rajkot.",
    mobile: "+91 94265 17033",
  },
  {
    state: "JHARKHAND",
    city: "Ranchi",
    address: "SANJEEV MEHTA 505, 5th floor, Eastern Mall, above Pantaloons, Dangratoli, Lalpur, Ranchi-834001",
    email: "gujarat.office@marwadieducation.edu.in",
    mobile: " +91 7209442666",
  },
  {
    state: "KARANATAKA",

  },
  {
    state: "KERALA",
  },
  {
    state: "MP & CHHATISGARH",
    city: "MP & Chhatisgarh",
    email: "saurav.kumar@marwadieducation.edu.in",
    mobile: " +91-9909917416",
  },
  {
    state: "RAJASTHAN",
    city: "Rajasthan",
    mobile: " +91-8980030090",
  },
  {
    state: "TAMILNADU",
  },
  {
    state: "TELANGANA",

  },
  {
    state: "UTTAR PRADESH",
    city: "Uttar Pradesh",
    email: "deepak.nayar@marwadieducation.edu.in",
    mobile: "+91-8827540114",
  },
  {
    state: "WEST BENGAL",
    city: "West Bengal",
    email: "saheli.dey@marwadieducation.edu.in",
    mobile: " +91-9099939586",
  },
  {
    state: "West & South",
    city: "West & South",
    mobile: " +91-8980030090",
  },

];
const Contact = () => {
  const [selectedOffice, setSelectedOffice] = useState(officesData[0]);
  return (
    <div className="contact-page">
      {/* 🔹 Background Image Section */}
      <div className="contact-banner">
        <img src={contactBg} alt="Contact Background" className="banner-image" />
        <h1 className="banner-title">CONTACT US</h1>
      </div>

      {/* 🔹 Contact Details */}
      <div className="contact-details">
        <h2 className="sectiontitle">CONTACT US</h2>

        {/* 🔹 Contact Card - Office */}
        <div className="contact-box">
          <img src={locationIcon} alt="Location Icon" className="contact-image" />
          <div className="contact-info">
            <h3 className="contact-heading">Central Administrative Office</h3>
            <p>Marwadi University</p>
            <p>Rajkot Morbi Road, Rajkot 360 003</p>
            <p>Email:</p>
            <a href="mailto:info@marwadiuniversity.ac.in">info@marwadiuniversity.ac.in</a>
            <p>Landline: (+91) 281 – 7123456</p>
          </div>
        </div>

        {/* 🔹 Contact Card - Admissions */}
        <div className="contact-box">
          <img src={studentIcon} alt="Student Section" className="contact-image" />
          <div className="contact-info">
            <h3 className="contact-heading">Admissions - Student Section</h3>
            <p>Mr. Jeet Hakar</p>
            <p>Head Student Section</p>
            <p>Landline: (+91) 281 – 712356</p>
            <p>Email:</p>
            <a href="mailto:admission.helpdesk@marwadiuniversity.ac.in">
              admission.helpdesk@marwadiuniversity.ac.in
            </a>
            <br />
            <a href="mailto:student.helpdesk@marwadiuniversity.ac.in">
              student.helpdesk@marwadiuniversity.ac.in
            </a>
          </div>
        </div>

        {/* 🔹 Outreach & Development */}
        <div className="contact-box">
          <img src={studentIcon} alt="Student Section" className="contact-image" />
          <div className="contact-info">
            <h3 className="contact-heading">Outreach & Development</h3>
            <p>Prof. Hardik Doshi</p>
            <p>Deputy Director</p>
            <p>Mobile: (+91) 8980030090</p>
            <p>Email:</p>
            <a href="mailto:hardik.doshi@marwadieducation.edu.in">
              hardik.doshi@marwadieducation.edu.in
            </a>
          </div>
        </div>

        {/* 🔹 International Admission */}
        <h2 className="section-titlessss">International Admission</h2>
        <div className="contact-box">
          <img src={nileshIcon} alt="Nilesh Advani" className="contact-image" />
          <div className="contact-info">
            {/* <h3 className="contact-heading">International Admission</h3> */}
            <h3 className="contact-headings">Dr. Nilesh Advani</h3>
            <p>Deputy Director, International Relations</p>
            <p>Mobile: +919824030232 / +919909920257</p>
            <p>Email:</p>
            <a href="mailto:international@marwadieducation.edu.in">
              international@marwadieducation.edu.in
            </a>
            <br />
            <a href="mailto:nilesh.advani@marwadieducation.edu.in">
              nilesh.advani@marwadieducation.edu.in
            </a>
          </div>
        </div>

        {/* 🔹 Faculty Members */}
        <div className="contact-box">
          <img src={priyeshIcon} alt="Priyesh Vaya" className="contact-image" />
          <div className="contact-info">
            <h3 className="contact-headings">Priyesh Vaya</h3>
            <p>Sr. Manager Outreach & Development</p>
            <p>Mobile: +91 99242 98470</p>
            <p>Email:</p>
            <a href="mailto:priyesh.vaya@marwadieducation.edu.in">
              priyesh.vaya@marwadieducation.edu.in
            </a>
          </div>
        </div>

        <div className="contact-box">
          <img src={bavarvaIcon} alt="Arjav Bavarva" className="contact-image" />
          <div className="contact-info">
            <h3 className="contact-headings">Dr. Arjav Bavarva</h3>
            <p>Associate Professor - Information & Communication Technology</p>
            <p>Mobile: +91 70166 85360</p>
            <p>Email:</p>
            <a href="mailto:arjav.bavarva@marwadieducation.edu.in">
              arjav.bavarva@marwadieducation.edu.in
            </a>
          </div>
        </div>

        <div className="contact-box">
          <img src={krunalIcon} alt="Krunal Vaghela" className="contact-image" />
          <div className="contact-info">
            <h3 className="contact-headings">Dr. Krunal Vaghela</h3>
            <p>Head of Department - Computer Engineering</p>
            <p>Mobile: +91 99793 88777</p>
            <p>Email:</p>
            <a href="mailto:krunal.vaghela@marwadieducation.edu.in">
              krunal.vaghela@marwadieducation.edu.in
            </a>
          </div>
        </div>

        <div className="contact-box">
          <img src={dhavalIcon} alt="Dhaval Anadkat" className="contact-image" />
          <div className="contact-info">
            <h3 className="contact-headings">Prof. Dhaval Anadkat</h3>
            <p>Assistant Professor - Mechanical Department</p>
            <p>Mobile: +91 95109 04455</p>
            <p>Email:</p>
            <a href="mailto:dhaval.anadkat@marwadieducation.edu.in">
              dhaval.anadkat@marwadieducation.edu.in
            </a>
          </div>
        </div>

        {/* Placement cell 1 */}
        <div className="contact-box">
          <img src={gauravIcon} alt="Gaurav Gandhi" className="contact-image" />
          <div className="contact-info">
            <h3 className="contact-heading">Placement Cell</h3>
            <p>Gaurav Gandhi, PhD</p>
            <p>Vice President - Placement Cell</p>
            <p>Mobile:  +91-96876 80240</p>
            <p>Email:</p>
            <a href="mailto:Email : gaurav.gandhi@marwadiuniversity.ac.in">
              gaurav.gandhi@marwadiuniversity.ac.in
            </a>
          </div>
        </div>

        {/* Placement cell 2 */}

        <div className="contact-box">
          <img src={vivekpatelIcon} alt="Vivek Patel" className="contact-image" />
          <div className="contact-info">
            <h3 className="contact-heading">Entrepreneurship Cell</h3>
            <p>Prof. Vivek Patel</p>
            <p>Assistant Professor</p>
            <p>Mobile:  +91 07573042213</p>
            <p>Email:</p>
            <a href="mailto:vivekg.patel@marwadieducation.edu.in">
              vivekg.patel@marwadieducation.edu.in
            </a>
          </div>
        </div>


        {/* regional-offices-container */}
        <div className="regional-offices-container">
          <h2 className="tittle">Regional Offices</h2>
          <div className="buttons-container">
            {officesData.map((office, index) => (
              <button
                key={index}
                className={`office-button ${selectedOffice.state === office.state ? "active" : ""}`}
                onClick={() => setSelectedOffice(office)}
              >
                {office.state}
              </button>
            ))}
          </div>

          <hr className="divider" />

          {/* ✅ Display office details only if they exist */}
          <div className="office-details">
            {selectedOffice.city && <h3>{selectedOffice.city}</h3>}

            {selectedOffice.address && (
              <p>
                <strong>Address:</strong> {selectedOffice.address}
              </p>
            )}

            {selectedOffice.email && (
              <p>
                <strong>Email:</strong> <a href={`mailto:${selectedOffice.email}`}>{selectedOffice.email}</a>
              </p>
            )}

            {selectedOffice.mobile && (
              <p>
                <strong>Mobile:</strong> {selectedOffice.mobile}
              </p>
            )}
          </div>
        </div>
      

        <div className="map-section">
      <h2>Find Our Address</h2>
      <h2>On Map</h2>
      <div className="map-container">
        <iframe
          title="Marwadi University Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.782!2d70.797194!3d22.367833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbf5b79c6a0d%3A0x8e1ad1b4df77a56b!2sMarwadi%20University!5e0!3m2!1sen!2sin!4v1710650000000!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: "0", borderRadius: "10px"}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <hr className="divider" />
    </div>
      </div>
    </div>
  );
};

export default Contact;
