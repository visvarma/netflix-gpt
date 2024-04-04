import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    showCase: null,
    videos: null,
    nowPlaying: null,
    topRated: null,
    popular: null,
    latest: null,
    tvShowIndia: null,
    tvShowInternationl: null,
    hollywood: null,
    bollywood: null,
    action: null,
    adventure: null,
    animation: null,
    comedy: null,
    crime: null,
    drama: null,
    family: null,
    horror: null,
    mystery: null,
    romance: null,
    scienceFiction: null,
    thriller: null,
  },
  reducers: {
    setMovie: (state, action) => {
      const { movieType, movieData } = action.payload;
      state[movieType] = movieData;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { setMovie, addTrailerVideo } = movieSlice.actions;

export default movieSlice.reducer;
