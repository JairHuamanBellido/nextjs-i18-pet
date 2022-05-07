import axios from "axios";

const HttpClient = axios.create({
  baseURL: "http://localhost:1337/api",
});

export { HttpClient };
