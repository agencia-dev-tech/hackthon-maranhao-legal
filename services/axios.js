import axios from "axios";

export function getAPIClient() {

  const api = axios.create({
    baseURL: "https://us-central1-maranhao-legal.cloudfunctions.net",
  })
  

  api.interceptors.response.use((response) => {
    // Do something with response data
    return response;

  }, (error) => {
        
    // Do something with response error
    if(error?.response?.data) {
      return Promise.reject(error?.response?.data);
    }
    
    return Promise.reject(error.response);
  });

  return api;
}