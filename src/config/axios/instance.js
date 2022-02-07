import axios from 'axios';

const instance = axios.create({
    // .. where we make our configurations
    baseURL: 'https://httpbin.org'
});

// 'Authorization' header, etc ...
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';


//Error Handling
instance.interceptors.response.use(
    res => res,
    err => {
      if (err.response.status === 404) {
        throw new Error(`${err.config.url} not found`);
      }
      throw err;
    }
  );


export default instance;