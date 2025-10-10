// import React from "react";

// const Banner = () => {
//   return (
//     <div className="bg-gradient-to-b from-rose-950 to bg-black relative">
//       <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
//       <div className="flex flex-row gap-10 justify-between items-center">
//         <div className="w-[900px] py-2  ">
//                   <img src="/images/hero6.webp" className="rounded-2xl pl-20" alt="" />

//         </div>
//         <div className="w-[650px] h-[550px] backdrop-blur-[2px] bg-[rgba(120,119,119,0.15)] rounded-xl 0 absolute right-0">
//           <div>Hello</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
import React from "react";

const Banner = () => {
  const buttonStyle = {
    position: "relative",
    padding: "12px 35px",
    background: "#fec195",
    fontSize: "17px",
    fontWeight: "500",
    color: "#181818",
    border: "3px solid #fec195",
    borderRadius: "8px",
    boxShadow: "0 0 0 #fec1958c",
    transition: "all 0.3s ease-in-out",
    cursor: "pointer",
  };

  const starStyle = {
    position: "absolute",
    filter: "drop-shadow(0 0 0 #fffdef)",
    zIndex: "-5",
    transition: "all 1s cubic-bezier(0, 0.4, 0, 1.01)",
  };

  return (
    <div className="relative h-[600px] bg-gradient-to-b from-rose-950/80 to-black">
      <div className=" ml-5.5 h-full flex items-center">
        {/* Text Content on Left */}
        <div className="w-1/3 z-10 ">
          <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/55 to-transparent"></div>
          <h1 className="text-5xl italic font-bold text-white mb-4">
            Watch Anime Online
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Stream your favorite anime series and movies in high quality.
          </p>
          <button style={buttonStyle}>
            Button
            {/* Star SVGs */}
            <div
              style={{ ...starStyle, top: "20%", left: "20%", width: "25px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 784.11 815.53"
              >
                <path
                  className="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
              </svg>
            </div>
            <div
              style={{ ...starStyle, top: "45%", left: "45%", width: "15px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 784.11 815.53"
              >
                <path
                  className="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                ></path>
              </svg>
            </div>
            {/* Add more star divs as needed */}
          </button>
        </div>

        {/* Image on Right */}
        <div className="absolute right-0 top-0 w-2/3 h-full">
          <img
            src="/images/hero6.webp"
            className="w-full h-full object-cover"
            alt="Anime banner"
          />
          {/* Gradient overlay on image */}
          {/* <div className="absolute inset-0 bg-gradient-to-l from-black via-black/50 to-transparent"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
