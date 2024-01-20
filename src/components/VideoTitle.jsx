import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black z-10">
      <h1 className="text-xl md:text-3xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-md w-1/4">{overview}</p>
      <div className="my-4 md:m-0">
        <button className=" bg-white text-black py-1 md:py-3 px-3 md:px-10 text-xl  rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-2  bg-gray-500 text-white py-3 px-10 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
