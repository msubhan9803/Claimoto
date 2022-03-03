import axios from 'axios';
import { msgAlert } from 'functions';
import { localStorageVarible } from 'variables';



const instance = axios.create({
  // .. where we make our configurations
  baseURL: process.env.REACT_APP_API_ENVIROMENT,
  headers: {
    Authorization: `Bearer ${localStorage.getItem(localStorageVarible)}`
  }
});



//Request Handling 
instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem(localStorageVarible);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);



//Error Handling
instance.interceptors.response.use(
  res => res,
  err => {
    if (err.response.status === 500) {

      throw new Error(`${err.config.url} not found`);
    }
    else if (err.response.status === 400) {
      msgAlert({ title: "Invaild Details", text: err.response?.data?.Message || "Server Error" });
    } else if (err.response.status === 400) {
      msgAlert({ title: "Session Expired", text: "Please Login Again to Access System" })
      localStorage.clear();
    }
    throw err;
  }
);


export default instance;