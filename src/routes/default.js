//Components

import Dashboard from 'views/pages/Admin/Dashboard/DashBoard'
import Product from 'views/pages/Admin/Product/Products/Product'
import Policies from 'views/pages/Admin/Policies/PoliciesData/Policies'
import Provider from 'views/pages/Admin/Provider/Provider'
import Vihicle from 'views/pages/Admin/Vihicle/Vihicle'
import UserManagement from 'views/pages/Admin/UserManagement/UserManagement'
import Setting from 'views/pages/Admin/Setting/Setting'
import ProductDetail from 'views/pages/Admin/Product/ProductDetail/ProductDetail'

export const defaultRoutes = () => {
  return [
    {
        name: "Dashboard",
        path:"/default",
        component: <Dashboard />,
        icon:"ti-layout",
        layout: "/default",
    },
    {
        name: "Products",
        path:"/products",
        component: <Product />,
        icon:"ti-file",
        layout: "/",
    },
    {
        name: "Policies",
        path:"/policies",
        component: <Policies />,
        icon:"ti-clipboard",
        layout: "/",
    },
    {
        name: "Providers",
        path:"/provider",
        component: <Provider />,
        icon:"ti-server",
        layout: "/",
    },
   {
        name: "Vehicle parts",
        path:"/vihicle_parts",
        component: <Vihicle />,
        icon: "ti-envelope",
        layout: "/",
    },{
        name: "User management",
        path:"/user_management",
        component: <UserManagement />,
        icon: "ti-user",
        layout: "/",
    },{
        name: "Settings",
        path:"/settings",
        component: <Setting />,
        icon: "ti-settings",
        layout: "/",
    },
    {
        name: "Product Detail",
        path:"/product_detail",
        component: <ProductDetail />,
        icon: "ti-settings",
        layout: "/",
    },
];
};
