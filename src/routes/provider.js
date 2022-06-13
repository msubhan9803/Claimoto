//Components

import Dashboard from "views/pages/Admin/Dashboard/DashBoard";

export const providerRoutes = ({ userPermissions }) => {

   

    return [
        {
            name: "Dashboard",
            path: "/",
            component: <Dashboard />,
            icon: "ti-layout",
            layout: "admin",
            short_name: "AD"
        }
    ];
};
