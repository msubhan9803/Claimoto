import axios from 'axios';
import SessionExpired from 'components/SessionExpired/SessionExpired';
import { confirmAlert } from 'functions';
import { msgAlert } from 'functions';
import history from 'utils/history';
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
  res => {
    try {
      //If Response Obj Implemented
      if (res.data.status) {
        //If Status is 200
        if (res.data.status === 200) {
          //If Not Getting Data
          if (res.data.data !== null) {
            //Returing Data
            return { data: res.data?.data };
          } else {
            //Returning Message
            return { data: res.data?.message };
          }
        } else {
          //Response Obj not Implemented
          msgAlert({ title: "Server Error", text: res.data?.message || "API Error Contact Support" });
        }
      } else {
        return res;
      }
    } catch {
      return res;
    }
  },
  err => {
    if (err.response.status === 500) {
      msgAlert({ title: "Server Error", text: err.response?.data?.Message || "Server Error" });

      // throw new Error(`${err.config.url} not found`);
    }

    else if (err.response.status === 400) {
      msgAlert({ title: "Invaild Details", text: err.response?.data?.Message || "Server Error" });
    }
    //Session Clear
    else if (err.response.status === 401) {
      confirmAlert({
        title: "Session Expired", text: "Please Login Again to Access System", buttonText: "Back to Login", action: () => {
          localStorage.clear();
          window.location = "/";
        }, notCancelButton: true
      });

    }
    throw err;
  }
);


export default instance;