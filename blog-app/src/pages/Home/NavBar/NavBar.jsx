import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const dispatch = useDispatch();
  const { postArr } = useSelector((state) => state.PostReducer);
  const { postPerPage } = useSelector((state) => state.PostReducer);

  const searchPost = (keyword) => {
    let result = postPerPage;
    if (keyword) {
      result = postArr.filter((post) => post.title.indexOf(keyword) !== -1);
    }
    console.log(result);
    dispatch({ type: "SEARCH_POST", value: result });
  };

  const searchRef = useRef();

  return (
    <>
      <nav className="navbar sticky-top shadow">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/page/1">
            <img
              src="https://zigvy.com/wp-content/uploads/2017/12/zigvy-logo.svg"
              alt="logo"
            />
          </NavLink>
          <form
            className="d-flex"
            role="search"
            onSubmit={(e) => {
              e.preventDefault();
              searchPost(searchRef.current?.value);
            }}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              ref={searchRef}
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
