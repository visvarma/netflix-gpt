import React from "react";
import { MOVIES, TRENDINGS } from "../utils/tmdb";
import useMovieTypes from "../hooks/useMovieTypes";
import MainContainer from "../components/MainContainer/MainContainer";
import { useSelector } from "react-redux";
import useMovieVideos from "../hooks/useMovieVideos";
import SecondaryContainer from "../components/SecondaryContainer/SecondaryContainer";

const movieCategories = [
  { type: "normal", heading: "Popular Movies", key: "popular" },
  {
    type: "normal",
    heading: "Now Playing Bollywood Movies",
    key: "bollywood",
  },
  { type: "trending", heading: "Top 10 Trending", key: "trendingAll" },

  { type: "normal", heading: "Now Playing", key: "nowPlaying" },
];

const Latest = () => {
  const trendingMovie = useSelector((store) => store.movie?.trendingMovies);
  const { movieVideosData } = useMovieVideos(trendingMovie?.[1]?.id);

  return (
    <div>
      <MainContainer
        movie={trendingMovie?.[1]}
        isMovieDetailPage={false}
        movieVideosData={movieVideosData}
      />
      <SecondaryContainer movieCategories={movieCategories} />
    </div>
  );
};

export default Latest;
