import React from "react";
import { MovieCard } from "../MovieCard/MovieCard";

const MovieList = ({ moviesType, movies }) => {
  return (
    <div className="px-6 py-3">
      <h1 className="text-lg md:text-xl py-4 text-white">{moviesType}</h1>
      <div className="flex overflow-x-auto">
        <div className="flex gap-x-10">
          {movies?.map((movie) => {
            return <MovieCard key={movie.id} posterPath={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
