import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_OPTIONS, TMDB_API_URL } from "../utils/tmdb.js";
import { setMovie } from "../store/slices/movieSlice";

const getMovieApiUrl = (
  endpoint,
  isTrending,
  discoverMovies = null,
  originalLanguage = null,
  genreId = null
) => {
  let apiUrl = isTrending
    ? `${TMDB_API_URL}/trending/${endpoint}?language=en-US&region=IN`
    : discoverMovies
    ? `${TMDB_API_URL}/discover/movie?language=en-US&region=IN&page=1&adult=true`
    : `${TMDB_API_URL}/movie/${endpoint}?language=en-US&region=IN&page=1&adult=true`;

  if (genreId) {
    apiUrl += `&with_genres=${genreId}`;
  }

  if (originalLanguage) {
    apiUrl += `&with_original_language=${originalLanguage}`;
  }

  console.log(apiUrl);
  return apiUrl;
};

const useMovieTypes = (
  endpoint,
  movieType,
  isTrending,
  discoverMovies,
  originalLanguage,
  genreId
) => {
  const dispatch = useDispatch();

  const apiUrl = getMovieApiUrl(
    endpoint,
    isTrending,
    discoverMovies,
    originalLanguage,
    genreId
  );
  const getMovieData = async () => {
    const response = await fetch(apiUrl, TMDB_OPTIONS);
    const data = await response.json();
    console.log(movieType);
    console.log(data.results);
    dispatch(
      setMovie({
        movieType,
        movieData: isTrending ? data.results.slice(0, 10) : data.results,
      })
    );
  };

  useEffect(() => {
    getMovieData();
  }, []);
};

export default useMovieTypes;
