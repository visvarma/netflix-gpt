import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "../VideoBackground";
import VideoTitle from "../VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[1];

  const { original_title, overview, id } = mainMovie;
  return (
    <div className=" pt-[18%] sm:pt-[10%] bg-black lg:pt-0 ">
      <VideoTitle overview={overview} title={original_title} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
