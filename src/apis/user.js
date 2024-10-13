import axios from "axios";

export function callGetLoggedInUserApi() {
  return axios.get("http://localhost:8080/user/me", {
    withCredentials: true,
  });
}
