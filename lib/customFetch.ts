// customFetch.ts
import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://fabian-portfolio.net",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

export default customFetch;
