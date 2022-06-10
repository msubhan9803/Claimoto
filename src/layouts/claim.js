import React, { useState, useEffect } from "react";
import Sidebar from "components/Sidebar/UserSidebar";
import UserNavbar from "components/Navbar/UserNavbar/UserNavbar";
import DashboardNavbar from "components/Navbar/DashboardNavbar/DashboardNavbar";
import { claimRoutes } from "routes/claim";
import { Route, Routes, useLocation, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import NotFound from "views/pages/404/404";
import { getFCMToken } from "config/firebase/firebase";
import { setFCMToken } from "store/actions/auth/user";
import { ENVIRONMENT } from "variables";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getNotifications } from "store/actions/notifications";



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


    //Firebase Notification


    const navigate = useNavigate();


    useEffect(() => {
        if (ENVIRONMENT !== "DEVELOPMENT") {
            navigator.serviceWorker.addEventListener("notificationclick", (message) => {
                var { data, notification } = message.data;
                _navigateToClaim(data.redirect_url);
            });
            navigator.serviceWorker.addEventListener("message", (message) => {
                var { data, notification } = message.data;
                toast(({ closeToast }) => <div>  <h6>{notification.title}</h6><small>{notification.body}</small></div>,
                    {
                        onClick: () => _navigateToClaim(data.redirect_url)
                    });
            });
        }
    }, []);


    const _navigateToClaim = (redirect_url) => {
        dispatch(getNotifications({
            records_per_page: 5,
            page_index: 1,
            search_option: "",
            search_text: "",
            sort_type: "asc",
            sort_name: "",
          }));
        navigate(redirect_url);
    }













    return (
        <>
            {!token ? (<Navigate to="/" />) :


                <div className="body-wrapper">
                    <ToastContainer />
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
