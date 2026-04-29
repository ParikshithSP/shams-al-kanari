import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.jpeg";

function Navbar() {
  const [active, setActive] = useState("home");

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const yOffset = -100; // adjust based on navbar height
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    // 🔥 Force active immediately (important)
    setActive(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "rate-us", "contact"];

      let currentSection = "home";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        // 🔥 CENTER DETECTION (best for accuracy)
        if (
          rect.top <= 150 &&
          rect.bottom >= 150
        ) {
          currentSection = id;
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    // run once on load
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="nav-container">
      <div className="nav-pill">

        {/* Logo + Name */}
        <div className="logo-box">
          <img src={logo} alt="logo" />
          <span className="company-name">Shams Al Kanari</span>
        </div>

        {/* Nav Links */}
        <div className="nav-links">

          <span
            className={active === "home" ? "active" : ""}
            onClick={() => scrollTo("home")}
          >
            Home
          </span>

          <span
            className={active === "services" ? "active" : ""}
            onClick={() => scrollTo("services")}
          >
            Services
          </span>

          <span
            className={active === "rate-us" ? "active" : ""}
            onClick={() => scrollTo("rate-us")}
          >
            Rate Us
          </span>

          <span
            className={active === "contact" ? "active" : ""}
            onClick={() => scrollTo("contact")}
          >
            Contact
          </span>

        </div>
      </div>
    </div>
  );
}

export default Navbar;