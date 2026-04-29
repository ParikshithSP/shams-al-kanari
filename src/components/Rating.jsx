import { useState, useEffect } from "react";
import "./Rating.css";

const ratingsList = [1, 2, 3, 4, 5];

function Rating({ setAverage }) {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("ratings") || "[]");
    setRatings(stored);
    calculateAverage(stored);
  }, []);

  const calculateAverage = (data) => {
    if (data.length === 0) return setAverage(0);

    const avg =
      data.reduce((a, b) => a + b, 0) / data.length;

    setAverage(avg.toFixed(1)); // decimal
  };

  const handleRating = (value) => {
    const updated = [...ratings, value];

    setRatings(updated);
    localStorage.setItem("ratings", JSON.stringify(updated));

    calculateAverage(updated);

    // 🔥 SCROLL BACK TO HOME AFTER RATING
    setTimeout(() => {
      document.getElementById("home").scrollIntoView({
        behavior: "smooth",
      });
    }, 300);
  };

  return (
    <section id="rating" className="rating-section">
      <h2>Rate Us</h2>

      <div className="rating-options">
        {ratingsList.map((val) => (
          <button key={val} onClick={() => handleRating(val)}>
            {val} ⭐
          </button>
        ))}
      </div>

      <p className="rating-count">
        Total Ratings: {ratings.length}
      </p>
    </section>
  );
}

export default Rating;