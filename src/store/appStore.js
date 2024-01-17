import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import moviesReducer from "./slices/movieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: moviesReducer,
  },
});

export default appStore;
