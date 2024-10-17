import axios from "axios";

export function callGetGroupsApi() {
  return axios.get("http://localhost:8080/group/me", {
    // send cookies when cross-domain requests
    withCredentials: true,
  });
}
