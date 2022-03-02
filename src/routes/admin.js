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
import AddProvider from 'components/Admin/Providers/AddProvider'
import VehicleParts from 'views/pages/Admin/VehicleParts'
import VehiclePartManage from 'views/pages/Admin/VehicleParts/VehiclePartManage'

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
            icon: "ti-server",
            layout: "admin",
            collapse: true,
            views: [
                {
                    name: "Providers",
                    path: "/provider",
                    component: <Provider />,
                    layout: "admin",
                },
                {
                    name: "Add Provider",
                    path: "/add_provider/:type",
                    component: <AddProvider />,
                    layout: "admin",
                },
                {
                    name: "Edit Provider",
                    path: "/edit_provider/:type/:id",
                    component: <AddProvider />,
                    layout: "admin",
                },
            ]
        },
        {
            name: "Vehicle parts",
            path: "/vehicle_parts",
            icon: "ti-envelope",
            layout: "admin",
            collapse: true,
            views: [
                {
                    name: "Vehical Parts",
                    path: "/vehicle_parts",
                    component: <VehicleParts />,
                    layout: "admin",
                },
                {
                    name: "Vehical Detail",
                    path: "/vehicle_parts/vehical_detail/:vehicleId",
                    component: <VehiclePartManage />,
                    layout: "admin",
                },
                {
                    name: "Add Vehical Detail",
                    path: "/vehicle_parts/add_vehical_detail",
                    component: <VehiclePartManage />,
                    layout: "admin",
                },
            ]
        },
        {
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
            name: "",
            path: "/product_detail/:id",
            component: <ProductDetail />,
            layout: "admin"
        },
        {
            name: "",
            path: "/create_policy",
            component: <PoliciesDetail />,
            layout: "admin"
        },
        {
            name: "",
            path: "/policy_detail/:id",
            component: <PoliciesDetail />,
            layout: "admin"
        },
        {
            name: "",
            path: "/policy_detail_edit/:id",
            component: <PoliciesDetail />,
            layout: "admin"
        },
        {
            name: "",
            path: "/create_vehical",
            component: <VehicalDetail />,
            layout: "admin"
        },
        {
            name: "",
            path: "/vehical_detail/:id",
            component: <VehicalDetail />,
            layout: "admin"
        },
        {
            name: "",
            path: "/vehical_detail_edit/:id",
            component: <VehicalDetail />,
            layout: "admin"
        }
    ];
};


// <Route path="/create_product" element={<ProductDetail/>}/>
//           <Route path="/product_detail/:id" element={<ProductDetail/>}/>
//           <Route path="/products" element={<Products/>}/>
//           <Route path="/create_policies" element={<PoliciesDetail/>}/>
//           <Route path="/policies_details/:id" element={<PoliciesDetail/>}/>
//           <Route path="/create_vehical" element={<VehicalDetail/>}/>
//           <Route path="/vehical_details/:id" element={<VehicalDetail/>}/>