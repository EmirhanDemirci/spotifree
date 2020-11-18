import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:9191/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "getUser", { headers: authHeader() });
  }
}

export default new UserService();
