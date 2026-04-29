import "./Whatsapp.css";

function Whatsapp() {
  const phoneNumber = "971554884592"; // correct format

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp"
    >
      💬
    </a>
  );
}

export default Whatsapp;