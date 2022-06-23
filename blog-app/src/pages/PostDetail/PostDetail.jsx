import React, { memo, useEffect } from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Post from "../../components/post/Post";
import {
  GET_POST_DETAIL_API,
  GET_USER_API,
} from "../../redux/constants/Constants";

function PostDetail(props) {
  const dispatch = useDispatch();

  const { postId } = useParams();

  const id = useMemo(() => postId, [postId]);

  useEffect(() => {
    dispatch({ type: GET_POST_DETAIL_API, postId: id });
    dispatch({ type: GET_USER_API });
  }, []);

  const { postDetail } = useSelector((state) => state.PostReducer);
  const { userArr } = useSelector((state) => state.UserReducer);

  const author = userArr.filter((user) => user.id === postDetail.userId);

  return <Post post={postDetail} author={author} />;
}

export default memo(PostDetail);
