
import React from "react";
import Tab from "./Tab";
import carImg from 'assets/img/icons/mc/png/10.png';


function TabContent({props, children}) {

    return (
        <div className="tab-content">
            {/* ltnd__garage-table-wrap  */}
            {/* <div className="tab-pane fade active show" id="ltn__tab_3_1">
                <div className="ltn__apartments-tab-content-inner ">
                   
                </div>
            </div> */}

            {/* ltnd__agencies-table-wrap  */}
            {/* <div className="tab-pane fade" id="ltn__tab_3_2">
                <div className="ltn__product-tab-content-inner">
                   
                </div>
            </div> */}

            {children}

        </div>
    )
}


























export default TabContent;