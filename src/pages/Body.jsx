import React, { useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";

// import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeuser } from "../store/slices/userSlice";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

export const Body = () => {
  const dispatch = useDispatch();
  // const appRouter = createHashRouter([
  //   { path: "/", element: },
  //   { path: "/signup", element: <SignUp /> },
  //   { path: "/browse", element: <Browse /> },
  // ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/browse" element={<Browse />} />
        </Route>
      </Routes>
    </Router>
  );
};
