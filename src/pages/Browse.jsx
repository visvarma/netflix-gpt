import React from "react";
import Header from "../components/Header/Header";

import MainContainer from "../components/MainContainer/MainContainer";
import useMovieTypes from "../hooks/useMovieTypes";
import SecondaryContainer from "../components/SecondaryContainer/SecondaryContainer";
import { useSelector } from "react-redux";
import GPTSearch from "../components/GptSearch/GptSearch";

const Browse = () => {
  useMovieTypes();
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);

  return (
    <div>
      {/* <Header /> */}
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
