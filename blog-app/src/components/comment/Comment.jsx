import React from "react";

export default function Comment() {
  return (
    <div className="comment-list d-flex mt-3">
      <div className="d-flex align-items-center">
        <img
          src="https://ui-avatars.com/api/?name=hohoka"
          alt="avatar"
          className="rounded-circle"
          width={60}
        />
      </div>
      <div className="comment-item ms-2 rounded-5 overflow-hidden">
        <div className="comment-content px-4 py-2">
          <p className="mb-0 fs-6 fw-bold">id labore ex et quam laborum</p>
          <span className="mb-0 fs-6">
            laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora
            quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam
            sapiente accusantium
          </span>
        </div>
      </div>
    </div>
  );
}
