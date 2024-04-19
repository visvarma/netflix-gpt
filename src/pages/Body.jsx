import React, { useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
  useNavigate,
} from "react-router-dom";

// import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeuser } from "../store/slices/userSlice";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import GPTSearch from "./GptSearch";
import MovieDetail from "./MovieDetail";
import { PAGE } from "../utils/routes";
import Spinner from "../components/Spinner";
import Watch from "./Watch";
import Latest from "./Latest";
import TvShows from "./TvShows";
import Movies from "./Movies";

const AuthorizedRoute = ({ children, type }) => {
  const isLogged = useSelector((store) => store.authenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (type === "private" && !isLogged) {
      navigate(PAGE.SIGNIN);
    } else if (type === "public" && isLogged) {
      navigate(PAGE.BROWSE);
    }
    return () => {};
  }, [isLogged, navigate, type]);

  if (isLogged === null) return <Spinner />;

  return <>{children}</>;
};

export const Body = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            path="/"
            element={
              <AuthorizedRoute type="public">
                <SignIn />
              </AuthorizedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthorizedRoute type="public">
                <SignUp />
              </AuthorizedRoute>
            }
          />
          <Route
            path="/browse"
            element={
              <AuthorizedRoute type="private">
                <Browse />
              </AuthorizedRoute>
            }
          />
          <Route
            path="/search"
            element={
              <AuthorizedRoute type="private">
                <GPTSearch />
              </AuthorizedRoute>
            }
          />
          <Route
            path="/movieDetail/:movieId"
            element={
              <AuthorizedRoute type="private">
                <MovieDetail />
              </AuthorizedRoute>
            }
          />
          <Route
            path="/movies"
            element={
              <AuthorizedRoute type="private">
                <Movies />
              </AuthorizedRoute>
            }
          />
          <Route
            path="/tv-shows"
            element={
              <AuthorizedRoute type="private">
                <TvShows />
              </AuthorizedRoute>
            }
          />
          <Route
            path="/latest"
            element={
              <AuthorizedRoute type="private">
                <Latest />
              </AuthorizedRoute>
            }
          />
          <Route
            path="/watch/:movieId"
            element={
              <AuthorizedRoute type="private">
                <Watch />
              </AuthorizedRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};
