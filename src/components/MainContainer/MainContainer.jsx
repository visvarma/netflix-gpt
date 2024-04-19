import React from "react";
import { useSelector } from "react-redux";
import ShowCaseBackground from "../ShowCaseBackground";
import VideoTitle from "../VideoTitle";

const MainContainer = ({ isMovieDetailPage, movieVideosData, movie }) => {
  console.log(movie);
  if (!movie) return;
  console.log(movieVideosData);
  const { original_title, overview } = movie;
  return (
    <div className="aspect-video  bg-gradient-to-b from-slate-700 xl:mt-[-180pxL] transition-all z-0 ">
      <div className="w-full h-full relative lg:mt-[-70px]">
        <ShowCaseBackground
          movieData={movie}
          isMovieDetailPage={isMovieDetailPage}
          movieVideosData={movieVideosData}
        />
        <VideoTitle
          overview={overview}
          title={original_title}
          movieData={movie}
          isMovieDetailPage={isMovieDetailPage}
        />
      </div>
    </div>
  );
};

export default MainContainer;
