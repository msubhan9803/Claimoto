import React, { useEffect, useState } from "react";
import Sidebar from "components/Sidebar/UserSidebar";
import UserNavbar from "components/Navbar/UserNavbar/UserNavbar";
import DashboardNavbar from "components/Admin/Dashboard/DashboardNavbar/DashboardNavbar";
import { adminRoutes } from "../routes/admin";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NotFound from "views/pages/404/404";
import ProductDetail from "views/pages/Admin/Product/ProductDetail/ProductDetail";
export default function Layout() {

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
    <div className="body-wrapper">
      <Sidebar
        routes={routes}
        activeRoute={location.pathname}
      />
      <div className="ltn__utilize-overlay" />

      <div className="body-content-area body-bg-1 pb-80---">
        {location.pathname === '/admin/' ?
          <DashboardNavbar />
          :
            <UserNavbar />
        }

        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<NotFound />} />
          <Route path="/product_detail" element={<ProductDetail/>}/>
          <Route path="/product_detail/:id" element={<ProductDetail/>}/>
        </Routes>

        {/* <Footer /> */}
      </div>

    </div>
  );
}
