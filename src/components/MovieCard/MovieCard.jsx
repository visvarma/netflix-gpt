import React from "react";
import { IMG_CDN_URL } from "../../utils/constants";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="">
      <LazyLoadImage
        alt="Movie Card"
        src={`${IMG_CDN_URL}/w400${posterPath}`}
        className="hover:scale-110"
        style={{ transition: "0.9s" }}
      />
    </div>
  );
};

export const WithTrending = (MovieCard) => {
  return (props) => {
    const { index } = props;
    return (
      <div className="trending-card relative">
        <div className="text-[200px] trending-number w-full h-full flex justify-start items-center absolute left-0">
          {index}
        </div>
        <div className="w-32 ml-auto relative z-10">
          <MovieCard {...props} />
        </div>
      </div>
    );
  };
};
