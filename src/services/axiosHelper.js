import axios from "axios";

axios.defaults.baseURL = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2";

axios.interceptors.request.use((config) => {
  const localStorageToken = localStorage.getItem("token");
  const sessionStorageToken = sessionStorage.getItem("token");
  
  const token = localStorageToken || sessionStorageToken;

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
});
