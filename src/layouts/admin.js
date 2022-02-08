import React from "react";
import Sidebar from "components/Sidebar/UserSidebar";
// import ProductNavbar from "components/Admin/ProductNavbar/ProductNavbar";
import DashboardNavbar from "components/Admin/Dashboard/DashboardNavbar/DashboardNavbar";
import { defaultRoutes } from "../routes/default";
import { Route, Routes, } from "react-router-dom";
export default function Layout() {

  let routes = defaultRoutes();

  //Creating Routes
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/default") {
        return (
          <Route
            path={prop.layout + prop.path}
            element={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };



  return (
    <div className="body-wrapper">
      <Sidebar
        routes={routes}
      />
      <div className="ltn__utilize-overlay" />

      <div className="body-content-area body-bg-1 pb-80---">
        <DashboardNavbar/>
        <Routes>
          {getRoutes(routes)}
        </Routes>

        {/* <Footer /> */}
      </div>

    </div>
  );
}
