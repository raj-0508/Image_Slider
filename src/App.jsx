import React, { useRef } from "react";
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.jpeg";
import img4 from "./assets/img4.jpeg";
import img5 from "./assets/img5.jpeg";
import img6 from "./assets/img6.jpeg";

function App() {
  const slider = useRef();
  const imageRef = useRef();

  const next = () => {
    if (imageRef.current) {
      const imageWidth = imageRef.current.clientWidth + 16;
      slider.current.scrollLeft += imageWidth;
    }
  };

  const prev = () => {
    if (imageRef.current) {
      const imageWidth = imageRef.current.clientWidth + 16;
      slider.current.scrollLeft -= imageWidth;
    }
  };

  return (
    <>
      <h1 className="text-4xl text-center">Imgae Slider</h1>

      <div className="flex justify-center items-center my-4">
        <div className="flex gap-6">
          <button
            onClick={prev}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
          >
            Previous
          </button>
          <button
            onClick={next}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
          >
            Next
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div
          ref={slider}
          className="flex justify-start gap-4 overflow-x-auto px-4 w-full max-w-screen-lg mx-auto"
        >
          <img
            ref={imageRef}
            src={img1}
            alt="img1"
            className="w-[80vw] flex-shrink-0"
          />
          <img src={img2} alt="img2" className="w-[80vw] flex-shrink-0" />
          <img src={img3} alt="img3" className="w-[80vw] flex-shrink-0" />
          <img src={img4} alt="img4" className="w-[80vw] flex-shrink-0" />
          <img src={img5} alt="img5" className="w-[80vw] flex-shrink-0" />
          <img src={img6} alt="img6" className="w-[80vw] flex-shrink-0" />
        </div>
      </div>
    </>
  );
}

export default App;
