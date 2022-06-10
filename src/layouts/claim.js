import React, { useState, useEffect } from "react";
import Sidebar from "components/Sidebar/UserSidebar";
import UserNavbar from "components/Navbar/UserNavbar/UserNavbar";
import DashboardNavbar from "components/Navbar/DashboardNavbar/DashboardNavbar";
import { claimRoutes } from "routes/claim";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import NotFound from "views/pages/404/404";
import { getFCMToken } from "config/firebase/firebase";
import { setFCMToken } from "store/actions/auth/user";
import { ENVIRONMENT } from "variables";

export default function Layout() {
    const { token, user_details, permissions } = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    const [isTokenFound, setTokenFound] = useState(false);



    let routes = claimRoutes({ userPermissions: permissions });
    let location = useLocation();

    const _getFCMToken = async () => {
        if (ENVIRONMENT !== "DEVELOPMENT") {
            let fcm = await getFCMToken(setTokenFound);
            dispatch(setFCMToken(fcm));
        }
        
    }

    useEffect(() => {
        if (token && user_details) {
            _getFCMToken()
        }
    }, [token, user_details]);

    //Creating Routes
    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop) {
                if (prop.collapse) {
                    return getRoutes(prop.views);
                }
                if (prop.layout === "claim") {

                    return (
                        <Route
                            path={`${prop.path}`}
                            index={prop.path == "/" ? true : false}
                            element={prop.component}
                            key={key}
                        />
                    );
                } else {
                    return null;
                }
            }
        });
    };



    return (
        <>
            {!token ? (<Navigate to="/" />) :


                <div className="body-wrapper">
                    <Sidebar
                        routes={routes}
                        activeRoute={location.pathname}
                    />
                    <div className="ltn__utilize-overlay" />

                    <div className="body-content-area body-bg-1 pb-80---">
                        {location.pathname === '/claim/' ?
                            <DashboardNavbar />
                            :
                            <UserNavbar layout="claim" />
                        }

                        <Routes>
                            {getRoutes(routes)}
                            <Route path="*" element={<NotFound />} />


                        </Routes>

                        {/* <Footer /> */}
                    </div>

                </div>
            }
        </>
    );
}
