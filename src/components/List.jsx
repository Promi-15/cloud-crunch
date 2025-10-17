import React, { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";

const List = () => {
  const [animes, setAnimes] = useState([]);

useEffect(() => {
  fetch("anime.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then((data) => setAnimes(data.anime))
    .catch((error) => console.error('Error fetching anime:', error));
}, []);
  return (
    <div  className="bg-gradient-to-b from-gray-700 to-black">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-10">
        {animes?.map((anime) => (
          <AnimeCard key={anime.anime_id} anime={anime}></AnimeCard>
        ))}
      </div>
    </div>
  );
};

export default List;
