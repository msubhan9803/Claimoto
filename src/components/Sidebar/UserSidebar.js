import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
let {routes} = props;
 
  return (
        <React.Fragment>
          <h4>Sidebar</h4>
          <ul>
          {routes.map((route, index)=>(
            <li key={index}>
            <Link  to={route.path} >{route.path}</Link>
            </li>
          ))}
          </ul>
        </React.Fragment>

  );
}
