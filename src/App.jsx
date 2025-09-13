

import React, { useState } from "react";

const images = [
  "https://picsum.photos/id/1011/600/400",
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1021/600/400",
  "https://picsum.photos/id/1025/600/400",
  "https://picsum.photos/id/1035/600/400",
];

const App = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const previous = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fdf9f6] overflow-hidden">
      <div className="relative flex items-center justify-center w-full max-w-5xl">
 
        <button
          onClick={previous}
          className="absolute left-2 md:left-6 z-10 bg-white p-3 rounded-full shadow hover:bg-gray-100 cursor-pointer"
        >
          ◀️
        </button>

        <div className="flex items-center justify-center space-x-4 md:space-x-8 overflow-hidden">
          {images.map((img, index) => {
            const diff = (index - current + images.length) % images.length;

            let styleClass = "hidden";
            if (diff === 0) {
              styleClass =
                "w-40 md:w-60 lg:w-72 transform -rotate-12 opacity-80 scale-105 hover:scale-110 transition-all duration-500";
            } else if (diff === 1) {
              styleClass =
                "w-52 md:w-72 lg:w-96 shadow-lg transform scale-95 hover:scale-100 transition-all duration-500";
            } else if (diff === 2) {
              styleClass =
                "w-40 md:w-60 lg:w-72 transform rotate-12 opacity-80 scale-95 transition-all duration-500";
            } else if (diff === images.length - 1) {
              styleClass =
                "w-28 md:w-44 lg:w-56 transform -rotate-12 opacity-50 scale-90 transition-all duration-500";
            } else if (diff === 3) {
              styleClass =
                "w-28 md:w-44 lg:w-56 transform rotate-12 opacity-50 scale-90 transition-all duration-500";
            }

            return (
              <img
                key={index}
                src={img}
                alt={`slide-${index}`}
                className={`${styleClass} rounded-lg cursor-pointer`}
              />
            );
          })}
        </div>

        <button
          onClick={next}
          className="absolute right-2 md:right-6 z-10 bg-white p-3 rounded-full shadow hover:bg-gray-100 cursor-pointer"
        >
          ▶️
        </button>
      </div>


      <div className="flex space-x-2 mt-6">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === current ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default App;
