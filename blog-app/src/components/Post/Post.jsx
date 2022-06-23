import React, { useEffect, useState } from "react";
import Comment from "../comment/Comment";
import { NavLink } from "react-router-dom";
import Avatar from "../avatar/Avatar";
import { useSelector } from "react-redux";
import CommentList from "../comment/CommentList";
import { useLocation } from "react-router-dom";

export default function Post({ post, author }) {
  const { body, title, id } = post;

  const { pathname } = useLocation();

  const authorName = author[0]?.name;

  const renderContent = () => {
    if (pathname.indexOf("/page") != -1) {
      return body.length > 100 ? (
        <p>
          {body.slice(0, 99)}...{" "}
          <NavLink
            to={`/postdetail/${id}`}
            className="text-decoration-none fw-semibold text-light read-more"
          >
            Read more
          </NavLink>
        </p>
      ) : (
        <p>{body}</p>
      );
    } else {
      return <p>{body}</p>;
    }
  };

  return (
    <div className="post card p-5 m-0 mt-3">
      <div className="post-title text-center fs-1 pb-3 fw-semibold">
        {title.toUpperCase()}
      </div>

      <div className="post-info d-flex pb-3">
        <div className="d-flex align-items-center">
          <Avatar name={authorName} />
        </div>
        <div className="name-time ms-2">
          <p className="mb-0 fs-4">{authorName}</p>
          <span className="post-time fs-5">Sep 20, 2018</span>
        </div>
      </div>

      <div className="post-content fs-3 pb-3">{renderContent()}</div>
      <CommentList postId={id} />
    </div>
  );
}
