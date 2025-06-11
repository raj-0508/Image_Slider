import React, { useEffect, useState, useRef } from "react";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import img6 from "./assets/img6.jpg";
import img7 from "./assets/img7.jpg";
import img8 from "./assets/img8.jpg";
import img9 from "./assets/img9.jpg";

const img = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);
  const [hover, setHover] = useState(false);

  const next = () => {
    setCurrentIndex((prev) => (prev === img.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? img.length - 1 : prev - 1));
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!hover) {
        setCurrentIndex((prev) => (prev === img.length - 1 ? 0 : prev + 1));
      }
    }, 2000);

    return () => clearInterval(timerRef.current);
  }, [currentIndex, hover]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <h1 className="text-5xl text-center mb-6 text-cyan-700">
          Image Slider
        </h1>
        <div className="border-8 p-3 border-blue-600 rounded-2xl border-r-cyan-600 border-b-cyan-600">
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="relative h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg shadow-lg"
          >
            {img.map((image, index) => (
              <img
                key={index}
                src={image}
                alt=""
                className={`absolute top-0 left-0 w-full h-full object-cover  ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          <div className="flex justify-between mt-3 px-4">
            <button
              onClick={prev}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              Previous
            </button>
            <button
              onClick={next}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
