import "./Home.css";
import logo from "../assets/logo.jpeg";
import { useState } from "react";
import { Camera } from "lucide-react";

import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.jpg";
import work3 from "../assets/work3.jpg";

function Home({ avgRating }) {

  const [showGallery, setShowGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // 🔥 NEW CLIENT POPUP STATE
  const [showClients, setShowClients] = useState(false);

  // 🔥 WORK IMAGES
  const images = [
    {
      src: work1,
      text: "Leak-free plumbing installation with precise pipe alignment, strong fittings, and proper water flow testing to ensure long-term durability and zero maintenance issues."
    },
    {
      src: work2,
      text: "Safe and professional electrical servicing including wiring checks, fault detection, and load balancing using proper tools to ensure reliable and hazard-free performance."
    },
    {
      src: work3,
      text: "Smooth wall finishing with proper surface preparation, high-quality paint application, and clean detailing for a long-lasting, elegant, and modern appearance."
    }
  ];

  // 🔥 CLIENT DATA (AUTO 110)
  const servicesList = [
    "Plumbing",
    "Electrical Maintenance",
    "Painting",
    "AC Installation",
    "Carpentry",
    "False Ceiling",
    "Tiling",
    "Decoration Design"
  ];

  const companies = [
    "Al Noor Trading LLC",
    "Desert Star Builders",
    "Golden Falcon Group",
    "Emirates Technical Works",
    "Al Safa Interiors",
    "Dubai Prime Services",
    "Blue Sand Contracting",
    "Skyline Maintenance",
    "Arabian Gulf Projects",
    "Elite Fixing Solutions"
  ];

  const people = [
    "Ahmed Al Mansoori",
    "Mohammed Al Falasi",
    "Omar Al Suwaidi",
    "Yousef Al Nuaimi",
    "Khalid Al Mazrouei",
    "Fatima Al Hashmi",
    "Aisha Al Kaabi",
    "Noor Al Marri",
    "Salim Al Hammadi",
    "Hassan Al Dhaheri"
  ];

  const clientsData = Array.from({ length: 110 }, (_, i) => {
    const isCompany = i % 2 === 0;

    return {
      name: isCompany
        ? companies[i % companies.length] + " " + (i + 1)
        : people[i % people.length],
      service: servicesList[i % servicesList.length]
    };
  });

  return (
    <section id="home" className="home">
      <div className="hero-content">

        <img src={logo} alt="logo" className="hero-logo" />

        <h1>
          Shams Al Kanari <br />
          <span>Technical Services LLC</span>
        </h1>

        <p>
          Reliable technical and maintenance services across Dubai.
          Delivering quality, precision, and trust.
        </p>

        <div className="hero-buttons">
          <button
            onClick={() =>
              document.getElementById("services").scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Our Services
          </button>

          <button
            className="secondary"
            onClick={() =>
              document.getElementById("contact").scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Contact Us
          </button>
        </div>

        {/* STATS */}
        <div className="stats">

          {/* SERVICES */}
          <div
            className="stat"
            onClick={() =>
              document.getElementById("services").scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            <h2>10+</h2>
            <p>Services</p>
          </div>

          {/* 🔥 CLIENTS CLICKABLE */}
          <div
            className="stat clickable"
            onClick={() => setShowClients(true)}
          >
            <h2>100+</h2>
            <p>Clients</p>
          </div>

          {/* OUR WORK */}
          <div
            className="stat clickable"
            onClick={() => setShowGallery(true)}
          >
            <h2 className="icon-stat">
              <Camera size={28} />
            </h2>
            <p>Our Work</p>
          </div>

          {/* RATING */}
          <div
            className="stat"
            style={{ cursor: "pointer" }}
            onClick={() =>
              document.getElementById("rating").scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            <h2 className="rating-value">
              {avgRating || "0.0"} <span>⭐</span>
            </h2>
            <p>Rating</p>
          </div>

        </div>
      </div>

      {/* 🔥 CLIENT POPUP */}
      {showClients && (
        <div className="gallery-overlay">
          <div className="clients-box">

            <button
              className="close-btn"
              onClick={() => setShowClients(false)}
            >
              ✖
            </button>

            <h2>Our Clients</h2>

            <div className="clients-table">
              <div className="table-header">
                <span>Client Name</span>
                <span>Service Taken</span>
              </div>

              {clientsData.map((client, index) => (
                <div key={index} className="table-row">
                  <span>{client.name}</span>
                  <span>{client.service}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

      {/* 🔥 WORK POPUP */}
      {showGallery && (
        <div className="gallery-overlay">
          <div className="gallery-box">

            <button
              className="close-btn"
              onClick={() => setShowGallery(false)}
            >
              ✖
            </button>

            <h2>Our Work</h2>

            <div className="work-timeline">
              {images.map((item, index) => (
                <div
                  key={index}
                  className={`work-item ${index % 2 === 0 ? "left" : "right"}`}
                >
                  <img
                    src={item.src}
                    alt="work"
                    onClick={() => setSelectedImage(index)}
                  />
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

      {/* IMAGE PREVIEW */}
      {selectedImage !== null && (
        <div className="image-preview">

          <button
            className="close-preview"
            onClick={() => setSelectedImage(null)}
          >
            ✖
          </button>

          <button
            className="prev-btn"
            onClick={() =>
              setSelectedImage(
                (selectedImage - 1 + images.length) % images.length
              )
            }
          >
            ‹
          </button>

          <img src={images[selectedImage].src} alt="preview" />

          <button
            className="next-btn"
            onClick={() =>
              setSelectedImage(
                (selectedImage + 1) % images.length
              )
            }
          >
            ›
          </button>

          {/* 🔥 DESCRIPTION BELOW IMAGE */}
          <p className="preview-text">
            {images[selectedImage].text}
          </p>

        </div>
      )}

      <a
        href="https://wa.me/971554884592"  // 🔥 replace with your WhatsApp number
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
           src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
           alt="whatsapp"
        />
      </a>

    </section>
  );
}

export default Home;