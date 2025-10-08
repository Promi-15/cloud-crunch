import { useEffect } from "react";
import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";

const Hero = () => {
    
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <div
      className=" min-h-screen bg-cover bg-center bg-no-repeat py-10 px-5"
      style={{
        backgroundImage: 'url("/images/hero8.png")',
      }}
    >
      <Navbar />

      <div className="flex flex-row gap-10 justify-between">
        <div className="text-white w-2/4 mt-52 mx-10 space-y-6">
          <p className="text-5xl font-bold my-10">
            Welcome to <span className="italic text-red-400">Cloud-Crunch</span>
          </p>

          <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-pink-50 to-red-500 bg-clip-text text-transparent">
            <Typewriter
              options={{
                strings: ["Watch your favorite Anime here......"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <p className="w-3/4 text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
            dolorem dolore placeat eos officia eaque amet repellat quod porro
            vero. Similique vero obcaecati vitae dignissimos? Ut maiores
            cupiditate voluptates quas odit dolores, nobis eligendi optio ad
            voluptatem. Dignissimos voluptates cum illum accusantium ullam dolor
            expedita, nihil similique tempora iste, ducimus beatae praesentium
            qui sit quisquam fugit, aperiam error suscipit. Tempore?
          </p>
        </div>
        <div className="relative w-1/2">
          {/* <img src="/images/h1.png" className="absolute h-[300px]   w-[250px] top-72 -left-15 border border-grey shadow-2xs   backdrop-blur-[10px] bg-[rgba(149,86,86,0.5)" alt="" />
                    <img src="/images/h2.png" className="absolute h-[350px]   w-[250px] top-64 left-28 border border-grey shadow-2xl z-20 " alt="" />
                    <img src="/images/h3.png" className="absolute h-[300px]   w-[250px] top-72 left-72 border border-grey  " alt="" /> */}
          <div
            className="absolute h-[300px]  rounded-2xl w-[200px] top-72 -left-10 backdrop-blur-[10px] bg-[rgba(149,86,86,0.5)]"
            data-aos="zoom-in-left"
            data-aos-delay="200"
            data-aos-duration="1800"
          >
            <img
              src="/images/h1.png"
              className="absolute h-[250px]  rounded-2xl w-[150px] top-6.5 -left-5 backdrop-blur-[10px] bg-[rgba(149,86,86,0.3)] opacity-75"
              alt=""
            />
          </div>
          <div
            className="absolute h-[250px]  rounded-2xl w-[220px] top-80 left-20 backdrop-blur-[10px] bg-[rgba(149,86,86,0.5)] z-20"
            data-aos="zoom-in"
          >
            <img
              src="/images/h2.png"
              className="absolute h-[280px]  rounded-2xl w-[195px] -top-5 left-3.5 backdrop-blur-[10px] bg-[rgba(149,86,86,0.5)] opacity-80 z-20"
              alt=""
            />
          </div>
          <div
            className="absolute h-[300px]  rounded-2xl w-[200px] top-72 left-64 backdrop-blur-[10px] bg-[rgba(149,86,86,0.5)] "
            data-aos="zoom-in-right"
            data-aos-delay="200"
            data-aos-duration="1800"
          >
            <img
              src="/images/h3.png"
              className="absolute h-[250px]  rounded-2xl w-[190px] top-6.5 left-6 opacity-80 backdrop-blur-[10px] bg-[rgba(149,86,86,0.5)]  "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
