import React from "react";
import { IMG_CDN_URL } from "../../utils/constants";

export const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="child w-36 md:w-36">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};
