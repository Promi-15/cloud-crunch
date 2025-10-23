import React, { useState } from "react";

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative h-[600px] bg-gradient-to-b from-rose-950/80 to-black mt-14">
      <div className="h-14 w-full absolute -top-14 bg-gradient-to-b from-black/60 to-rose-950/80 "></div>
      <div className="absolute -top-14 inset-0 bg-gradient-to-l from-black/80 via-black/45 to-transparent h-14"></div>
      <div className="ml-5.5 h-full flex items-center">
        {/* Text Content on Left */}
        <div className="w-1/3 z-10">
          <div className="absolute inset-0 bg-gradient-to-l from-black/65 via-black/45 to-transparent"></div>
          <h1 className="text-5xl italic font-bold text-white mb-4">
            Watch Anime Online
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Stream your favorite anime series and movies in high quality.
          </p>

          {/* Button with Stars */}
          <button
            className="relative"
            onMouseEnter={() => setIsHovered(true)} // Set hover state to true
            onMouseLeave={() => setIsHovered(false)} // Set hover state to false
          >
            Watch Now
            {/* Star SVGs */}
            <div className={`star-1 ${isHovered ? "hovered" : ""}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53">
                <path
                  className="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
              </svg>
            </div>
            <div className={`star-2 ${isHovered ? "hovered" : ""}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53">
                <path
                  className="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
              </svg>
            </div>
            <div className={`star-3 ${isHovered ? "hovered" : ""}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53">
                <path
                  className="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
              </svg>
            </div>
            <div className={`star-4 ${isHovered ? "hovered" : ""}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53">
                <path
                  className="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
              </svg>
            </div>
            <div className={`star-5 ${isHovered ? "hovered" : ""}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53">
                <path
                  className="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
              </svg>
            </div>
            <div className={`star-6 ${isHovered ? "hovered" : ""}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53">
                <path
                  className="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
              </svg>
            </div>
          </button>
        </div>

        {/* Image on Right */}
        <div className="absolute right-0 top-0 w-2/3 h-full">
          <img
            src="/images/hero6.webp"
            className="w-full h-full object-cover"
            alt="Anime banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
