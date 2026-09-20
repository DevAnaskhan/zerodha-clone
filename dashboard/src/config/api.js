import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

if (!apiUrl) {
  throw new Error(
    "REACT_APP_API_URL is not set. Add it to dashboard/.env for local development or Vercel project settings."
  );
}

export const api = axios.create({
  baseURL: apiUrl.replace(/\/$/, ""),
});
