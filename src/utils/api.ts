import axios from "axios";

export const getApi = async (config: any) =>
  await axios({ ...config, method: "GET" });
