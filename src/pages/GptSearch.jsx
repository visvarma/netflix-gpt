import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "../components/GptSearch/GptMovieSuggestions ";
import GptSearchBar from "../components/GptSearch/GptSearchBar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addGptMovieSearchResult } from "../store/slices/gptSlice";

const GPTSearch = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(
        addGptMovieSearchResult({
          movieNames: null,
          movieResults: null,
        })
      );
    };
  });

  return (
    <>
      <div className="fixed -z-10 w-full">
        <img
          className="h-screen w-screen object-cover"
          src={BG_URL}
          alt="logo"
        />
      </div>
      <div className="flex flex-col max-h-screen bg-blur pb-5">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};
export default GPTSearch;
