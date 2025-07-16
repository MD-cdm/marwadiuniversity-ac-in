// import React, { useEffect, useState } from "react";
// import backgroundImage from "../assets/marwadi image.jpg"; // Apni image ka path yahan change karein

// const StatsSection = () => {
//   const statsData = [
//     { label: "Students from 54 Countries", value: 12000 },
//     { label: "Faculty members with over 120 PhD Faculties", value: 500 },
//     { label: "Companies visited for Placements", value: 450 },
//   ];

//   const [counts, setCounts] = useState(statsData.map(() => 0));

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCounts((prevCounts) =>
//         prevCounts.map((count, index) =>
//           count < statsData[index].value ? count + 10 : statsData[index].value
//         )
//       );
//     }, 20);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       className="stats-container"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <h2 className="stats-title">‘We Make Your Future Bright’</h2>
//       <div className="stats-wrapper">
//         {statsData.map((stat, index) => (
//           <div key={index} className="stat-box">
//             <h3 className="stat-number">{counts[index]}+</h3>
//             <p className="stat-label">{stat.label}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StatsSection;











import React, { useEffect, useState, useMemo } from "react";
import backgroundImage from "../assets/marwadi image.jpg"; // Apni image ka path yahan change karein

const StatsSection = () => {
  // ✅ useMemo se ensure kiya ki statsData ka reference same rahe
  const statsData = useMemo(
    () => [
      { label: "Students from 54 Countries", value: 12000 },
      { label: "Faculty members with over 120 PhD Faculties", value: 500 },
      { label: "Companies visited for Placements", value: 450 },
    ],
    []
  );

  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) =>
          count < statsData[index].value ? count + 10 : statsData[index].value
        )
      );
    }, 20);

    return () => clearInterval(interval);
  }, [statsData]); // ⚡ `statsData` ab change nahi hoga, warning gayab ho jayegi ✅

  return (
    <div
      className="stats-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h2 className="stats-title">‘We Make Your Future Bright’</h2>
      <div className="stats-wrapper">
        {statsData.map((stat, index) => (
          <div key={index} className="stat-box">
            <h3 className="stat-number">{counts[index]}+</h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
