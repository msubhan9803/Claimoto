//Components

import Dashboard from "views/pages/ClaimOffice/Dashboard/DashBoard";
import TaskList from "views/pages/ClaimOffice/TasksList/TaskList";
import Policies from "views/pages/ClaimOffice/Policies/PoliciesData/Policies";
import VehicalDetail from "views/pages/Admin/VehicalDetail/VehicalDetail";
import PoliciesDetail from "views/pages/Admin/Policies/PoliciesDetail/PoliciesDetail";
import Claimlist from 'views/pages/ClaimOffice/Policies/ClaimList/ClaimList';
import ClaimDetail from 'views/pages/ClaimOffice/Policies/ClaimDetail/ClaimDetail';
import Call from "views/pages/ClaimOffice/Calls/Call";
import Message from "views/pages/ClaimOffice/Message/Message";
import Agencies from "views/pages/ClaimOffice/Agency/AgencyList/Agencies.js";
import AgencyDetail from "views/pages/ClaimOffice/Agency/AgencyDetail/AgencyDetail.js";

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
                component: <PoliciesDetail type="view" layout="claim" />,
                layout: "claim",
              },
              {
                name: "Policies",
                path: "/vehical_detail/:id",
                component: <VehicalDetail type="view" layout="claim" />,
                layout: "claim",
              },
              {
                name: "Policies",
                path: "/vehical_detail_view/:id",
                component: <VehicalDetail type="view_only" layout="claim" />,
                layout: "claim",
              },
              {
                name: "Policies",
                path: "/claim_list/:policyId",
                component: <Claimlist layout="claim" />,
                layout: "claim",
              },
              {
                name: "Claim Detail",
                path: "/initiate_claim/",
                component: <ClaimDetail type="create" layout="claim" />,
                layout: "claim",
              },
              {
                name: "Claim Detail",
                path: "/claim_detail/:id",
                component: <ClaimDetail type="view" layout="claim" />,
                layout: "claim",
              },
              {
                name: "Claim Detail",
                path: "/edit_claim/:id",
                component: <ClaimDetail type="edit" layout="claim" />,
                layout: "claim",
              }
            ]
        },
        {
            name: "Agencies",
            path: "/agencies",
            icon: "ti-clipboard",
            layout: "claim",
            collapse: true,
            views: [
              {
                name: "Agencies",
                path: "/agencies",
                component: <Agencies />,
                layout: "claim",
              },
              {
                name: "Agency Detail",
                path: "/agency_detail/:id",
                component: <AgencyDetail type="view" layout="claim" />,
                layout: "claim",
              },
              {
                name: "Agency Edit",
                path: "/edit_agency/:id",
                component: <AgencyDetail type="edit" layout="claim" />,
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
        {
          name: "Calls",
          path: "/call",
          component: <Call />,
          icon: "ti-layout",
          layout: "claim",
          short_name: "CD"
      }
    ];
};
