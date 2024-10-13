import axios from "axios";

export function callLoginApi(payload) {
  return axios.post("http://localhost:8080/auth/login", payload, {
    withCredentials: true,
  });
}

export function callSignupApi(payload) {
  return axios.post("http://localhost:8080/auth/signup", payload);
}
