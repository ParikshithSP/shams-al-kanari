import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.jpeg";

function Navbar() {
  const [active, setActive] = useState("home");

  // ✅ Smooth scroll with offset fix
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const yOffset = -120; // navbar height fix
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    // ✅ instantly highlight clicked tab
    setActive(id);
  };

  // ✅ Scroll detection FIXED (stable method)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "rate-us", "contact"];

      let currentSection = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const sectionTop = section.offsetTop - 140; // adjust for navbar
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
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