import React, { useState } from "react";
import { AuthRoutes } from "../routes/auth";
import { Route, Routes, } from "react-router-dom";
import NotFound from "views/pages/404/404";
import { getFCMToken } from "config/firebase/firebase";



export default function AuthRoute() {

    const [isTokenFound, setTokenFound] = useState(false);
    getFCMToken(setTokenFound);


    let routes = AuthRoutes();

    //Creating Routes
    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.collapse) {
                return getRoutes(prop.views);
            }
            if (prop.layout === "/") {
                return (
                    <Route
                    path={`${prop.path}`}
                    element={prop.component}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };



    return (
        <div className="container-fluid">
            <Routes>
                {getRoutes(routes)}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}
