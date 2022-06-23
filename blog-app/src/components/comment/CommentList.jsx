import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GET_COMMENT } from "../../redux/constants/Constants";
import { http } from "../../util/config";
import Comment from "./Comment";

export default function CommentList({ postId }) {
  const [toggleComment, setToggleComment] = useState(false);

  const dispatch = useDispatch;

  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await http.get(`/comments?postId=${postId}`);
        setCommentList(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div
        className="comment-count text-center"
        onClick={() => {
          setToggleComment((preState) => {
            let toggleStatus = !toggleComment;
            return toggleStatus;
          });
        }}
      >
        <p>{`${commentList.length} ${
          commentList.length > 1 ? "Comments" : "Comment"
        }`}</p>
      </div>

      {toggleComment
        ? commentList.map((comment, index) => {
            return <Comment comment={comment} key={index} />;
          })
        : ""}
    </>
  );
}
