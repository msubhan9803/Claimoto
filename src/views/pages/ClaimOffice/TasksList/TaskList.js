import React, { useState, useEffect } from 'react'
import TabsWrapper from 'components/Tabs/TabsWrapper';
import TabContent from 'components/Tabs/TabsContent';
import TabsHeader from 'components/Tabs/TabsHeader';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useSearchParams } from "react-router-dom";
import { getAllowActions } from 'functions';
import ADAnimation from 'components/AccessDenied/ADAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { getInitials, getAfters, handleRulesInputValue } from 'store/actions/rules';

function TaskList() {

    let dispatch = useDispatch();
    let [searchParams, setSearchParams] = useSearchParams();



    //Permissions Controlling
    const { permissions } = useSelector(state => state.authReducer);




    //Redux State
    const { tabs, search_options, search_option, search_text, sort_type, sort_name, initials, afters } = useSelector(state => state.taskListScreenReducer);



    //Actions
    const _handleComActions = () => {
        // dispatch(getModules());
        let activeTab = searchParams.get("tab");

        if (!activeTab) {
            searchParams.set("tab", 0);
            setSearchParams(searchParams);
        }

    }




    const _handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        dispatch(handleRulesInputValue({ name, value }));
    }


    useEffect(() => {
        _handleComActions();
    }, [searchParams]);


    return (
        <React.Fragment>
            <div className="body-wrapper">
                <div className="ltnd__header-area ltnd__header-area-2 section-bg-2---">
                    <div className="ltnd__header-middle-area mt-30">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="ltnd__page-title-area">
                                    <h2>Task List</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* header-middle-area end */}

                </div>
                {/* <!-- Body Content Area Inner Start --> */}

                <div className="body-content-area-inner">
                    {/* PRODUCT AREA START */}
                    <div className="ltn__product-area ltn__product-gutter">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="ltn__search-widget ltnd__product-search-widget mb-30">
                                    <form action="#" _lpchecked={1}>
                                        <input
                                            type="text"
                                            name="search_text"
                                            placeholder="Search ..."
                                            onChange={_handleChange}
                                            className=""
                                            value={search_text}
                                        />
                                        <button type="submit">
                                            <FontAwesomeIcon icon={faSearch} />
                                        </button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* PRODUCT AREA END */}

                    {/* SELECT AVAILABILITY AREA START */}
                    <div className="select-availability-area pb-120">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* ltnd__policies-table start */}
                                <div className="select-availability-area pb-120">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <TabsWrapper>
                                                <TabsHeader tabs={tabs} />
                                                <TabContent>
                                                    {
                                                    /* {getAllowActions({ permissions, module_name: tabs[parseInt(searchParams.get("tab"))]?.short }) ? */}
                                                    {tabs[parseInt(searchParams.get("tab"))]?.component || <h4>Select a Valid Tab</h4>}
                                                    {/* :
                                                        <ADAnimation /> */
                                                    }
                                                    {/* {tabs.map((tab, index) => (
                                                        <Tab key={tab.id} tab={tab} index={index}>
                                                            {tab.component}
                                                        </Tab>
                                                    ))} */}
                                                </TabContent>
                                            </TabsWrapper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default TaskList;












