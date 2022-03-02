import React from "react";
import Sidebar from "components/Sidebar/UserSidebar";
import UserNavbar from "components/Navbar/UserNavbar/UserNavbar";
import DashboardNavbar from "components/Admin/Dashboard/DashboardNavbar/DashboardNavbar";
import { adminRoutes } from "../routes/admin";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "views/pages/404/404";

export default function Layout() {
  const { token } = useSelector((state) => state.authReducer);
  let routes = adminRoutes();
  let location = useLocation();

  //Creating Routes
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "admin") {
        return (
          <Route
            path={`${prop.path}`}
            index={prop.path == "/" ? true : false}
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
    <>
      {!token ? (
        <Navigate to="/" />
      ) : (
        <div className="body-wrapper">
          <Sidebar routes={routes} activeRoute={location.pathname} />
          <div className="ltn__utilize-overlay" />

          <div className="body-content-area body-bg-1 pb-80---">
            {location.pathname === "/admin/" ? (
              <DashboardNavbar />
            ) : (
              <UserNavbar />
            )}

            <Routes>
              {getRoutes(routes)}
              <Route path="*" element={<NotFound />} />
            </Routes>

            {/* <Footer /> */}
          </div>
        </div>
      )}
    </>
  );
}
