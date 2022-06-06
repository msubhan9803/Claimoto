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
import Header from 'components/Header/Header';
import { changeTasksRootValues } from 'store/actions/taskList';
import { getMyTaskList } from 'store/actions/taskList';
import { getPendingTaskList } from 'store/actions/taskList';

function TaskList() {

    let dispatch = useDispatch();
    let [searchParams, setSearchParams] = useSearchParams();
    const { UserId } = useSelector(state => state.authReducer.user_details);



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


    const _handleRefresh = () => {
        let activeTab = searchParams.get("tab");
        switch (activeTab) {
            case "0":
                dispatch(getMyTaskList(UserId));

                break;
            case "1":
                dispatch(getPendingTaskList(UserId));

                break;
            case "2":

                break;

            default:

                break;
        }
    }








    const _handleChange = (event) => {
        let key = event.target.name;
        let val = event.target.value;
        dispatch(changeTasksRootValues({ key, val }));
    }


    useEffect(() => {
        _handleComActions();
    }, [searchParams]);


    return (
        <React.Fragment>
            <div className="body-wrapper">

                <div className="body-content-area-inner">
                    {/* PRODUCT AREA START */}
                    <Header search_options={search_options} onRefresh={_handleRefresh} sort_options={search_options} search_text={search_text} search_option={search_option} sort_name={sort_name} name={"Task List"} handleChange={_handleChange} />
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












