import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../store/slices/movieSlice";

const useNowPlayingHooks = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovie = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const data = await response.json();
    console.log(data.results);
    dispatch(addNowPlayingMovies(data.results));
  };
  useEffect(() => {
    getNowPlayingMovie();
  }, []);
};

export default useNowPlayingHooks;
