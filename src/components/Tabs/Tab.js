
import React from "react";

function Tab({children, tab, index}) {
    return (
            <div className={`tab-pane fade  ${index === 0 && "active show"}`} id={tab.id}>
                <div className="ltn__apartments-tab-content-inner ">
                    {children}
                </div>
            </div>
    )
}


export default Tab;

