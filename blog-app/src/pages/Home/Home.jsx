import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../../components/post/Post";
import {
  GET_ALL_POST,
  GET_ALL_POST_API,
  GET_POST_API,
  GET_USER_API,
} from "../../redux/constants/Constants";
import {
  useLocation,
  useNavigate,
  useMatch,
  useParams,
} from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";

export default function Home() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const { page } = useParams();

  useEffect(() => {
    if (pathname === "/") {
      navigate("/page/1");
    }
    dispatch({ type: GET_USER_API });
    dispatch({ type: GET_POST_API, page });
    dispatch({ type: GET_ALL_POST_API });
  }, [page]);

  const { postSearch } = useSelector((state) => state.PostReducer);
  const { userArr } = useSelector((state) => state.UserReducer);

  return (
    <>
      <Pagination />
      <div>
        {postSearch?.map((post, index) => {
          const author = userArr.filter((user) => user.id === post.userId);
          return <Post key={index} post={post} author={author} />;
        })}
      </div>
    </>
  );
}
