import React, { useEffect } from "react";
import gsap from "gsap";

const Loader = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from("#loader h3", {
      x: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
    })
      .to("#loader h3", { opacity: 0, x: -20, duration: 1, stagger: 0.1 })
      .to("#loader", { opacity: 0 })
      .to("#loader", { display: "none" });
  }, []);

  return (
    <div id="loader">
      <h3>👨🏻‍💻Welcome</h3>
      <h3>To</h3>
      <h3>Marwadi</h3>
      <h3>University (Rajkot)🤝👨🏻‍💻</h3>
    </div>
  );
};

export default Loader;
