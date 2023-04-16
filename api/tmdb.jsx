import axios from "axios";
import { useContext } from "react";
import { MovieDashBoardContext } from "../src/contexts/MovieDashBoardContext";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
  },
  params: {
    api_key: "951a265e3ef47c76b1be4410641ac67e",
  },
});
