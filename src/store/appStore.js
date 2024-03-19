import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import moviesReducer from "./slices/movieSlice";
import gptReducer from "./slices/gptSlice";
import configReducer from "./slices/configSlice";
import authReducer from "./slices/authSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
    authenticated: authReducer,
  },
});

export default appStore;
