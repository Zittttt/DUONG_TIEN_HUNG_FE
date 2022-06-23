import { http } from "../util/config";

export default class UserServices {
  getUser() {
    return http.get("/users");
  }
}
