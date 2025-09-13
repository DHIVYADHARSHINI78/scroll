
import React, { useState } from "react";
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';

const images = [img1, img2, img3, img4, img5];

const App = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const previous = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const getIndex = (offset) => {
    return (current + offset + images.length) % images.length;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fdf9f6] px-4 sm:px-6 md:px-12">
      <div className="relative w-full max-w-7xl flex items-center justify-center">
      
        <button
          onClick={previous}
          className="absolute left-0 sm:left-2 z-10 bg-white p-3 rounded-full shadow hover:bg-gray-100 cursor-pointer"
        >
          ◀️
        </button>

   
        <div className="flex items-center justify-center overflow-visible w-full px-4 md:px-8 space-x-4 md:space-x-6">
          {[ -2, -1, 0, 1, 2 ].map((offset) => {
            const index = getIndex(offset);
            let styleClass = "flex-shrink-0 rounded-lg transition-all duration-500";

            if (offset === 0) {
              styleClass += " w-52 sm:w-64 md:w-80 lg:w-96 opacity-100 scale-110 z-20";
            } else if (Math.abs(offset) === 1) {
              styleClass += " w-40 sm:w-48 md:w-56 lg:w-72 opacity-80 scale-95 z-10";
            } else if (Math.abs(offset) === 2) {
              styleClass += " w-32 sm:w-36 md:w-44 lg:w-52 opacity-60 scale-90 z-0";
            }

            return <img key={index} src={images[index]} alt={`slide-${index}`} className={styleClass} />;
          })}
        </div>

        <button
          onClick={next}
          className="absolute right-0 sm:right-2 z-10 bg-white p-3 rounded-full shadow hover:bg-gray-100 cursor-pointer"
        >
          ▶️
        </button>
      </div>

     
      <div className="flex space-x-2 mt-6">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full ${index === current ? "bg-gray-800" : "bg-gray-400"}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default App;
