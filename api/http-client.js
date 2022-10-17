import axios from "axios";
import User from "../utils/user";

const HttpClient = axios.create({ baseURL: 'https://adocaoappbackend.herokuapp.com/' });

HttpClient.interceptors.request.use(async (config) => {
  const token = await User.getUserToken();
  console.log('token',token)
  const newConfig = { ...config };
  if (token) {
    newConfig.headers.Authorization = `Bearer ${token}`;
  }
  return newConfig;
});

export default HttpClient;
