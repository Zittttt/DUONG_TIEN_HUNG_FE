import React from "react";
import Post from "../../components/Post/Post";
import NavBar from "./NavBar/NavBar";

export default function Home() {
  return (
    <>
      <div className="container" style={{ height: "2000px" }}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
}
