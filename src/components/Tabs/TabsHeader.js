import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { changeTab } from 'store/actions/users/users_screen';


function TabsHeader({ tabs }) {
    let [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const tabNav = useRef();

    //onChange we are updating redux
    const _onTabChange = (index) => {
        dispatch(changeTab(index));
        searchParams.set("tab", index);
        setSearchParams(searchParams);
    }

    return (
        <div className="ltn__shop-details-tab-menu mb-20">
            <div className="nav" ref={tabNav}>
                {tabs.map((tab, index) => (
                    <div key={tab.id}>
                        <a

                            className={parseInt(searchParams.get("tab")) === index ? "active show  d-none d-md-block" : " d-none d-md-block"}
                            onClick={() => _onTabChange(index)}
                            // data-bs-toggle="tab"
                            // href={`#${tab.id}`}
                            style={{ cursor: "pointer" }}
                        >
                            {tab.label}
                        </a>
                        <a
                            key={tab.id}
                            className={parseInt(searchParams.get("tab")) === index ? "active show d-md-none " : "d-md-none"}
                            onClick={() => _onTabChange(index)}
                            // data-bs-toggle="tab"
                            // href={`#${tab.id}`}
                            style={{ cursor: "pointer" }}
                        >
                            {tab.short}
                        </a>
                    </div>
                ))
                }
            </div>
        </div>
    )
}


export default TabsHeader;