import React from "react";
import Header from "../components/Header/Header";

import MainContainer from "../components/MainContainer/MainContainer";
import useMovieTypes from "../hooks/useMovieTypes";
import SecondaryContainer from "../components/SecondaryContainer/SecondaryContainer";

const Browse = () => {
  useMovieTypes();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
