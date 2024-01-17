import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/slices/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const Browse = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getNowPlayingMovie = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const data = await response.json();
      console.log(response);
      dispatch(addNowPlayingMovies(data.results));
    };
    getNowPlayingMovie();
  }, []);
  return (
    <div>
      <Header />
      Browse
    </div>
  );
};

export default Browse;
