import React, { useRef, useState } from "react";

import { BG_URL, USER_AVATAR } from "../utils/constants";
import Header from "../components/Header/Header";
import { MovieCard } from "../components/MovieCard/MovieCard";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef("");
  const password = useRef("");
  const name = useRef("");

  const toggleSiginForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    //validate from
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + "-" + errorCode);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(userCredential);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorMessage + "-" + errorCode);
        });
    }
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

      <form className="w-3/4 sm:w-6/12 md:w-1/3 lg:w-1/4 px-12 py-8 bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white rounded-lg bg-opacity-80 flex flex-col ">
        <h1 className="font-bold text-xl text-white px-2 py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            type="text"
            name="fullname"
            className="p-4 my-4 bg-gray-700"
            placeholder="FullName"
            ref={name}
          />
        )}
        <input
          type="text"
          name="email"
          className="p-4 my-4 bg-gray-700"
          placeholder="Email"
          ref={email}
        />
        <input
          type="password"
          name="password"
          className="p-4 my-4 bg-gray-700"
          placeholder="Password"
          ref={password}
        />
        <p className="text-red-700 text-md font-bold">{errorMessage}</p>
        <button
          type="submit"
          className="p-4 my-8 bg-red-700 rounded-lg "
          onClick={handleFormSubmit}
        >
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
