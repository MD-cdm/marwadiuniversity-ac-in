// import React from "react";

// const Admissions = () => {
//   return (
//     <section id="admissions">
//       <h2>Admissions</h2>
//       <p>Find out about our admission process and requirements.</p>
//     </section>
//   );
// };

// export default Admissions;




// AdmissionForm.jsx
import React, { useState } from 'react';

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    country: '',
    state: '',
    institute: '',
    ugpg: '',
    course: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Admission Form Submitted Successfully!");
  };

  return (
    <div className="admission-container">
      <div className="admission-form-box">
        <h2 className="admission-title">🎓 Admission Open</h2>
        <form onSubmit={handleSubmit} className="admission-form">
          <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input name="country" type="text" placeholder="Country" value={formData.country} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input name="mobile" type="text" placeholder="Mobile No" value={formData.mobile} onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <input name="state" type="text" placeholder="State" value={formData.state} onChange={handleChange} required />
          <input name="institute" type="text" placeholder="Institute" value={formData.institute} onChange={handleChange} required />
          <input name="ugpg" type="text" placeholder="UG/PG" value={formData.ugpg} onChange={handleChange} required />
          <input name="course" type="text" placeholder="Course" value={formData.course} onChange={handleChange} required />

          <div className="checkbox-container">
            <input type="checkbox" required />
            <p className="checkbox-text">
              I agree to receive communication from the university via Email, SMS, Calls, WhatsApp, etc.
            </p>
          </div>

          <button type="submit" className="submit-button">REGISTER</button>
        </form>
      </div>
    </div>
  );
}

