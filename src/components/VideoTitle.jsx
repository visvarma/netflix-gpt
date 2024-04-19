import React from "react";
import { convertRunTime } from "../utils/tmdb";
import { Link } from "react-router-dom";

const VideoTitle = ({ movieData, isMovieDetailPage }) => {
  const { title, overview, release_date, genres, runtime, id } = movieData;

  const getMovieMetaData = () => {
    const rdate = release_date?.split("-")[0];
    const genre = genres?.map((item) => item.name)[0];
    const duration = convertRunTime(runtime);

    return (
      <p className="mt-3 text-gray-400 hidden md:block">
        {rdate} | {duration.hours}h {duration.minutes}m | {genre}
      </p>
    );
  };

  return (
    <div className=" h-full w-full z-10 absolute top-0 left-0 md:bg-gradient-to-r md:from-black ">
      {/* For Tablet and Desktop */}
      <div
        className="bg-rrr w-full h-full flex"
        // style={{
        //   background: "linear-gradient(77deg,rgba(0,0,0,.8),transparent 85%)",
        // }}
      >
        <div className="px-4 sm:px-6 md:px-20 w-full  text-white pt-[0px] absolute bottom-9 md:bottom-20 lg:bottom-30 xl:bottom-60">
          <h1 className="hidden md:block text-xl md:text-3xl font-bold">
            {title}
          </h1>
          {isMovieDetailPage && getMovieMetaData()}
          <p className="hidden xl:inline-block py-6 text-md w-6/12">
            {overview}
          </p>

          <div className="my-3 md:m-0 flex flex-wrap items-center justify-start">
            <Link
              to={`/watch/${id}`}
              className=" bg-white text-black py-2 px-3 sm:px-6 lg:py-3 lg:px-10  text-md md:text-xl  rounded-full md:rounded-md  my-1 sm:my-3 hover:bg-opacity-80 flex items-center justify-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="hidden md:inline-flex">Play </span>
            </Link>
            {!isMovieDetailPage && (
              <Link
                to={`/movieDetail/${id}`}
                className="hidden lg:flex mx-2  bg-gray-500 text-white py-3 px-8 text-lg bg-opacity-50 rounded-lg  items-center justify-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
                More Info
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
