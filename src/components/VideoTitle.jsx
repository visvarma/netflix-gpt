import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[30%] lg:pt-[15%] xl:pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black z-10">
      <h1 className="text-xl md:text-3xl font-bold">{title}</h1>
      <p className="hidden lg:inline-block py-6 text-md w-1/4">{overview}</p>
      <div className="my-3 md:m-0 flex flex-wrap items-center justify-start">
        <button className=" bg-white text-black py-2 px-3 sm:px-6 lg:py-3 lg:px-10  text-md md:text-xl  rounded-md  my-1 sm:my-3 hover:bg-opacity-80 flex items-center justify-center gap-1">
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
          Play
        </button>
        <button className="hidden lg:flex mx-2  bg-gray-500 text-white py-3 px-8 text-lg bg-opacity-50 rounded-lg  items-center justify-center gap-1">
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
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
