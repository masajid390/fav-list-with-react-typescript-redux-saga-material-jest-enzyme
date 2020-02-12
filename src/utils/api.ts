import axios from "axios";

export const getApi = async (config: any) =>
  await axios({ ...config, baseURL: process.env.REACT_APP_BASE_URL, method: "GET" });
