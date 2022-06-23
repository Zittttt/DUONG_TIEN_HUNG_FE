import React, { memo } from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

function Pagination() {
  const { page } = useParams();

  return (
    <nav
      aria-label="Page navigation example"
      className="d-flex flex-row-reverse align-items-center mt-3"
    >
      <ul className="pagination mb-0" id="page">
        <li className="page-item">
          <NavLink
            className="page-link"
            to={Number(page) > 1 ? `/page/${Number(page) - 1}` : "#"}
            aria-label="Previous"
          >
            <span aria-hidden="true">«</span>
          </NavLink>
        </li>
        <li className="page-item">
          <NavLink className="page-link" to="/page/1">
            1
          </NavLink>
        </li>
        <li className="page-item">
          <NavLink className="page-link" to="/page/2">
            2
          </NavLink>
        </li>
        <li className="page-item">
          <NavLink className="page-link" to="/page/3">
            3
          </NavLink>
        </li>
        <li className="page-item">
          <NavLink className="page-link" to="/page/4">
            4
          </NavLink>
        </li>
        <li className="page-item">
          <NavLink className="page-link" to="/page/5">
            5
          </NavLink>
        </li>
        <li className="page-item">
          <NavLink className="page-link" to="/page/6">
            6
          </NavLink>
        </li>
        <li className="page-item">
          <NavLink className="page-link" to="/page/7">
            7
          </NavLink>
        </li>
        <li className="page-item">
          <NavLink className="page-link" to="/page/8">
            8
          </NavLink>
        </li>
        <li className="page-item">
          <NavLink className="page-link" to="/page/9">
            9
          </NavLink>
        </li>
        <li className="page-item">
          <NavLink className="page-link" to="/page/10">
            10
          </NavLink>
        </li>
        <li className="page-item">
          <NavLink
            className="page-link"
            to={Number(page) < 10 ? `/page/${Number(page) + 1}` : "#"}
            aria-label="Next"
          >
            <span aria-hidden="true">»</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default memo(Pagination);
