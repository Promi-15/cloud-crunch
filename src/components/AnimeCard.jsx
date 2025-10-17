import React from "react";

const AnimeCard = ({ anime }) => {
  const { anime_id, name, release_date, description, genre, episodes, image, classification } = anime 
  
  const showGenre = Array.isArray(genre) ? genre.join(", ") : genre;
  
  return (
    <div className="h-[500px] w-full bg-black rounded-lg overflow-hidden shadow-lg">
      <a href="#" className="group relative block bg-black h-full">
        <img
          alt={name}
          src={image}
          className="absolute inset-0 h-full w-full object-cover opacity-80 transition-all duration-300 group-hover:opacity-60 group-hover:scale-105"
        />

        <div className="relative p-6 h-full flex flex-col justify-between bg-gradient-to-t from-black/10 via-black/10 to-transparent">
          {/* Top Content */}
          <div>
            <p className="text-lg tracking-widest text-white uppercase font-bold">
              <span>{anime_id}</span>. <span className="text-sm">{classification}</span>
            </p>
            <p className="text-xl font-bold text-white sm:text-2xl mt-2 ">{name}</p>
          </div>

          {/* Bottom Content */}
          <div>
            <div className="mb-4 flex justify-between text-white text-sm">
              <p className="text-sm italic">release_date : {release_date}</p>
              <p className="text-sm italic">{episodes} - Episodes</p>
            </div>
            <div className="translate-y-8 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white mb-3 h-[72px] overflow-hidden">
                {description}
              </p>
              <p className="text-white font-light italic text-sm">{showGenre}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default AnimeCard;