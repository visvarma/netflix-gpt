import React, { useEffect, useState } from "react";
import MainContainer from "../components/MainContainer/MainContainer";
import { useParams } from "react-router-dom";
import { TMDB_OPTIONS, TMDB_API_URL, TMDB_CDN_URL } from "../utils/tmdb";
import useMovieVideos from "../hooks/useMovieVideos";
import { useSelector } from "react-redux";
import VideosSlider from "../components/VideosSlider";
import MovieDetailInfo from "../components/MovieDetailInfo";
import MovieSlider from "../components/MovieSlides";
import ShowcaseShimmer from "../components/ShowcaseShimmer";
import MovieSliderShimmer from "../components/ShimmerUI/MovieSliderShimmer";
import VideoSliderShimmer from "../components/ShimmerUI/VideoSliderShimmer";

const MovieDetail = () => {
  const [movieDetails, setMovieDetails] = useState();
  const { movieId } = useParams();
  console.log(movieId);
  const { movieVideosData } = useMovieVideos(movieId);
  // const movieVideosData = useSelector((store) => store?.movie.movieVideos);

  console.log(movieVideosData);
  const currentMovieVideos = movieVideosData?.filter(
    (movie) =>
      movie.type === "Trailer" ||
      movie.type === "Clip" ||
      movie.type === "Teaser"
  );

  useEffect(() => {
    const getMovieDetails = async () => {
      const response = await fetch(
        `${TMDB_API_URL}/movie/${movieId}?append_to_response=credits,similar`,
        TMDB_OPTIONS
      );

      const movie = await response.json();
      setMovieDetails(movie);
    };
    movieId && getMovieDetails();
  }, [movieId]);

  return (
    <div className="bg-black">
      {!movieDetails ? (
        <ShowcaseShimmer />
      ) : (
        <MainContainer
          isMovieDetailPage={true}
          movie={movieDetails}
          movieVideosData={movieVideosData}
        />
      )}
      <div className="px-6 md:px-20 -mt-5 z-50 ">
        {currentMovieVideos?.length === undefined ? (
          <VideoSliderShimmer dimention={"w-[30%]"} />
        ) : (
          currentMovieVideos?.length > 0 && (
            <VideosSlider
              movieVideos={currentMovieVideos}
              movieTitle={movieDetails?.title}
            />
          )
        )}

        {movieDetails?.similar?.results === undefined ? (
          <MovieSliderShimmer dimention={"w-28 md:w-36"} />
        ) : movieDetails?.similar?.results &&
          movieDetails?.similar?.results.length > 0 ? (
          <MovieSlider
            heading={"Similar Movies"}
            data={movieDetails?.similar?.results}
          />
        ) : null}
        <MovieDetailInfo movieDetails={movieDetails} />
      </div>
    </div>
  );
};

export default MovieDetail;
