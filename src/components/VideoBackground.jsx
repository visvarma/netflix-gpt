import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  console.log(movieId);
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="relative xl:h-screen w-screen xl:w-[100%] aspect-video">
      <iframe
        className="absolute top-0 left-0 w-[100%] h-full object-cover "
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
