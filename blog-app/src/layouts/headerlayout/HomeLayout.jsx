import React from "react";
import Home from "../../pages/Home/Home";
import NavBar from "../../pages/Home/NavBar/NavBar";

export default function HomeLayout({ children }) {
  return (
    <>
      <NavBar />
      <div className="container">{children}</div>
    </>
  );
}
