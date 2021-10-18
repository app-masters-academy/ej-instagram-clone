import axios from "axios";

const headers = {
  "client-token": process.env.REACT_APP_CLIENT_TOKEN,
  "user-token": localStorage.getItem('accessToken')
};

export const api = axios.create({
  headers: headers,
  baseURL: "https://instagram--clone--api.herokuapp.com",
});
