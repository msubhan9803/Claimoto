import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth"
import ClaimLayout from "layouts/claim"
import { Provider } from "react-redux";
import { store, persistor } from "store/store";
import { PersistGate } from 'redux-persist/integration/react'
import NotFound from "views/pages/404/404";
import { registerServiceWorker } from "./register-sw";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import 'loader'
// import 'assets/js/main';
import 'font-awesome/css/font-awesome.min.css';
import history from "utils/history";
import "config/firebase/firebase";
import { ENVIRONMENT } from "variables";
require("jquery-nice-select");




const App = () => {
  if (ENVIRONMENT !== "DEVELOPMENT") {
    navigator.serviceWorker.addEventListener("notificationclick", (message) => {
      console.log(message);
    });
    navigator.serviceWorker.addEventListener("message", (message) => {
      var { data, notification } = message.data;
      toast(({ closeToast }) => <div>  <h6>{notification.title}</h6><small>{notification.body}</small>  </div>, {
        // onClick: () => _navigateToClaim(data.redirect_url)
      });
    });
  }
  
  
  const _navigateToClaim = (redirect_url) => {
    return <Navigate to={redirect_url} />
  }
  

  return (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ToastContainer />
      <Router history={history}>
        <Routes>
          <Route path="/*" element={<AuthLayout />} />
          <Route path="/admin/*" element={<AdminLayout />} />
          <Route path="/claim/*" element={<ClaimLayout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </PersistGate>
  </Provider>
  )
}




ReactDOM.render(<App />, document.getElementById("root"));
