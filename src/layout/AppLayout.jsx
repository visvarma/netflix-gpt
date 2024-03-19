import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header";

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default AppLayout;
