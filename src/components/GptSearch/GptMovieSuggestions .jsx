import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../MovieList/MovieList";
import MovieSlider from "../MovieSlides";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="p-8 m-4 rounded-2xl text-white bg-opacity-90 mx-auto max-h-screen overflow-auto w-full md:w-2/3 xl:w-1/2">
      <div className="">
        {movieNames.map((movieName, index) => (
          <MovieSlider
            key={movieName}
            type={null}
            heading={movieName}
            data={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
