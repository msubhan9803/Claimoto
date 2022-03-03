//Components

import Dashboard from "views/pages/Admin/Dashboard/DashBoard";
import Products from "views/pages/Admin/Product/Products/Products";
import Policies from "views/pages/Admin/Policies/PoliciesData/Policies";
import Provider from "views/pages/Admin/Provider/Provider";
import UserManagement from "views/pages/Admin/UserManagement/UserManagement";
import Setting from "views/pages/Admin/Setting/Setting";
import ProductDetail from "views/pages/Admin/Product/ProductDetail/ProductDetail";
import VehicalDetail from "views/pages/Admin/VehicalDetail/VehicalDetail";
import PoliciesDetail from "views/pages/Admin/Policies/PoliciesDetail/PoliciesDetail";
import AddProvider from "components/Admin/Providers/AddProvider";
import VehicleParts from "views/pages/Admin/VehicleParts";
import VehiclePartManage from "views/pages/Admin/VehicleParts/VehiclePartManage";
import AccountPreferences from "views/pages/Admin/Setting/AccountManagement/AccountPreferences.js";
import NotificationPreferences from "views/pages/Admin/Setting/AccountManagement/NotificationPreferences.js";
import EmailSignature from "views/pages/Admin/Setting/EmailManagement/EmailSignature.js";
import EmailTemplate from "views/pages/Admin/Setting/EmailManagement/EmailTemplate.js";
import Activity from "views/pages/Admin/Setting/LogsManagement/Activity.js";
import Error from "views/pages/Admin/Setting/LogsManagement/Error.js";
import SmtpManagement from "views/pages/Admin/Setting/SmtpManagement/SmtpManagement.js";
import TimezoneManagement from "views/pages/Admin/Setting/TimezoneManagement/TimezoneManagement.js";

// import NotFound from 'views/pages/404/404'
// import DragAndDrop from 'components/DragAndDrop/DrapAndDrop'

export const adminRoutes = ({ userPermissions }) => {

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
      layout: "admin",
      short_name: "AD"
    },
    _checkPer("APR") &&
    {
      name: "Products",
      path: "/products",
      component: <Products actions={_checkPer("APR").ModuleActions} />,
      icon: "ti-file",
      layout: "admin",
      short_name: "AD"
    },
    _checkPer("APO") &&
    {
      name: "Policies",
      path: "/policies",
      component: <Policies actions={_checkPer("APO").ModuleActions} />,
      icon: "ti-clipboard",
      layout: "admin",
      short_name: "AD"
    },
    (_checkPer("PG") || _checkPer("PA") || _checkPer("PC") || _checkPer("PS")) &&
    {
      name: "Providers",
      path: "/provider",
      icon: "ti-server",
      layout: "admin",
      short_name: "AD",
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
    _checkPer("AVP") &&
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
          component: <VehicleParts actions={_checkPer("AVP").ModuleActions} />,
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
    (_checkPer("AUM") || _checkPer("ARM") || _checkPer("AGM")) &&
    {
      name: "User management",
      path: "/user_management",
      component: <UserManagement />,
      icon: "ti-user",
      layout: "admin",
    },
    _checkPer("ASC") &&
    {
      name: "Settings",
      path: "/settings",
      icon: "ti-settings",
      layout: "admin",
      collapse: true,
      views: [
        {
          name: "Settings",
          path: "/settings",
          component: <Setting />,
          icon: "ti-settings",
          layout: "admin",
        },
        {
          name: "Account Preferences",
          path: "/account_preferences",
          component: <AccountPreferences />,
          layout: "admin",
        },
        {
          name: "Notification Preferences",
          path: "/notification_preferences",
          component: <NotificationPreferences />,
          layout: "admin",
        },
        {
          name: "Email Signature",
          path: "/email_signature",
          component: <EmailSignature />,
          layout: "admin",
        },
        {
          name: "Email Management",
          path: "/email_management",
          component: <EmailTemplate />,
          layout: "admin",
        },
        {
          name: "Activity",
          path: "/logs_activity",
          component: <Activity />,
          layout: "admin",
        },
        {
          name: "Error",
          path: "/logs_error",
          component: <Error />,
          layout: "admin",
        },
        {
          name: "Smtp Management",
          path: "/smtp_management",
          component: <SmtpManagement />,
          layout: "admin",
        },
        {
          name: "Timezone Management",
          path: "/timezone_management",
          component: <TimezoneManagement />,
          layout: "admin",
        },
      ],
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
      layout: "admin",
    },
    {
      name: "",
      path: "/create_policy",
      component: <PoliciesDetail />,
      layout: "admin",
    },
    {
      name: "",
      path: "/policy_detail/:id",
      component: <PoliciesDetail />,
      layout: "admin",
    },
    {
      name: "",
      path: "/policy_detail_edit/:id",
      component: <PoliciesDetail />,
      layout: "admin",
    },
    {
      name: "",
      path: "/create_vehical",
      component: <VehicalDetail />,
      layout: "admin",
    },
    {
      name: "",
      path: "/vehical_detail/:id",
      component: <VehicalDetail />,
      layout: "admin",
    },
    {
      name: "",
      path: "/vehical_detail_view/:id",
      component: <VehicalDetail />,
      layout: "admin",
    },
    {
      name: "",
      path: "/vehical_detail_edit/:id",
      component: <VehicalDetail />,
      layout: "admin",
    },
  ];
};

// <Route path="/create_product" element={<ProductDetail/>}/>
//           <Route path="/product_detail/:id" element={<ProductDetail/>}/>
//           <Route path="/products" element={<Products/>}/>
//           <Route path="/create_policies" element={<PoliciesDetail/>}/>
//           <Route path="/policies_details/:id" element={<PoliciesDetail/>}/>
//           <Route path="/create_vehical" element={<VehicalDetail/>}/>
//           <Route path="/vehical_details/:id" element={<VehicalDetail/>}/>
