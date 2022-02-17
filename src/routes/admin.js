//Components

import Dashboard from 'views/pages/Admin/Dashboard/DashBoard'
import Products from 'views/pages/Admin/Product/Products/Products'
import Policies from 'views/pages/Admin/Policies/PoliciesData/Policies'
import Provider from 'views/pages/Admin/Provider/Provider'
import Vehicle from 'views/pages/Admin/Vehicle/Vehicle'
import UserManagement from 'views/pages/Admin/UserManagement/UserManagement'
import Setting from 'views/pages/Admin/Setting/Setting'
import ProductDetail from 'views/pages/Admin/Product/ProductDetail/ProductDetail'
import VehicalDetail from "views/pages/Admin/Vehicle/VehicalDetail/VehicalDetail";
import PoliciesDetail from "views/pages/Admin/Policies/PoliciesDetail/PoliciesDetail";

// import NotFound from 'views/pages/404/404'
// import DragAndDrop from 'components/DragAndDrop/DrapAndDrop'

export const adminRoutes = () => {
    return [
        {
            name: "Dashboard",
            path: "/",
            component: <Dashboard />,
            icon: "ti-layout",
            layout: "admin",
        },
        {
            name: "Products",
            path: "/products",
            component: <Products />,
            icon: "ti-file",
            layout: "admin",
        },
        {
            name: "Policies",
            path: "/policies",
            component: <Policies />,
            icon: "ti-clipboard",
            layout: "admin",
        },
        {
            name: "Providers",
            path: "/provider",
            component: <Provider />,
            icon: "ti-server",
            layout: "admin",
        },
        {
            name: "Vehicle parts",
            path: "/vehicle_parts",
            component: <Vehicle />,
            icon: "ti-envelope",
            layout: "admin",
        }, {
            name: "User management",
            path: "/user_management",
            component: <UserManagement />,
            icon: "ti-user",
            layout: "admin",
        }, {
            name: "Settings",
            path: "/settings",
            component: <Setting />,
            icon: "ti-settings",
            layout: "admin",
        },
        {
            name: "",
            path: "/create_product",
            component: <ProductDetail />,
            layout: "admin",
        },
        {
            name:"",
            path:"/product_detail/:id",
            component: <ProductDetail />,
            layout: "admin"
        },
        {
            name:"",
            path:"/create_policy",
            component: <PoliciesDetail />,
            layout: "admin"
        },
        {
            name:"",
            path:"/policy_detail/:id",
            component: <PoliciesDetail />,
            layout: "admin"
        },
        {
            name:"",
            path:"/create_vehical",
            component: <VehicalDetail />,
            layout: "admin"
        },
        {
            name:"",
            path:"/vehical_detail/:id",
            component: <VehicalDetail />,
            layout: "admin"
        },
       
    ];
};


// <Route path="/create_product" element={<ProductDetail/>}/>
//           <Route path="/product_detail/:id" element={<ProductDetail/>}/>
//           <Route path="/products" element={<Products/>}/>
//           <Route path="/create_policies" element={<PoliciesDetail/>}/>
//           <Route path="/policies_details/:id" element={<PoliciesDetail/>}/>
//           <Route path="/create_vehical" element={<VehicalDetail/>}/>
//           <Route path="/vehical_details/:id" element={<VehicalDetail/>}/>