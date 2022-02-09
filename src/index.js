import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth"
import { Provider } from "react-redux";
import { store, persistor } from "store/store";
import { PersistGate } from 'redux-persist/integration/react'
import NotFound from "views/pages/404/404";

const hist = createBrowserHistory();
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={hist}>
        <Routes>
          <Route path="/*" element={<AuthLayout />} />
          <Route path="/admin/*" element={<AdminLayout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
