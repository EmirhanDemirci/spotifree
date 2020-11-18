import axios from "axios";
import jwt_decode from "jwt-decode";
import { User } from "../models/User";
// import authHeader from "./auth-header";

const API_URL = "http://localhost:9191/";

class AuthService {
  login(username: string, password: string) {
    return axios
      .post(API_URL + "authenticate", {
        username,
        password,
      })
      .then((response) => {
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
          console.log(response.data);
          return response.data;
        }
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username: string, password: string) {
    return axios
      .post(API_URL + "addUser", {
        username,
        password,
      })
      .then((response) => {
        return response.data;
      });
  }

  getCurrentUser() {
    var parsedJson = JSON.parse(localStorage.getItem("user") || "{}");
    var user = new User(jwt_decode(parsedJson));
    console.log(user.claim.sub);
    var request = axios.get(API_URL + "getUser/" + user.claim.sub, {
      headers: {
        Authorization: `Bearer ${parsedJson}`,
      },
    });
    return request;
  }
}

export default new AuthService();
