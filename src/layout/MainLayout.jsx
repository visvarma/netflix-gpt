import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { addUser, removeuser } from "../store/slices/userSlice";
import Spinner from "../components/Spinner";
import AppLayout from "./AppLayout";
import AuthLayout from "./AuthLayout";
import { auth } from "../utils/firebase";
import { setAuthenticated } from "../store/slices/authSlice";

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        const { uid, displayName, email, photoURL, phoneNumber } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            photoURL: photoURL,
            email: email,
            phoneNumber: phoneNumber,
          })
        );
        console.log("in auth state change ");
        dispatch(setAuthenticated(true));
        // console.log('signed in')
      } else {
        // console.log('signed out')
        dispatch(setAuthenticated(false));
        dispatch(removeuser());
      }
    });

    // Unsubscribe when component unmounted
    return () => unsubscribe();
  }, []);

  const isLogged = useSelector((store) => store.authenticated);
  if (isLogged === null) return <Spinner />;

  return isLogged ? (
    <AppLayout>{<Outlet />}</AppLayout>
  ) : (
    <AuthLayout>{<Outlet />}</AuthLayout>
  );
};

export default MainLayout;
