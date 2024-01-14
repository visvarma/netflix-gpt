import React, { useState } from "react";

import { BG_URL } from "../utils/constants";
import Header from "../components/Header/Header";
import { MovieCard } from "../components/MovieCard/MovieCard";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSiginForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen  object-cover"
          src={BG_URL}
          alt="logo"
        />
      </div>

      <form className="w-full md:w-1/4 px-12 py-8 bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white rounded-lg bg-opacity-80 flex flex-col ">
        <h1 className="font-bold text-xl text-white px-2 py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            type="text"
            name="email"
            className="p-4 my-4 bg-gray-700"
            placeholder="FullName"
          />
        )}
        <input
          type="text"
          name="email"
          className="p-4 my-4 bg-gray-700"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          className="p-4 my-4 bg-gray-700"
          placeholder="Password"
        />
        <button type="submit" className="p-4 my-8 bg-red-700 rounded-lg ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        {isSignIn && (
          <p className="py-5 cursor-pointer" onClick={() => setIsSignIn(false)}>
            New to Netflix? Sign Up now
          </p>
        )}
        {!isSignIn && (
          <p className="py-5 cursor-pointer" onClick={() => setIsSignIn(true)}>
            Already Have an account? Sign In now
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
