import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="navbar sticky-top shadow">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              src="https://zigvy.com/wp-content/uploads/2017/12/zigvy-logo.svg"
              alt="logo"
            />
          </NavLink>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
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
