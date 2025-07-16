import React from "react";


const videos = [
  { title: "Paying Tribute to Shri Ram Pran Pratistha Utsav", url: "https://www.youtube.com/embed/XoBusr8KXAc" },
  { title: "7th Convocation - Your Day of Achieving Excellence, Relived", url: "https://www.youtube.com/embed/JhO5S6IYPu0?si=I5ErAh0yRkrZ9zkt" },
  { title: "Glimpses to the Energetic Garbotsav 2023 at MU", url: "https://www.youtube.com/embed/znr81Fk14X0?si=G4PFkrcI9LNc13ZO" },
  { title: "MU Cha Raja, Ganpati Alla 2023", url: "https://www.youtube.com/embed/e0YI4kvnyOE?si=1O4SdKLdIxVMs1nT" },
  { title: "MU’s tribute to Gujarat’s 63rd Foundation Day", url: "https://www.youtube.com/embed/Wm9t9LBPJ2I?si=SCGrauTI6b10ebT9" },
  { title: "MU Students literally ‘Jhoome’d on the tunes of Vishal-Sheykhar", url: "https://www.youtube.com/embed/eJvJRKC0qj0?si=VKZyzlN77SZKIl7b" },
  { title: "Women’s Week Celebrations at MU", url: "https://www.youtube.com/embed/kw1QZcUQFXE?si=tQWMyotD3wQPQjWg" },
  { title: "Spreading the thought of Gandhi through MU’s International Students", url: "https://www.youtube.com/embed/zxelzXLiJTY?si=QESEiSxHeMvd3HG7" },
  { title: "Independence Day at MU!", url: "https://www.youtube.com/embed/GNjBFIjpar4?si=j06VlqsFEuDzkksD" },
  { title: "Armaan Malik - Live @ MU FEST 2018", url: "https://www.youtube.com/embed/GruSDchCaT8?si=WuNyGy_gXDWk6zr_" },
  { title: "Sachin Jigar live Concert at Marwadi University", url: "https://www.youtube.com/embed/XlmjFxhemcE?si=vV-rmZX7gLYf1OIg" },
  { title: "CONVOCATION ‘24", url: "https://www.youtube.com/embed/lD46LtoibEs?si=ZQG1VXE3cSkjGj1q" },
  { title: "Marwadi University -2nd Convocation", url: "https://www.youtube.com/embed/SxzKgKnIvWc?si=SWCWfapqZQ4X5-Za" },
  { title: "YOGA DAY CELEBRATION AT MU!", url: "https://www.youtube.com/embed/99VwQBgUrgQ?si=3mL3Yvu5lIK-PnBZ" },
  { title: "The Importance of Sports Transcends", url: "https://www.youtube.com/embed/napRSrEBMzg?si=Jt7-CmEvpk44RkO4" },
];

const CampusLife = () => {
  return (
    <div className="campus-life">
      <h2 className="campus-title">CAMPUS LIFE</h2>
      <div class="under"></div>
      <div className="video-grid">
        {videos.map((video, index) => (
          <div className="video-card" key={index}>
            <iframe 
              src={video.url} 
              title={video.title} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen

              
            ></iframe>
            <p className="video-title">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampusLife;
