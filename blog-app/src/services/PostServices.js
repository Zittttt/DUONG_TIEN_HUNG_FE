import { http } from "../util/config";

export default class PostServices {
  getPost(page) {
    return http.get(`/posts?_limit=10&_page=${page}`);
  }

  getAllPost() {
    return http.get("/posts");
  }

  getPostDetail(postId) {
    return http.get(`/posts/${postId}`);
  }
}
