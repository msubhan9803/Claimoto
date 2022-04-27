import React from "react";
import { Link } from "react-router-dom";
import logo from 'assets/img/logo/logo.png';
export default function Sidebar(props) {
  let { routes, activeRoute } = props;



  return (
    <React.Fragment>
      <div
        id="ltn__utilize-mobile-menu"
        className="ltn__utilize ltn__utilize-mobile-menu ltn__sidebar-menu"
      >
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <div className="site-logo site-logo-text">
              {/* <a href="index.html">
                  <img src="img/logo/logo-icon-1.png" alt="Icon"> 
                  <span className="logo-text"><img src="img/logo/logo-text-1.png" alt="Text"></span>
              </a> */}
              <a >
                <img src={logo} alt="Icon"  width={225} />
                {!logo &&
                  <span className="logo-text">
                    Claimoto<sup>®</sup>
                  </span>
                }
              </a>
            </div>
            <button className="ltn__utilize-close d-xl-none">×</button>
          </div>
          <div className="ltn__utilize-menu">
            <ul>
              {routes.map((route, index) => {
                if (route) {
                  let isActiveRoute = `/${route.layout + route.path}` === activeRoute;
                  if (route.name !== "")
                    return <li className={isActiveRoute ? "active" : ""} key={index}>
                      <Link to={`.${route.path}`} >
                        <i className={route.icon}></i>
                        <span className="ltn__sidebar-menu-text">{route.name}</span>
                      </Link>
                    </li>
                }
              })}
              {/* <button className="sidebar-menu-collapse">
                <div className="sidebar-menu-collapse-icon">
                  <i className="ti-arrows-horizontal" />
                </div>
                <div className="sidebar-menu-collapse-text">Collapse</div>
              </button> */}

            </ul>
          </div>
        </div>
      </div>


    </React.Fragment>

  );
}
