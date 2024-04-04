import React from "react";
import MovieList from "../MovieList/MovieList";
import { useSelector } from "react-redux";
import MovieSlider from "../MovieSlides";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    movies && (
      <div className="bg-black">
        <div className=" mt-0  xl:-mt-36 lg:-mt-8 pl-4 md:pl-12 relative z-20">
          {/* <MovieList
            moviesType="now playing"
            movies={movies.nowPlayingMovies}
          /> */}
          <MovieSlider
            type={null}
            heading="Now Playing"
            data={movies.nowPlaying}
          />
          <MovieSlider
            type={null}
            heading="Trending"
            data={movies.trendingAll}
          />
          <MovieSlider
            type={null}
            heading="Now Playing Bollywood Movies"
            data={movies.bollywood}
          />

          <MovieSlider
            type={null}
            heading="Top Rated Movies"
            data={movies.topRated}
          />
          <MovieSlider
            type={null}
            heading="Trending Movies"
            data={movies.trendingMovies}
          />
          <MovieSlider
            type={null}
            heading="Popular Movies"
            data={movies.popular}
          />
          {/* <MovieList
            moviesType="popular Movies"
            movies={movies.popularMovies}
          />
          <MovieList moviesType="Trending" movies={movies.nowPlayingMovies} />
          <MovieList moviesType="Highest Rated" movies={movies.popularMovies} /> */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
