import React from "react";
import Header from "../components/Header/Header";

import MainContainer from "../components/MainContainer/MainContainer";
import useMovieTypes from "../hooks/useMovieTypes";
import SecondaryContainer from "../components/SecondaryContainer/SecondaryContainer";
import { useSelector } from "react-redux";
import GPTSearch from "./GptSearch";
import { MOVIES, TRENDINGS } from "../utils/tmdb";
import useMovieVideos from "../hooks/useMovieVideos";

const movieCategories = [
  { type: "normal", heading: "Now Playing", key: "nowPlaying" },
  { type: "trending", heading: "Top 10 Trending", key: "trendingAll" },
  {
    type: "normal",
    heading: "Now Playing Bollywood Movies",
    key: "bollywood",
  },
  { type: "trending", heading: "Trending TV's", key: "trendingTv" },
  { type: "normal", heading: "Top Rated Movies", key: "topRated" },
  { type: "trending", heading: "Trending Movies", key: "trendingMovies" },
  { type: "normal", heading: "Upcoming Movies", key: "upcoming" },
  { type: "normal", heading: "Popular Movies", key: "popular" },
];

const Browse = () => {
  const { trendingAll, trendingTv, trendingMovies } = TRENDINGS;
  const { nowPlaying, popular, topRated, upcoming } = MOVIES;

  useMovieTypes(trendingAll.endpoint, trendingAll.type, true);
  useMovieTypes(trendingTv.endpoint, trendingTv.type, true);
  useMovieTypes(trendingMovies.endpoint, trendingMovies.type, true);

  useMovieTypes(nowPlaying.endpoint, nowPlaying.type, false);
  useMovieTypes(upcoming.endpoint, upcoming.type, false);
  useMovieTypes(topRated.endpoint, topRated.type, false);
  useMovieTypes(popular.endpoint, popular.type, false);
  useMovieTypes(popular.endpoint, "bollywood", false, true, "hi");

  const nowPlayinMovies = useSelector((store) => store.movie?.nowPlaying);
  console.log(nowPlayinMovies?.[0].id);
  const { movieVideosData } = useMovieVideos(nowPlayinMovies?.[0]?.id);
  console.log(nowPlayinMovies);
  return (
    <div>
      <MainContainer
        movie={nowPlayinMovies?.[0]}
        isMovieDetailPage={false}
        movieVideosData={movieVideosData}
      />
      <SecondaryContainer movieCategories={movieCategories} />
    </div>
  );
};

export default Browse;
