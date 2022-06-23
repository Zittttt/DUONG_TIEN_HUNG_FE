import axios from "axios";

export const DOMAIN = "https://jsonplaceholder.typicode.com/";
export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 30000,
});
