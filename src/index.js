import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth"
import ClaimLayout from "layouts/claim"
import { Provider } from "react-redux";
import { store, persistor } from "store/store";
import { PersistGate } from 'redux-persist/integration/react'
import NotFound from "views/pages/404/404";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import 'loader'
// import 'assets/js/main';
import 'font-awesome/css/font-awesome.min.css';
import history from "utils/history";
import "config/firebase/firebase";
import { ENVIRONMENT } from "variables";
import NotificationRedirect from "functions/notifications";
require("jquery-nice-select");



const App = () => {

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
