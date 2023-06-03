/** @format */

import axios from "axios";

export const api = axios.create({
  // baseURL: `https://sentiment-backend-muhasim.up.railway.app`,
  // baseURL: `https://muhasim-zapperdax.vercel.app/`,
  baseURL: `http://localhost:2533`,
});
