import React from "react";
import Header from "../components/Header/Header";

import MainContainer from "../components/MainContainer/MainContainer";
import useMovieTypes from "../hooks/useMovieTypes";
import SecondaryContainer from "../components/SecondaryContainer/SecondaryContainer";
import { useSelector } from "react-redux";
import GPTSearch from "../components/GptSearch/GptSearch";
import { MOVIES, TRENDINGS } from "../utils/tmdb";

const Browse = () => {
  const { trendingAll, trendingTv, trendingMovies } = TRENDINGS;
  const { nowPlaying, popular, topRated } = MOVIES;

  useMovieTypes(trendingAll.endpoint, trendingAll.type, true);
  useMovieTypes(trendingTv.endpoint, trendingTv.type, true);
  useMovieTypes(trendingMovies.endpoint, trendingMovies.type, true);

  useMovieTypes(nowPlaying.endpoint, nowPlaying.type, false);
  useMovieTypes(topRated.endpoint, topRated.type, false);
  useMovieTypes(popular.endpoint, popular.type, false);
  useMovieTypes(popular.endpoint, "bollywood");

  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);

  return (
    <div>
      {/* <Header /> */}
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
