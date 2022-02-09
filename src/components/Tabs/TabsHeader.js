import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {changeTab} from 'store/actions/users/users_screen';


function TabsHeader({tabs}) {
    const dispatch = useDispatch();
    const tabNav = useRef();

    //onChange we are updating redux
    const _onTabChange = (name) => {
        dispatch(changeTab(name));
    }

    return (
        <div className="ltn__shop-details-tab-menu mb-20">
        <div className="nav" ref={tabNav}>
        {tabs.map((tab, index)=>(
            <a
                key={tab.id}
                className={index === 0 ? "active show": ""}
                onClick={()=> _onTabChange(tab.name)}
                data-bs-toggle="tab"
                href={`#${tab.id}`}
            >
                {tab.label}
            </a>
        ))
        }
        </div>
    </div>
    )
}


export default TabsHeader;