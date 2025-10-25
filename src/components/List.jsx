import React, { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";
import { FaSearch } from "react-icons/fa";

const List = () => {
  const [animes, setAnimes] = useState([]);
  const [active, setActive] = useState("All");

  useEffect(() => {
    fetch("anime.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setAnimes(data.anime))
      .catch((error) => console.error("Error fetching anime:", error));
  }, []);
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black pt-5 relative">
     {/* < div className="h-14 w-full absolute -top-1 bg-gradient-to-t from-black/60 to-rose-950/80 "></div> */}
      <div className="text-center text-5xl font-bold">
        <p className="text-5xl font-bold bg-gradient-to-r from-red-950 via-rose-800 to-orange-400 bg-clip-text text-transparent transition duration-300 hover:[text-shadow:0_0_20px_rgba(146,_62,_62,_0.8)]">
          Find Your Favorites
        </p>
      </div>
      <div className="mx-5 pt-10 flex flex-row gap-10 items-center justify-between">
        <ul className="flex flex-row gap-5 text-xl font-bold text-white">
          {["Movies", "Anime", "Drama", "All"].map((item) => (
            <li
              key={item}
              onClick={() => setActive(item)}
              className={`cursor-pointer transition duration-300 ${
                active === item
                  ? "text-white border-b-2 border-orange-400"
                  : "text-gray-400 hover:text-orange-300"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-row items-center justify-between relative">
          <FaSearch className="absolute right-2.5 text-white" />
          <p className="border-b-2  border-white
          ">
            <input
              type="text"
              name=""
              className="w-[500px] outline-none focus:outline-none focus:ring-0 focus:border-none text-white py-2"
              placeholder="search"

            />
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-10 px-5 pb-5">
        {animes?.map((anime) => (
          <AnimeCard key={anime.id} anime={anime}></AnimeCard>
        ))}
      </div>
    </div>
  );
};

export default List;
