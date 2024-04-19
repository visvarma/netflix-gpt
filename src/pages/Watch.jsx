import React from "react";
import { useParams } from "react-router-dom";
import useMovieVideos from "../hooks/useMovieVideos";

const Watch = () => {
  const { movieId } = useParams();
  const { movieVideosData } = useMovieVideos(movieId);

  return (
    <div className="w-full aspect-[14/7] xl:h-lvh transition-all z-0 ">
      <iframe
        className="w-full object-contain h-full rounded-lg"
        src={
          "https://www.youtube.com/embed/" +
          movieVideosData[0]?.key +
          "?&controls=1&showinfo=0&rel=0&autoplay=1&mute=1&loop=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Watch;
