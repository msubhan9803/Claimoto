import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth"
import ClaimLayout from "layouts/claim"
import { Provider } from "react-redux";
import { store, persistor } from "store/store";
import { PersistGate } from 'redux-persist/integration/react'
import NotFound from "views/pages/404/404";
// import 'loader'
// import 'assets/js/main';
import 'font-awesome/css/font-awesome.min.css'; 
import history from "utils/history";
import "config/firebase/firebase";
require("jquery-nice-select");


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <Routes>
          <Route path="/*" element={<AuthLayout />} />
          <Route path="/admin/*" element={<AdminLayout />} />
          <Route path="/claim/*" element={<ClaimLayout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
