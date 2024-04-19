import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../../utils/languageConstants";
import { addGptMovieSearchResult } from "../../store/slices/gptSlice";
import openai from "../../utils/openai";
import { API_OPTIONS } from "../../utils/constants";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef();

  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };
  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API call to GPT API and get Movie Results
    if (!searchText.current.value) {
      dispatch(
        addGptMovieSearchResult({
          movieNames: null,
          movieResults: null,
        })
      );
      return;
    }

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMoviesResult =
      gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMoviesResult.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);
    dispatch(
      addGptMovieSearchResult({
        movieNames: gptMoviesResult,
        movieResults: tmdbResults,
      })
    );
  };

  return (
    <div className="flex flex-col items-center justify-center mt-[25%] md:mt-[13%] lg:mt-[11%] xl:mt-[6%]">
      <h1 className="text-2xl rounded-full  font-bold text-center text-white-900 mb-6 py-2 px-8 hidden lg:block">
        Discover Movie Magic: Fuel Your Search with GPT Recommendations!
      </h1>
      <h1 className="text-2xl rounded-full  font-bold text-center text-white-900 mb-6 heading lg:hidden">
        Discover Movie Magic with AI!
      </h1>
      <form
        className="flex items-center bg-white rounded-3xl shadow-lg overflow-hidden w-[93%] md:w-2/3 xl:w-1/2 max-w-screen-md transform transition duration-300 hover:scale-105 hover:shadow-xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="py-4 px-4 sm:px-9 flex-grow bg-transparent outline-none text-gray-800 placeholder-gray-500 focus:placeholder-opacity-75"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="bg-red-700 text-white px-5 sm:px-8 py-4 rounded-r-xl flex items-center justify-center gap-1 transform transition duration-300 hover:bg-red-600 hover:text-gray-100 hover:scale-105 shadow-md"
          onClick={handleGptSearchClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="Search"
            width="25"
            height="25"
          >
            <g data-name="Layer 2" fill="#fafafa" class="color000000 svgShape">
              <path
                d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"
                data-name="search"
                fill="#fafafa"
                class="color000000 svgShape"
              ></path>
            </g>
          </svg>
          <span className="md:inline-block hidden">Search</span>
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
