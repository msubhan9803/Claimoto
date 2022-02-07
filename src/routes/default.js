//Components
import Home from "views/pages/Home/Home"
import Test from "views/pages/Test/Test";

export const defaultRoutes = () => {
  return [
    {
        name: "Dashboard",
        path:"/dashboard",
        component: <Home />,
        icon:"ti-layout",
        layout: "/default",
    },
    {
        name: "Products",
        path:"/dashboar",
        component: <Test />,
        icon:"ti-file",
        layout: "/default",
    },
    {
        name: "Policies",
        path:"/dashboar",
        component: <Test />,
        icon:"ti-clipboard",
        layout: "/default",
    },
    {
        name: "Providers",
        path:"/dashboar",
        component: <Test />,
        icon:"ti-server",
        layout: "/default",
    },
   {
        name: "Vehicle parts",
        path:"/dashboar",
        component: <Test />,
        icon: "ti-envelope",
        layout: "/default",
    },{
        name: "User management",
        path:"/dashboar",
        component: <Test />,
        icon: "ti-user",
        layout: "/default",
    },{
        name: "Settings",
        path:"/register",
        component: <Test />,
        icon: "ti-settings",
        layout: "/default",
    },
];
};
