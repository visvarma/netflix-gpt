import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  console.log(movieId);
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="container mx-auto">
      <div className="relative h-screen aspect-video">
        <iframe
          className="absolute top-0 left-0 w-full h-full "
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?&autoplay=1&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
