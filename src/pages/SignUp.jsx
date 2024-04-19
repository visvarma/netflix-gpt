import React, { useRef, useState } from "react";
import { BG_URL } from "../utils/constants";
import validateCredentials from "../utils/validate";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signupService } from "../auth/signup";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlice";
import Header from "../components/Header/Header";

const SignUp = () => {
  const location = useLocation();
  console.log(location.pathname);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const nameRef = useRef("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState("");
  const [authError, setAuthError] = useState(null);
  const [loadingBtn, setLoadingBtn] = useState();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    //validate from
    const validationError = validateCredentials(
      emailRef.current.value,
      passwordRef.current.value,
      confirmPasswordRef.current.value
    );
    setErrorMessage(validationError);
    if (validationError) return;

    const userCredential = await signupService(
      emailRef.current.value,
      passwordRef.current.value,
      nameRef.current.value
    );

    let errorMessage = null;
    console.log(userCredential?.error?.code);
    if (userCredential?.error?.code) {
      switch (userCredential?.error?.code) {
        case "auth/email-already-in-use":
          errorMessage = "Email you provided is already registered.";
          break;

        default:
          errorMessage = "Something went wrong with your credentials.";
          break;
      }
    }
    setAuthError(errorMessage);
    setLoadingBtn(false);

    if (userCredential?.error) return;

    // navigate("/");
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
        <h1 className="font-bold text-xl text-white px-2 py-4 mx-auto">
          Sign Up
        </h1>
        {authError && (
          <p className="p-3 bg-[#e87c03] text-white text-xs rounded-md mb-5">
            {authError}
          </p>
        )}
        <input
          type="text"
          name="fullname"
          className="p-4 my-4 bg-gray-700"
          placeholder="FullName"
          ref={nameRef}
        />

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
        <input
          type="password"
          name="password"
          className="p-4 my-4 bg-gray-700"
          placeholder="Password"
          ref={confirmPasswordRef}
        />
        <p className="text-red-700 text-md font-bold">
          {errorMessage?.confirmPassword}
        </p>
        <button
          onClick={handleFormSubmit}
          disabled={loadingBtn ? true : false}
          className="flex items-center justify-center px-4 py-3 mt-4 bg-red-700 text-white w-full rounded-[4px] disabled:bg-red-800"
        >
          {loadingBtn ? (
            <div className="w-5 h-5 border-t m-[2px] border-gray-300 border-solid rounded-full animate-spin"></div>
          ) : (
            "Sign Up"
          )}
        </button>

        <p className="py-5 cursor-pointer">
          Already Have an account? <Link to="/">Sign In now</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
