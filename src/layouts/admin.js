import React from "react";
import Sidebar from "components/Sidebar/UserSidebar";
// import ProductNavbar from "components/Admin/ProductNavbar/ProductNavbar";
import DashboardNavbar from "components/Admin/Dashboard/DashboardNavbar/DashboardNavbar";
import { adminRoutes } from "../routes/admin";
import { Route, Routes, } from "react-router-dom";
export default function Layout() {

  let routes = adminRoutes();

  //Creating Routes
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "admin") {
        console.log("Route",prop.layout + prop.path);
        return (
          <Route
            path={`${prop.path}`}
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
