//Components

import Dashboard from "views/pages/Admin/Dashboard/DashBoard";
import ClaimDetail from "views/pages/Provider/InitiateClaim/ClaimDetail";
import InitialEstimate from "views/pages/Provider/InitiateClaim/InitialEstimate";

export const providerRoutes = ({ userPermissions }) => {



    return [
        {
            name: "Dashboard",
            path: "/",
            component: <Dashboard />,
            icon: "ti-layout",
            layout: "admin",
            short_name: "AD"
        },
        {
            name: "Initiate claim",
            path: "/initiate_claim",
            icon: "ti-write",
            layout: "provider",
            collapse: true,
            short_name: "PD",
            views: [
              {
                name: "Initiate claim",
                path: "/initiate_claim",
                component: <ClaimDetail type="create" layout="provider" />,
                layout: "provider",
              },
              {
                name: "Initial Estimate",
                path: "/initiate_claim/intial_estimate/:claimId",
                component: <InitialEstimate type="create" layout="provider" />,
                layout: "provider", 
              }
            ],
        }
    ];
};
