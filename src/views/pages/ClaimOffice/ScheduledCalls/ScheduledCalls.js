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
import ScheduledCallGrid from 'components/ClaimOffice/ScheduledCalls/ScheduledCallsGrid';
import Header from 'components/Header/Header';
import { handleRootScheduleInputValue } from 'store/actions/scheduleCalls';
import { getScheduleCalls } from 'store/actions/scheduleCalls';

function ScheduledCallList() {

    let dispatch = useDispatch();
    let [searchParams, setSearchParams] = useSearchParams();



    //Permissions Controlling
    const { permissions } = useSelector(state => state.authReducer);




    //Redux State
    const { calls, tabs, search_options, search_option, search_text, sort_type, sort_name, initials, afters } = useSelector(state => state.scheduleCalls);

    const {
        list,
        loading,
        records_per_page,
        page_index,
        count,
    } = calls;

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
        dispatch(handleRootScheduleInputValue({ name, value }));
    }


    useEffect(() => {
        _handleComActions();
    }, [searchParams]);



    const _handleRefresh = () => {
        dispatch(getScheduleCalls({
            records_per_page, page_index, search_option,
            search_text,
            sort_type,
            sort_name,
        }));
    }



    // useEffect(() => {
    //     if (search_text?.length > 2 && search_option !== "" || search_text === "") {
    //         _getRulesList();
    //     }
    // }, [search_text, search_option, sort_name]);



    return (
        <React.Fragment>
            <div className="body-wrapper">
                <div className="ltnd__header-area ltnd__header-area-2 section-bg-2---">

                    {/* header-middle-area end */}

                </div>
                {/* <!-- Body Content Area Inner Start --> */}

                <div className="body-content-area-inner">

                    <Header onRefresh={_handleRefresh} search_options={search_options} sort_options={search_options} search_text={search_text} search_option={search_option} sort_name={sort_name} name={"Scheduled Calls"} handleChange={_handleChange} />


                    {/* SELECT AVAILABILITY AREA START */}
                    <div className="select-availability-area pb-120">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* ltnd__policies-table start */}
                                <div className="select-availability-area pb-120">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <ScheduledCallGrid />
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

export default ScheduledCallList
