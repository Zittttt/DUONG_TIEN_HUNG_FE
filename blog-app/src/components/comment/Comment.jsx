import React, { memo } from "react";
import Avatar from "../avatar/Avatar";

function Comment({ comment }) {
  const { name, body } = comment;
  return (
    <div className="comment-list d-flex mt-3 align-items-start">
      <div className="d-flex align-items-center">
        <Avatar name={name} />
      </div>
      <div className="comment-item ms-2 rounded-5 overflow-hidden">
        <div className="comment-content px-4 py-2">
          <p className="mb-0 fs-6 fw-bold">{name}</p>
          <span className="mb-0 fs-6">{body}</span>
        </div>
      </div>
    </div>
  );
}

export default Comment;
