// import { useState, useEffect } from "react";
// import { TMDB_OPTIONS, TMDB_API_URL } from "../utils/constants";

// const useMovieVideos = (movieId) => {
//   const [movieDetails, setMovieDetails] = useState(null);
//   const [castDetails, setCastDetails] = useState(null);
//   //   const [similarMovies,]
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         const movieResponse = fetch(
//           `${TMDB_API_URL}/movie/${movieId}`,
//           TMDB_OPTIONS
//         );
//         const castResponse = fetch(`cast-details-api-url/${movieId}`);

//         // Wait for both API calls to resolve
//         const [movieResult, castResult] = await Promise.all([
//           movieResponse,
//           castResponse,
//         ]);

//         // Extract JSON from responses
//         const movieData = await movieResult.json();
//         const castData = await castResult.json();

//         // Set state with fetched data
//         setMovieDetails(movieData);
//         setCastDetails(castData);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     // Fetch data when component mounts
//     fetchMovieDetails();
//   }, [movieId]); // Dependency array to ensure data is fetched when movieId changes

//   return { movieDetails, castDetails, loading, error };
// };

// export default useMovieVideos;
