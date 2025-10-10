import React, { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";

const List = () => {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    fetch("anime.json")
      .then((res) => res.json())
      .then((data) => setAnime(data.anime));
  }, []);
  return (
    <div  className="bg-gradient-to-b from-gray-700 to-black">
      <div className="grid grid-cols-4 gap-5 pt-10">
        {anime?.map((a) => (
          <AnimeCard key={a.id} anime={anime}></AnimeCard>
        ))}
      </div>
    </div>
  );
};

export default List;
