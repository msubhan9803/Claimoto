import React from "react";
import Sidebar from "components/Sidebar/UserSidebar";
import Navbar from "components/Navbar/UserNavbar";
import { defaultRoutes } from "../routes/default";
import { Route, Routes, } from "react-router-dom";
import "assets/css/layout.css"
export default function Layout() {

  let routes = defaultRoutes();

  //Creating Routes
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/") {
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
    <div className="container">
      <div className="sidebar">
      <Sidebar
        routes={routes}
      />
      </div>
      <div className="wrapper">
      <Navbar />
          <Routes>
            {getRoutes(routes)}
          </Routes>
       
        {/* <Footer />  */}
      </div>
      
    </div>
  );
}
