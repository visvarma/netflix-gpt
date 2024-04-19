import React from "react";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import useMovieVideos from "../hooks/useMovieVideos";
import ShowcaseShimmer from "./ShowcaseShimmer";

const ShowCaseBackground = ({
  movieData,
  isMovieDetailPage,
  movieVideosData,
}) => {
  const movieVideos =
    movieVideosData?.filter((video) => video.type === "Trailer") || [];

  const { backdrop_path, title } = movieData;
  console.log(movieVideosData);
  return (
    <div className="w-full h-full">
      {isMovieDetailPage ? (
        <div className="h-[40vh] sm:h-full w-full object-cover ">
          <img
            className={`h-full w-full object-cover bg-gradient-to-t from-black`}
            src={`${IMG_CDN_URL}/w1280${backdrop_path}`}
            alt={title}
          />
        </div>
      ) : movieVideos[0]?.key ? (
        <div className="w-full h-full">
          <iframe
            className="w-full object-fill h-full lg:-mt-32"
            src={
              "https://www.youtube.com/embed/" +
              movieVideos[0]?.key +
              "?&controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      ) : (
        <img
          className={`h-full w-full object-cover`}
          src={`${IMG_CDN_URL}/w1280${backdrop_path}`}
          alt={title}
        />
      )}
    </div>
  );
};

export default ShowCaseBackground;
