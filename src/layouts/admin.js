import React from "react";
import Sidebar from "components/Sidebar/UserSidebar";
import UserNavbar from "components/Navbar/UserNavbar/UserNavbar";
import DashboardNavbar from "components/Admin/Dashboard/DashboardNavbar/DashboardNavbar";
import { adminRoutes } from "../routes/admin";
import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "views/pages/404/404";
import ProductDetail from "views/pages/Admin/Product/ProductDetail/ProductDetail";
import PoliciesDetail from "views/pages/Admin/Policies/PoliciesDetail/PoliciesDetail";
import VehicalDetail from "views/pages/Admin/Vehicle/VehicalDetail/VehicalDetail";
import Products from "views/pages/Admin/Product/Products/Products";
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
          <Route path="/create_product" element={<ProductDetail/>}/>
          <Route path="/product_detail/:id" element={<ProductDetail/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/create_policies" element={<PoliciesDetail/>}/>
          <Route path="/policies_details/:id" element={<PoliciesDetail/>}/>
          <Route path="/create_vehical" element={<VehicalDetail/>}/>
          <Route path="/vehical_details/:id" element={<VehicalDetail/>}/>
          
        </Routes>

        {/* <Footer /> */}
      </div>

    </div>
  );
}
