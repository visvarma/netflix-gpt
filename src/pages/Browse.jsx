import React from "react";
import Header from "../components/Header/Header";

import useNowPlayingHooks from "../hooks/useNowPlayingHooks";
import MainContainer from "../components/MainContainer/MainContainer";

const Browse = () => {
  useNowPlayingHooks();

  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;
