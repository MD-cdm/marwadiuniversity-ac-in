




// import React, { useState } from 'react';
// import img1 from '../assets/Library/Library2/lib-1.jpg';
// import img2 from '../assets/Library/Library2/lib-2.jpg';
// import img3 from '../assets/Library/Library2/lib-3.jpg';
// import img4 from '../assets/Library/Library2/lib-4.jpg';
// import img5 from '../assets/Library/Library2/lib-5.jpg';
// import img6 from '../assets/Library/Library2/lib-6.jpg';
// import img7 from '../assets/Library/Library2/lib-7.jpg';
// import img9 from '../assets/Library/Library2/lib-9.jpg';
// import img10 from '../assets/Library/Library2/lib-10.jpg';
// import img11 from '../assets/Library/Library2/lib-11.jpg';
// import img12 from "../assets/Library/Library2/lib-12.jpg"


// const images = [img1, img2, img3, img4, img5, img6, img7, img9, img10, img11, img12];

// const getRandomTransform = () => {
//   const rotate = Math.floor(Math.random() * 40 - 20); // -20deg to +20deg
//   const translateX = Math.floor(Math.random() * 1200 - 800); // Spread in X
//   const translateY = Math.floor(Math.random() * 300 - 150); // Limit Y to avoid overlapping dots
//   return `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`;
// };



// const PhotoStackGallery = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   return (
//     <div className="photostack-gallery">
//       <div className="photostack-images">
//         {images.map((img, index) => (
//           <figure
//             key={index}
//             className={`photostack-item ${index === currentIndex ? 'active' : ''}`}
//             style={index === currentIndex ? {} : { transform: getRandomTransform() }}
//           >
//             <img src={img} alt={`Gallery ${index + 1}`} />
//           </figure>
//         ))}
//       </div>
//       <div className="photostack-dots">
//         {images.map((_, i) => (
//           <span
//             key={i}
//             className={i === currentIndex ? 'dot active' : 'dot'}
//             onClick={() => setCurrentIndex(i)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PhotoStackGallery;






import React, { useState } from 'react';
import img1 from '../assets/Library/Library2/lib-1.jpg';
import img2 from '../assets/Library/Library2/lib-2.jpg';
import img3 from '../assets/Library/Library2/lib-3.jpg';
import img4 from '../assets/Library/Library2/lib-4.jpg';
import img5 from '../assets/Library/Library2/lib-5.jpg';
import img6 from '../assets/Library/Library2/lib-6.jpg';
import img7 from '../assets/Library/Library2/lib-7.jpg';
import img9 from '../assets/Library/Library2/lib-9.jpg';
import img10 from '../assets/Library/Library2/lib-10.jpg';
import img11 from '../assets/Library/Library2/lib-11.jpg';
import img12 from "../assets/Library/Library2/lib-12.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img9, img10, img11, img12];

const getRandomTransform = () => {
  const rotate = Math.floor(Math.random() * 40 - 20);
  const translateX = Math.floor(Math.random() * 1200 - 800);
  const translateY = Math.floor(Math.random() * 300 - 150);
  return `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`;
};

const PhotoStackGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div className="photostack-wrapper">
      {!showGallery && (
        <>
          <div className="photostack-preview">
            {images.map((img, index) => (
              <figure
                key={index}
                className="preview-image"
                style={{ transform: getRandomTransform() }}
              >
                <img src={img} alt={`Preview ${index}`} />
              </figure>
            ))}
          </div>
          <div className="photostack-button">
            <button onClick={() => setShowGallery(true)}>
              <span role="img" aria-label="gallery">🖼️</span> VIEW PHOTO GALLERY
            </button>
          </div>
        </>
      )}

      {showGallery && (
        <div className="photostack-gallery">
          <div className="photostack-images">
            {images.map((img, index) => (
              <figure
                key={index}
                className={`photostack-item ${index === currentIndex ? 'active' : ''}`}
                style={index === currentIndex ? {} : { transform: getRandomTransform() }}
              >
                <img src={img} alt={`Gallery ${index + 1}`} />
              </figure>
            ))}
          </div>
          <div className="photostack-dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={i === currentIndex ? 'dot active' : 'dot'}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoStackGallery;
