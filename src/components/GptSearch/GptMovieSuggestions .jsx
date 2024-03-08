import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../MovieList/MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90 mx-auto max-h-screen overflow-auto w-full md:w-2/3 xl:w-1/2">
      <div className="">
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            moviesType={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
