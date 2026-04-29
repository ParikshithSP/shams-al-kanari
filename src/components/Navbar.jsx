import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.jpeg";

function Navbar() {
  const [active, setActive] = useState("home");

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "rating", "contact"];

      let currentSection = "home";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        // 🔥 CENTER DETECTION (best for accuracy)
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
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
            className={active === "rating" ? "active" : ""}
            onClick={() => scrollTo("rating")}
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