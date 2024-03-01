import React from "react";
import MovieList from "../MovieList/MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    movies && (
      <div className="bg-black">
        <div className=" mt-0  xl:-mt-36 lg:-mt-8 pl-4 md:pl-12 relative z-20">
          <MovieList
            moviesType="now playing"
            movies={movies.nowPlayingMovies}
          />
          <MovieList
            moviesType="popular Movies"
            movies={movies.popularMovies}
          />
          <MovieList moviesType="Trending" movies={movies.nowPlayingMovies} />
          <MovieList moviesType="Highest Rated" movies={movies.popularMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
