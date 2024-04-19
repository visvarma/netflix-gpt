import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieVideos } from "../store/slices/movieSlice";
import { TMDB_OPTIONS } from "../utils/tmdb";

const useMovieVideos = (movieId) => {
  const [movieVideosData, setMovieVideosData] = useState([]);
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      TMDB_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    // const filterData = json.results.filter((video) => video.type === "Trailer");
    // const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer);
    setMovieVideosData(json.results);
  };
  useEffect(() => {
    getMovieVideos();
  }, [movieId]);

  return { movieVideosData };
};

export default useMovieVideos;
