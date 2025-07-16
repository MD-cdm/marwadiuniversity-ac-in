import React from 'react';
import certificate from '../assets/Library/Other Facilities/gwr-certi.jpg';
import logo from '../assets/Library/Other Facilities/guinness-rcrd.jpg';
import facebook from '../assets/Library/Other Facilities/fb-event.jpg';
// import youtube from '../assets/guinness/youtube-thumbnail.jpg';

const GuinnessSection = () => {
  return (
    <div class="guinness-section">
    <h2>Guinness World Records</h2>
    <h1>Unique Reading Relay World Record</h1>
    <div class="guinness-content">
      <div class="certificate">
        <img src={certificate} alt="Certificate" />
      </div>
      <div class="details">
        <h3>Marwadi University Library becomes the <span>FIRST EVER LIBRARY</span> to have <span>GUINNESS WORLD RECORD</span></h3>
        {/* <p>
          <strong>Library of Marwadi Education Foundation’s Group of Institutions, Rajkot</strong> 
          <h3>Library of Marwadi Education Foundation’s Group of Institutions, Rajkot has recently got place in Guinness World Record after successful completion of record attempt for relay reading which was executed under the title
             <strong>“Most People participating in a Reading Relay - Single Work.” “Gandhiji’s Autobiography: My experiments with Truth”.</strong>
              3071 students and staff participated and read the aforesaid autobiography in relay successfully. The record attempt started at 8:00 am on 22nd September, 2015 and lasted till 6:30 pm. Guinness World Record authority has recently approved the record and declared MEFGI Library as Guinness World Record Holder. More details are available on official website of Guinness World Record.</h3>
        </p> */}

        <p>
        <strong>Library of Marwadi Education Foundation’s Group of Institutions, Rajkot</strong> has recently got place in Guinness World Record after successful completion of record attempt for relay reading which was executed under the title<strong>“Most People participating in a Reading Relay - Single Work.” “Gandhiji’s Autobiography: My experiments with Truth”.</strong>  3071 students and staff participated and read the aforesaid autobiography in relay successfully. The record attempt started at 8:00 am on 22nd September, 2015 and lasted till 6:30 pm. Guinness World Record authority has recently approved the record and declared MEFGI Library as Guinness World Record Holder. More details are available on official website of Guinness World Record.
        </p>
        <div class="links">
          <div>
            <img src={ logo} alt="GWR Logo" />
            <p>Guinness World Record Official Page</p>
          </div>

        

          <div>
            <img src={facebook } alt="Facebook" />
            <p>Facebook Event Page</p>
          </div>


          
         
{/* 
<div
  className="ytp-cued-thumbnail-overlay-image"
  style={{ backgroundImage: "url('https://i.ytimg.com/vi/dsfXD57Hjek/sddefault.jpg?sqp=-oaymwEMCIAFEOADSquKqQMa8AEB-AH-CYACOAWKARWIABABGEIgSyh1MA8-&rs=AOn4CLB-kzS7CCuCjwDrBwhfNq-CW73geQ')" }}
>
   </div> */}


        </div>
      </div>
    </div>
  </div>
  
    
  );
};

export default GuinnessSection;
