import React from "react";
import { MOVIES, TRENDINGS } from "../utils/tmdb";
import useMovieTypes from "../hooks/useMovieTypes";
import MainContainer from "../components/MainContainer/MainContainer";
import { useSelector } from "react-redux";
import useMovieVideos from "../hooks/useMovieVideos";
import SecondaryContainer from "../components/SecondaryContainer/SecondaryContainer";

const movieCategories = [
  { type: "normal", heading: "Tv Show in India", key: "tvShowIndia" },
  { type: "trending", heading: "Top 10 Trending", key: "trendingTv" },

  {
    type: "normal",
    heading: "International Tv Show",
    key: "tvShowInternationl",
  },
];

const TvShows = () => {
  const { trendingTv } = TRENDINGS;
  const { popular } = MOVIES;

  useMovieTypes(trendingTv.endpoint, trendingTv.type, true);

  useMovieTypes(popular.endpoint, "tvShowIndia", false, true, "hi", 10770);
  useMovieTypes(
    popular.endpoint,
    "tvShowInternationl",
    false,
    true,
    "en",
    10770
  );

  const tvShowIndia = useSelector((store) => store.movie?.tvShowIndia);
  const { movieVideosData } = useMovieVideos(tvShowIndia?.[1]?.id);

  return (
    <div>
      <MainContainer
        movie={tvShowIndia?.[1]}
        isMovieDetailPage={false}
        movieVideosData={movieVideosData}
      />
      <SecondaryContainer movieCategories={movieCategories} />
    </div>
  );
};

export default TvShows;
