/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { LOGO, SUPPORTED_LANGUAGES } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { addUser, removeuser } from "../../store/slices/userSlice";
import { toggleGptSearchView } from "../../store/slices/gptSlice";
import { changeLanguage } from "../../store/slices/configSlice";
import { PAGE } from "../../utils/routes";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const [openMenu, setOpenMenu] = useState(false);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div
      className="fixed top-0 z-50 w-full flex items-center justify-between gap-4 px-4 md:px-20 py-3 bg-gradient-to-b from-black"
      style={{ zIndex: 500 }}
    >
      <div className="flex items-center gap-5">
        <Link to="/browse">
          <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
        </Link>
        <div className="gap-6 ml-4 text-white text-sm hidden lg:flex">
          <Link
            to={PAGE.BROWSE}
            className="hover:text-gray-400 text-sm xl:text-lg"
          >
            Home
          </Link>
          <Link
            to={PAGE.SHOWS}
            className="hover:text-gray-400  text-sm xl:text-lg"
          >
            TV Show
          </Link>
          <Link
            to={PAGE.MOVIES}
            className="hover:text-gray-400 text-sm xl:text-lg"
          >
            Movies
          </Link>
          <Link
            to={PAGE.LATEST}
            className="hover:text-gray-400 text-sm xl:text-lg"
          >
            New & Popular
          </Link>
        </div>
      </div>

      <div className="hidden lg:block">
        {user && (
          <div className="flex p-2 justify-between gap-4 items-center">
            {showGptSearch && (
              <select
                className="p-2  bg-gray-900 text-white"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <Link
              to="/search"
              className="py-2 px-4  my-2 font-bold text-white rounded-lg flex gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              GPT Search
            </Link>
            <img
              className="hidden md:block w-12 h-12"
              alt="usericon"
              src={user?.photoURL}
            />
            <button
              onClick={handleSignOut}
              className="font-bold text-white "
              title="Logout"
            >
              <LoginOutlinedIcon />
            </button>
          </div>
        )}
      </div>
      {user && (
        <div className="lg:hidden flex justify-end items-center">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            class="navbar-burger lg:hidden flex items-center text-white p-3"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <svg
              class="block h-6 w-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
      )}

      {openMenu && (
        <div class="lg:hidden navbar-menu relative z-50 bg-black opacity-95 transition-all delay-150 duration-300">
          <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav class="fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-black border-r overflow-y-auto">
            <div class="flex items-center mb-8 justify-between">
              <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
              <button class="navbar-close" onClick={() => setOpenMenu(false)}>
                <svg
                  class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <Link to="/search">
                  <li class="mb-6 text-xl text-white cursor-pointer">
                    GPT Search
                  </li>
                </Link>

                <Link to={PAGE.BROWSE} className="hover:text-gray-400">
                  <li class="mb-6 text-xl text-white cursor-pointer"> Home</li>
                </Link>
                <Link to={PAGE.SHOWS} className="hover:text-gray-400">
                  <li class="mb-6 text-xl text-white cursor-pointer">
                    {" "}
                    TV Show
                  </li>
                </Link>
                <Link to={PAGE.MOVIES} className="hover:text-gray-400">
                  <li class="mb-6 text-xl text-white cursor-pointer">
                    {" "}
                    Movies
                  </li>
                </Link>
                <Link to={PAGE.LATEST} className="hover:text-gray-400">
                  <li class="mb-6 text-xl text-white cursor-pointer">
                    New & Popular
                  </li>
                </Link>
                <li class="mb-6 text-xl text-white">
                  <button onClick={handleSignOut} className="font-bold ">
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
            <div class="mt-auto">
              <p class="my-4 text-xs text-center text-gray-400">
                <span>Copyright © 2021</span>
              </p>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
