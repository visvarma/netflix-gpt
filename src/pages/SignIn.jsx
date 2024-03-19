import React, { useRef, useState } from "react";

import { BG_URL, USER_AVATAR } from "../utils/constants";
import Header from "../components/Header/Header";
import { MovieCard } from "../components/MovieCard/MovieCard";
import validateCredentials, { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlice";
import { Link, useNavigate } from "react-router-dom";
import signInService from "../auth/singin";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [authError, setAuthError] = useState(null);
  const [loadingBtn, setLoadingBtn] = useState(false);

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    //validate from
    const isError = validateCredentials(
      emailRef.current.value,
      passwordRef.current.value
    );
    console.log(isError);
    setErrorMessage(isError);
    if (isError) return;
    setLoadingBtn(true);

    const userCredential = await signInService(
      emailRef.current.value,
      passwordRef.current.value
    );
    console.log(userCredential);
    let errorMessage = null;
    switch (userCredential?.error?.code) {
      case "auth/user-disabled":
        errorMessage = "Your account has been disabled!";
        break;

      case "auth/invalid-login-credentials":
        errorMessage = "Invalid login credentials.";
        break;

      default:
        errorMessage = "Something went wrong with your credentials.";
        break;
    }
    setAuthError(errorMessage);
    setLoadingBtn(false);

    if (userCredential?.error) return;
    console.log("sign in done!!!!!!!!!!!!!!!");
    navigate("/browse");
  };

  return (
    <div>
      <div className="absolute">
        <img
          className="h-screen w-screen  object-cover"
          src={BG_URL}
          alt="logo"
        />
      </div>

      <form className="w-3/4 sm:w-6/12 md:w-1/3 lg:w-1/4 px-12 py-8 bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white rounded-lg bg-opacity-80 flex flex-col ">
        <h1 className="font-bold text-xl text-white px-2 py-4">Sign In</h1>
        {authError && (
          <p className="p-3 bg-[#e87c03] text-white text-xs rounded-md mb-5">
            {authError}
          </p>
        )}
        <input
          type="text"
          name="email"
          className="p-4 my-4 bg-gray-700"
          placeholder="Email"
          ref={emailRef}
        />
        <p className="text-red-700 text-md font-bold">
          {errorMessage?.emailPhone}
        </p>

        <input
          type="password"
          name="password"
          className="p-4 my-4 bg-gray-700"
          placeholder="Password"
          ref={passwordRef}
        />
        <p className="text-red-700 text-md font-bold">
          {errorMessage?.password}
        </p>
        <button
          type="submit"
          className="p-4 my-8 bg-red-700 rounded-lg "
          onClick={handleFormSubmit}
        >
          Sign In
        </button>

        <p className="py-5 cursor-pointer">
          New to Netflix? <Link to="/signup">Sign Up now</Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
