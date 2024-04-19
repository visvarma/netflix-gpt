import React from "react";
import { MOVIES, TRENDINGS } from "../utils/tmdb";
import useMovieTypes from "../hooks/useMovieTypes";
import MainContainer from "../components/MainContainer/MainContainer";
import { useSelector } from "react-redux";
import useMovieVideos from "../hooks/useMovieVideos";
import SecondaryContainer from "../components/SecondaryContainer/SecondaryContainer";

const movieCategories = [
  { type: "normal", heading: "Bollywood Blockbusters", key: "bollywood" },
  { type: "trending", heading: "Top 10 Trending", key: "trendingMovies" },

  { type: "normal", heading: "Hollywood Movies", key: "hollywood" },
  { type: "normal", heading: "Action Thriller", key: "thriller" },
  { type: "normal", heading: "Romantic Movies", key: "romance" },
  { type: "normal", heading: "Indian Comedy Movies", key: "comedy" },
  { type: "normal", heading: "Adventurus Movies", key: "adventure" },
  { type: "normal", heading: "Popular In Animation", key: "animation" },
];

const Movies = () => {
  const { trendingMovies } = TRENDINGS;
  const { popular } = MOVIES;

  useMovieTypes(trendingMovies.endpoint, trendingMovies.type, true);

  useMovieTypes(popular.endpoint, "bollywood", false, true, "hi");
  useMovieTypes(popular.endpoint, "hollywood", false, true, "en");

  useMovieTypes(popular.endpoint, "thriller", false, true, "en", 53);
  useMovieTypes(popular.endpoint, "romance", false, true, "en", 10749);
  useMovieTypes(popular.endpoint, "horror", false, true, "en", 27);
  useMovieTypes(popular.endpoint, "comedy", false, true, "hi", 35);
  useMovieTypes(popular.endpoint, "adventure", false, true, "en", 12);
  useMovieTypes(popular.endpoint, "animation", false, true, "en", 16);

  const bollywood = useSelector((store) => store.movie?.bollywood);
  const { movieVideosData } = useMovieVideos(bollywood?.[1]?.id);

  return (
    <div>
      <MainContainer
        movie={bollywood?.[1]}
        isMovieDetailPage={false}
        movieVideosData={movieVideosData}
      />
      <SecondaryContainer movieCategories={movieCategories} />
    </div>
  );
};

export default Movies;
