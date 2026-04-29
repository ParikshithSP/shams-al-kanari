import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Rating from "./components/Rating";

function App() {
  const [avgRating, setAvgRating] = useState(0);

  return (
    <>
      <Navbar />
      <Home avgRating={avgRating} />
      <Services />
      <Rating setAverage={setAvgRating} />
      <Contact />
    </>
  );
}

export default App;