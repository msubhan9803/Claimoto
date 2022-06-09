import React, { useState, useEffect } from 'react';
import {
    GetDashboardTaskList,
    ChangeTabHandler
} from "store/actions/claimDashboard";
import Counter from 'components/ClaimOffice/Dashboard/Counter/Counter';
import MyTasks from 'components/ClaimOffice/Dashboard/MyTasks/MyTasks';
import ScheduledCalls from 'components/ClaimOffice/Dashboard/ScheduledCalls/ScheduledCalls';
import ClaimList from 'components/ClaimOffice/Dashboard/ClaimList/ClaimList';
import Calender from 'components/ClaimOffice/Dashboard/Calender/Calender';
import { useDispatch, useSelector } from "react-redux";
import { getAllowActions } from 'functions';

function DashBoard() {
    const { permissions } = useSelector(state => state.authReducer);
    let dashboard_actions = getAllowActions({ permissions, module_name: "AD" });
    const { UserId } = useSelector(state => state.authReducer.user_details);
    const dispatch = useDispatch();
    const {
        tabs,
        selectedTab,
        taskList
    } = useSelector(state => state.claimDashboardReducer);

    useEffect(() => {
        dispatch(GetDashboardTaskList(UserId));
    }, []);

    const _handleClaimListTabChange = (value) => {
        dispatch(ChangeTabHandler(value))
    }

    return (
        <React.Fragment>
            <div className="body-content-area-inner mt-10">
                <Counter />
                <div className="ltnd__block-area pb-20">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <MyTasks />
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <ScheduledCalls />
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <Calender />
                        </div>
                    </div>
                </div>
                <ClaimList
                    tabs={tabs}
                    selectedTab={selectedTab}
                    taskList={taskList}
                    _handleClaimListTabChange={_handleClaimListTabChange}
                />
            </div>
        </React.Fragment>
    )
}

export default DashBoard;