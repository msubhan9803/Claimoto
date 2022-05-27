//Components

import Dashboard from "views/pages/ClaimOffice/Dashboard/DashBoard";
import TaskList from "views/pages/ClaimOffice/TasksList/TaskList";
import Policies from "views/pages/ClaimOffice/Policies/PoliciesData/Policies";
import ClaimList from "views/pages/ClaimOffice/ClaimList/ClaimsData/ClaimList";
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
import ReplacementCar from "views/pages/ClaimOffice/ReplacementCar/ReplacementCar";
import ClaimAssignToProvider from "components/ClaimOffice/ClaimActions/ClaimAssignToProvider";
import ClaimAssignToBranch from "components/ClaimOffice/ClaimActions/ClaimAssignToBranch";
import ViewProvider from "components/Admin/Providers/ViewProvider";
import ScheduledCallList from "views/pages/ClaimOffice/ScheduledCalls/ScheduledCalls";
import Invoice from "views/pages/ClaimOffice/Invoice/Invoice";

import Setting from "views/pages/ClaimOffice/Setting/Setting";
import AccountPreferences from "views/pages/ClaimOffice/Setting/AccountManagement/AccountPreferences.js";
import NotificationPreferences from "views/pages/ClaimOffice/Setting/AccountManagement/NotificationPreferences.js";
import Activity from "views/pages/ClaimOffice/Setting/LogsManagement/Activity.js";
import ActivityDetail from "views/pages/ClaimOffice/Setting/LogsManagement/ActivityDetail.js";
import Error from "views/pages/ClaimOffice/Setting/LogsManagement/Error.js";

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
      name: "Tasks",
      icon: "ti-layout-column2",
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
      name: "Policies",
      path: "/policies",
      icon: "ti-shield",
      layout: "claim",
      collapse: true,
      views: [
        {
          name: "Policies",
          path: "/policies",
          component: <Policies layout="claim" />,
          layout: "claim",
        },
        {
          name: "Claims",
          path: "/claims",
          component: <ClaimList layout="claim" />,
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
      icon: "ti-agenda",
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
      icon: "ti-home",
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
      icon: "ti-id-badge",
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
    {
      name: "Replacement Cars",
      path: "/replacement_cars",
      icon: "ti-id-badge",
      layout: "claim",
      collapse: true,
      views: [
        {
          name: "Replacement Cars",
          path: "/replacement_cars",
          component: <ReplacementCar />,
          layout: "claim",
        },
        {
          name: "Replacement Cars",
          path: "/replacement_cars/:id",
          component: <AgencyDetail type="view" layout="claim" />,
          layout: "claim",
        },
      ],
    },
    //_checkPer("APR") &&

    {
      name: "Scheduled Calls",
      component: <ScheduledCallList />,
      collapse: true,
      path: "/scheduled_call",
      icon: "ti-headphone-alt",
      layout: "claim",
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
    {
      name: "Invoice",
      component: <Invoice />,
      collapse: true,
      path: "/invoices",
      icon: "ti-files",
      layout: "claim",
      short_name: "CD",
      views: [
        {
          name: "Invoice",
          path: "/invoices",
          component: <Invoice />,
          icon: "ti-layout",
          layout: "claim",
          short_name: "INV",
        },

      ]
    },
    // _checkPer("ASC") &&
    {
      name: "Settings",
      path: "/settings",
      icon: "ti-settings",
      layout: "claim",
      collapse: true,
      views: [
        {
          name: "Settings",
          path: "/settings",
          component: <Setting layout="claim" />,
          icon: "ti-settings",
          layout: "claim",
        },
        {
          name: "Account Preferences",
          path: "/settings/account_preferences",
          component: <AccountPreferences layout="claim" />,
          layout: "claim",
        },
        {
          name: "Notification Preferences",
          path: "/settings/notification_preferences",
          component: <NotificationPreferences layout="claim" />,
          layout: "claim",
        },
        {
          name: "Activity",
          path: "/settings/logs_activity",
          component: <Activity layout="claim" />,
          layout: "claim",
        },
        {
          name: "Activity",
          path: "/settings/logs_activity/:id",
          component: <ActivityDetail layout="claim" />,
          layout: "claim",
        },
        {
          name: "Error",
          path: "/settings/logs_error",
          component: <Error layout="claim" />,
          layout: "claim",
        },
      ],
    },
  ];
};
