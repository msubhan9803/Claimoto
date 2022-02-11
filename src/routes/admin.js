//Components

import Dashboard from 'views/pages/Admin/Dashboard/DashBoard'
import Product from 'views/pages/Admin/Product/Products/Product'
import Policies from 'views/pages/Admin/Policies/PoliciesData/Policies'
import Provider from 'views/pages/Admin/Provider/Provider'
import Vehicle from 'views/pages/Admin/Vehicle/Vehicle'
import UserManagement from 'views/pages/Admin/UserManagement/UserManagement'
import Setting from 'views/pages/Admin/Setting/Setting'
import ProductDetail from 'views/pages/Admin/Product/ProductDetail/ProductDetail'
import NotFound from 'views/pages/404/404'
import DragAndDrop from 'components/DragAndDrop/DrapAndDrop'

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
            component: <Product />,
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
            name: "Product Detail",
            path: "/product_detail",
            component: <ProductDetail />,
            icon: "ti-settings",
            layout: "admin",
        },
        {
            name:"Test Route",
            path:"/test_route",
            component: <DragAndDrop />,
            icon: "ti-settings",
            layout: "admin"
        }
    ];
};
