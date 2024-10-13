import axios from "axios";

export function callGetGroupsApi(userId) {
  return axios.get("http://localhost:8080/group/user/" + userId, {
    // send cookies when cross-domain requests
    withCredentials: true,
  });
}
