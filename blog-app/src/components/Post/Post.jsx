import React from "react";
import Comment from "../comment/Comment";

export default function Post() {
  return (
    <div className="post card p-5">
      <div className="post-title text-center fs-1 pb-3 fw-semibold">
        {"odit et voluptates doloribus alias odio et".toUpperCase()}
      </div>
      <div className="post-info d-flex pb-3">
        <div className="d-flex align-items-center">
          <img
            src="https://ui-avatars.com/api/?name=hohoka"
            alt="avatar"
            className="rounded-circle"
            width={60}
          />
        </div>
        <div className="name-time ms-2">
          <p className="mb-0 fs-4">Duong Tien Hung</p>
          <span className="post-time fs-5">Sep 20, 2018</span>
        </div>
      </div>
      <div className="post-content fs-3 pb-3">
        {"eest rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla".slice(
          0,
          99
        )}
      </div>
      <div className="comment text-center">
        <p>5 Comments</p>
      </div>
      <Comment />
    </div>
  );
}
