// import React from "react";

// const Gallery = () => {
//   return (
//     <section id="Gallery">
//       <h2>Gallery Show</h2>
//       <p>Our best Campus imagegs.</p>
//     </section>
//   );
// };

// export default Gallery;














// import React, { useState } from "react";
// import bgImage from "../assets/marwadi image.jpg"; // Background image

// // Image Data
// const galleryData = [
//   { id: 1, category: "EVENTS", src: require("../assets/Events1.jpg") },
//   { id: 2, category: "EVENTS", src: require("../assets/Events2.jpg") },
//   { id: 3, category: "CAMPUS LIFE", src: require("../assets/campus1.jpg") },
//   { id: 4, category: "CAMPUS LIFE", src: require("../assets/campus2.jpg") },
//   { id: 5, category: "MOVIE PROMOTE", src: require("../assets/movie1.jpg") },
//   { id: 6, category: "MOVIE PROMOTE", src: require("../assets/movie2.jpg") },
//   { id: 7, category: "OTHERS", src: require("../assets/other.png") },
// ];

// const Gallery = () => {
//   const [category, setCategory] = useState("EVENTS");

//   const filteredImages = galleryData.filter((item) => item.category === category);

//   return (
//     <section id="gallery" className="relative min-h-screen text-center text-white">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img src={bgImage} alt="Gallery Background" className="w-full h-full object-cover brightness-75" />
//       </div>
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       {/* Content */}
//       <div className="relative z-10 py-16 px-6">
//         <h2 className="text-5xl font-extrabold mb-8 text-white drop-shadow-lg">PHOTO GALLERY</h2>

//         {/* Category Buttons */}
//         <div className="flex justify-center space-x-4 mb-8">
//           {["EVENTS", "CAMPUS LIFE", "MOVIE PROMOTE", "OTHERS"].map((cat) => (
//             <button
//               key={cat}
//               className={`px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 
//               ${category === cat ? "bg-blue-600 text-white shadow-lg" : "bg-white text-black hover:bg-blue-500 hover:text-white"}`}
//               onClick={() => setCategory(cat)}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Image Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {filteredImages.length > 0 ? (
//             filteredImages.map((img) => (
//               <div key={img.id} className="group relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
//                 <img src={img.src} alt="Gallery Item" className="w-full h-60 object-cover" />
//                 <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <p className="text-lg font-semibold text-white">View More</p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-xl font-semibold">No images available.</p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;








// import React, { useState } from "react";
// import bgImage from "../assets/marwadi image.jpg"; // Background image

// // Image Data
// const galleryData = [
//   { id: 1, category: "EVENTS", src: require("../assets/Events1.jpg") },
//   { id: 2, category: "EVENTS", src: require("../assets/Events2.jpg") },
//   { id: 3, category: "CAMPUS LIFE", src: require("../assets/campus1.jpg") },
//   { id: 4, category: "CAMPUS LIFE", src: require("../assets/campus2.jpg") },
//   { id: 5, category: "MOVIE PROMOTE", src: require("../assets/movie1.jpg") },
//   { id: 6, category: "MOVIE PROMOTE", src: require("../assets/movie2.jpg") },
//   { id: 7, category: "OTHERS", src: require("../assets/other.png") },
// ];

// const Gallery = () => {
//   const [category, setCategory] = useState("EVENTS");

//   const filteredImages = galleryData.filter((item) => item.category === category);

//   return (
//     <section id="gallery" className="relative min-h-screen flex flex-col items-center text-center text-white">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img src={bgImage} alt="Gallery Background" className="w-full h-full object-cover brightness-50" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 py-16 px-6 w-full max-w-7xl">
//         <h2 className="text-5xl font-extrabold mb-10 text-white drop-shadow-lg">PHOTO GALLERY</h2>

//         {/* Category Buttons */}
//         <div className="flex flex-wrap justify-center gap-4 mb-8">
//           {["EVENTS", "CAMPUS LIFE", "MOVIE PROMOTE", "OTHERS"].map((cat) => (
//             <button
//               key={cat}
//               className={`px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 shadow-md
//               ${
//                 category === cat
//                   ? "bg-blue-600 text-white shadow-lg scale-105"
//                   : "bg-white text-black hover:bg-blue-500 hover:text-white"
//               }`}
//               onClick={() => setCategory(cat)}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Image Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {filteredImages.length > 0 ? (
//             filteredImages.map((img) => (
//               <div
//                 key={img.id}
//                 className="group relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
//               >
//                 <img src={img.src} alt="Gallery Item" className="w-full h-64 object-cover" />
//                 <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <p className="text-lg font-semibold text-white">View More</p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-xl font-semibold">No images available.</p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;





import React, { useState } from "react";
import bgImage from "../assets/marwadi image.jpg";


// Image Data
const galleryData = [
  { id: 1, category: "EVENTS", src: require("../assets/Events1.jpg") },
  { id: 2, category: "EVENTS", src: require("../assets/Events2.jpg") },
  { id: 3, category: "EVENTS", src: require("../assets/Events3.jpg") },

  { id: 4, category: "CAMPUS LIFE", src: require("../assets/campus1.jpg") },
  { id: 5, category: "CAMPUS LIFE", src: require("../assets/campus2.jpg") },
  { id: 6, category: "CAMPUS LIFE", src: require("../assets/campus3.jpg") },
  { id: 7, category: "CAMPUS LIFE", src: require("../assets/campus4.jpg") },

  { id: 8, category: "MOVIE PROMOTE", src: require("../assets/movie1.jpg") },
  { id: 9, category: "MOVIE PROMOTE", src: require("../assets/movie2.jpg") },
  { id: 10, category: "MOVIE PROMOTE", src: require("../assets/movie3.jpg") },
  { id: 11, category: "MOVIE PROMOTE", src: require("../assets/movie4.jpg") },
  { id: 12, category: "MOVIE PROMOTE", src: require("../assets/movie5.jpg") },

  { id: 13, category: "SPORTS", src: require("../assets/other1.jpg") },
  { id: 14, category: "SPORTS", src: require("../assets/other2.png") },
  { id: 15, category: "SPORTS", src: require("../assets/other3.jpg") },
  { id: 16, category: "SPORTS", src: require("../assets/other.png") },
  { id: 17, category: "SPORTS", src: require("../assets/other4.png") },

  { id: 18, category: "OTHERS", src: require("../assets/other4.png") },
];

const Gallery = () => {
  const [category, setCategory] = useState("EVENTS");
  const filteredImages = galleryData.filter((item) => item.category === category);

  return (
    <section id="gallery" className="gallery-section">
      {/* Background Image */}
      <div className="gallery-bg">
        <img src={bgImage} alt="Gallery Background" className="bg-image" />
      </div>

      {/* Content */}
      <div className="gallery-content">
        <h2 className="gallery-title">PHOTO GALLERY</h2>

        {/* Category Buttons */}
        <div className="gallery-buttons">
          {["EVENTS", "CAMPUS LIFE", "MOVIE PROMOTE","SPORTS","OTHERS"].map((cat) => (
            <button
              key={cat}
              className={`gallery-btn ${category === cat ? "active" : ""}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="gallery-grid">
          {filteredImages.length > 0 ? (
            filteredImages.map((img) => (
              <div key={img.id} className="gallery-item">
                <img src={img.src} alt="Gallery Item" className="gallery-img" />
                <div className="overlay">
                 
                </div>
              </div>
            ))
          ) : (
            <p className="no-images">No images available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

