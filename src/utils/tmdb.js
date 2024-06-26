export const TMDB_OPTIONS = {
  method: "GET",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const TMDB_CDN_URL = "https://image.tmdb.org/t/p/";

export const TMDB_API_URL = "https://api.themoviedb.org/3";

export const TRENDINGS = {
  trendingAll: {
    endpoint: "all/day",
    type: "trendingAll",
  },
  trendingMovies: {
    endpoint: "movie/day",
    type: "trendingMovies",
  },
  trendingTv: {
    endpoint: "tv/day",
    type: "trendingTv",
  },
};

export const MOVIES = {
  showCase: {
    endpoint: "popular",
    type: "showCase",
  },
  latest: {
    endpoint: "latest",
    type: "latest",
  },
  videos: {
    endpoint: "videoId/videos",
    type: "videos",
  },
  nowPlaying: {
    endpoint: "now_playing",
    type: "nowPlaying",
  },
  popular: {
    endpoint: "popular",
    type: "popular",
  },
  upcoming: {
    endpoint: "upcoming",
    type: "upcoming",
  },
  topRated: {
    endpoint: "top_rated",
    type: "topRated",
  },
  byGenre: {
    endpoint: "movie",
    type: "topRated",
  },
};

export const convertRunTime = (timeInMinutes) => {
  const hours = Math.floor(timeInMinutes / 60);
  const minutes = timeInMinutes % 60;
  return { hours, minutes };
};

export const GENRES = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

export const getGenresName = (genreIds) => {
  const genreNames = [];

  genreIds.forEach((id) => {
    const genre = GENRES.find((genre) => genre.id === id);
    if (genre) {
      genreNames.push(genre.name);
    }
  });

  return genreNames;
};
