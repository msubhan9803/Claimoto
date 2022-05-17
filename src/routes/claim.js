//Components

import Dashboard from "views/pages/ClaimOffice/Dashboard/DashBoard";
import TaskList from "views/pages/ClaimOffice/TasksList/TaskList";
import Policies from "views/pages/ClaimOffice/Policies/PoliciesData/Policies";
import VehicalDetail from "views/pages/Admin/VehicalDetail/VehicalDetail";
import PoliciesDetail from "views/pages/Admin/Policies/PoliciesDetail/PoliciesDetail";
import Claimlist from "views/pages/ClaimOffice/Policies/ClaimList/ClaimList";
import ClaimDetail from "views/pages/ClaimOffice/Policies/ClaimDetail/ClaimDetail";
import Call from "views/pages/ClaimOffice/Calls/Call";
import Message from "views/pages/ClaimOffice/Message/Message";
import Agencies from "views/pages/ClaimOffice/Agency/AgencyList/Agencies.js";
import AgencyDetail from "views/pages/ClaimOffice/Agency/AgencyDetail/AgencyDetail.js";
import Garage from "views/pages/ClaimOffice/Garage/GarageList/Garages";
import Surveyor from "views/pages/ClaimOffice/Surveyor/SurveyorList/Surveyor";
import ClaimAssignToProvider from "components/ClaimOffice/ClaimActions/ClaimAssignToProvider";
import ClaimAssignToBranch from "components/ClaimOffice/ClaimActions/ClaimAssignToBranch";
import ViewProvider from "components/Admin/Providers/ViewProvider";
import ScheduledCallList from "views/pages/ClaimOffice/ScheduledCalls/ScheduledCalls";

export const claimRoutes = ({ userPermissions }) => {
  const _checkPer = (msn) => {
    let usr_pre =
      userPermissions?.find((up) => up.ModuleSystemName === msn) || null;
    return usr_pre
      ? { ModuleActions: usr_pre.ModuleActions.map((ma) => ma.ActionName) }
      : null;
  };

  return [
    {
      name: "Dashboard",
      path: "/",
      component: <Dashboard />,
      icon: "ti-layout",
      layout: "claim",
      short_name: "CD",
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
        },
      ],
    },
    {
      name: "Agency",
      path: "/agencies",
      icon: "ti-clipboard",
      layout: "claim",
      collapse: true,
      views: [
        {
          name: "Agency",
          path: "/agencies",
          component: <Agencies />,
          layout: "claim",
        },
        {
          name: "Agency Detail",
          path: "/agencies/agency_detail/:id",
          component: <AgencyDetail type="view" layout="claim" />,
          layout: "claim",
        },
      ],
    },
    {
      name: "Garage",
      path: "/garage",
      icon: "ti-clipboard",
      layout: "claim",
      collapse: true,
      views: [
        {
          name: "Garage",
          path: "/garage",
          component: <Garage />,
          layout: "claim",
        },
        {
          name: "Garage Detail",
          path: "/garage/garage_detail/:id",
          component: <AgencyDetail type="view" layout="claim" />,
          layout: "claim",
        },
      ],
    },
    {
      name: "Surveyor list",
      path: "/surveyor",
      icon: "ti-clipboard",
      layout: "claim",
      collapse: true,
      views: [
        {
          name: "Surveyor",
          path: "/surveyor",
          component: <Surveyor />,
          layout: "claim",
        },
        {
          name: "Surveyor Detail",
          path: "/surveyor_detail/:id",
          component: <AgencyDetail type="view" layout="claim" />,
          layout: "claim",
        },
      ],
    },
    //_checkPer("APR") &&
    {
      name: "Tasks",
      icon: "ti-layout",
      layout: "claim",
      path: "/tasks",
      short_name: "CD",
      collapse: true,
      views: [
        {
          name: "Tasks List",
          path: "/tasks",
          component: <TaskList />,
          layout: "claim",
        },
        {
          name: "Assign To Provider",
          path: "/assign_to_provider/:id/:claim_id",
          component: <ClaimAssignToProvider />,
          layout: "claim",
        },
        {
          name: "Assign To Branch",
          path: "/assign_to_branch/:id/:claim_id",
          component: <ClaimAssignToBranch />,
          layout: "claim",
        },
        {
          name: "View Provider",
          path: "/view_assign_details/:type/:id",
          component: <ViewProvider />,
          layout: "claim",
        },
      ]
    },
    {
      name: "Scheduled Calls",
      component: <ScheduledCallList />,
      collapse: true,
      path: "/scheduled_call",
      icon: "ti-layout",
      short_name: "CD",
      views: [
        {
          name: "Scheduled Calls",
          path: "/scheduled_call",
          component: <ScheduledCallList />,
          icon: "ti-layout",
          layout: "claim",
          short_name: "CD",
        },
        {
          name: "Calls",
          path: "/call/:channel/:username",
          component: <Call />,
          layout: "claim",
        },
      ]
    },

  ];
};
