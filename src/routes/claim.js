//Components

import Dashboard from "views/pages/ClaimOffice/Dashboard/DashBoard";
import TaskList from "views/pages/ClaimOffice/TasksList/TaskList";
import Policies from "views/pages/ClaimOffice/Policies/PoliciesData/Policies";
import VehicalDetail from "views/pages/Admin/VehicalDetail/VehicalDetail";
import PoliciesDetail from "views/pages/Admin/Policies/PoliciesDetail/PoliciesDetail";

export const claimRoutes = ({ userPermissions }) => {

    const _checkPer = (msn) => {
        let usr_pre = userPermissions?.find(up => up.ModuleSystemName === msn) || null;
        return usr_pre ? { ModuleActions: usr_pre.ModuleActions.map(ma => ma.ActionName) } : null;
    }

    return [
        {
            name: "Dashboard",
            path: "/",
            component: <Dashboard />,
            icon: "ti-layout",
            layout: "claim",
            short_name: "CD"
        },
        {
            name: "Policies",
            path: "/policies",
            icon: "ti-clipboard",
            layout: "claim",
            collapse: true,
            views: [
              {
                name: "Policies",
                path: "/policies",
                component: <Policies />,
                layout: "claim",
              },
              {
                name: "Policies",
                path: "/policy_detail/:id",
                component: <PoliciesDetail />,
                layout: "claim",
              },
              {
                name: "Policies",
                path: "/vehical_detail/:id",
                component: <VehicalDetail />,
                layout: "claim",
              },
              {
                name: "Policies",
                path: "/vehical_detail_view/:id",
                component: <VehicalDetail />,
                layout: "claim",
              }
            ]
        },
        //_checkPer("APR") &&
        {
            name: "Tasks",
            path: "/tasks",
            component: <TaskList />,
            icon: "ti-layout",
            layout: "claim",
            short_name: "CD"
        },
    ];
};
