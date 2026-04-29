import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const text = `Hello, I am ${name}%0APhone: ${phone}%0AMessage: ${message}`;

    const whatsappURL = `https://wa.me/971554884592?text=${text}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="contact">

      <h2>Contact Us</h2>

      {/* 🔥 CONTACT DETAILS */}
      <div className="contact-info">
        <p><strong>Email:</strong></p>
        <p>shamsalkanari@gmail.com</p>
        <p>shamsalkanaritech@gmail.com</p>

        <p className="space"><strong>Mobile:</strong></p>
        <p>+971 58 188 8888</p>
        <p>+971 58 188 8889</p>
      </div>

      {/* 🔥 FORM */}
      <div className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button onClick={handleSend}>
          Send Message
        </button>
      </div>

    </section>
  );
}

export default Contact;