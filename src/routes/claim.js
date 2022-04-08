//Components

import Dashboard from "views/pages/ClaimOffice/Dashboard/DashBoard";
import TaskList from "views/pages/ClaimOffice/TasksList/TaskList";


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
