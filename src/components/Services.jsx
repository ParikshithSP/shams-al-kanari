import "./Services.css";
import { useEffect, useState } from "react";

const services = [
  "Floor & Wall Tiling Works",
  "False Ceiling & Partitions",
  "Air Conditioning & Ventilation",
  "Plaster Works",
  "Carpentry & Wood Flooring",
  "Electrical Maintenance",
  "Painting Contracting",
  "Decoration Design",
  "Plumbing & Sanitary",
  "Electromechanical Installation"
];

function Services() {
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("services");

      if (!section) return;

      const scrollTop = window.scrollY;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      // ✅ simple smooth progress
      const p =
        (scrollTop - sectionTop + window.innerHeight / 2) /
        sectionHeight;

      const clamped = Math.max(0, Math.min(p, 1));
      setProgress(clamped);

      // ✅ simple step highlight
      const index = Math.floor(clamped * services.length);
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>

      <div className="timeline">

        {/* 🔵 LINE */}
        <div
          className="timeline-progress"
          style={{ height: `${progress * 100}%` }}
        ></div>

        {services.map((service, index) => (
          <div
            key={index}
            className={`container ${index % 2 === 0 ? "left" : "right"}`}
          >
            {/* 🔵 DOT */}
            <div className={`dot ${index <= activeIndex ? "active" : ""}`} />

            {/* 🔵 BOX */}
            <div className={`content ${index <= activeIndex ? "active" : ""}`}>
              <h3>{service}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;