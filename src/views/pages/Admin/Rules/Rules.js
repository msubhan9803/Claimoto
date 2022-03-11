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

function Rules() {

    let dispatch = useDispatch();
    let [searchParams, setSearchParams] = useSearchParams();



    //Permissions Controlling
    const { permissions } = useSelector(state => state.authReducer);




    //Redux State
    const { tabs, search_options, search_option, search_text, sort_type, sort_name, initials, afters } = useSelector(state => state.rulesScreenReducer);



    //Actions
    const _handleComActions = () => {
        // dispatch(getModules());
        let activeTab = searchParams.get("tab");

        if (!activeTab) {
            searchParams.set("tab", 0);
            setSearchParams(searchParams);
        }

    }



    const _getRulesList = () => {
        let records_per_page = 10;
        let page_index = 1;
        switch (searchParams.get("tab")) {
            case "initial":
                records_per_page = initials.records_per_page;
                page_index = initials.page_index;
                dispatch(getInitials({ records_per_page, page_index, search_text, search_option, sort_name, sort_type }));
                break;

            case "after":
                records_per_page = afters.records_per_page;
                page_index = afters.page_index;
                dispatch(getAfters({ records_per_page, page_index, search_text, search_option, sort_name, sort_type }));
                break;

            default:
                dispatch(getAfters({ records_per_page, page_index, search_text, search_option, sort_name, sort_type }));
                break;
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


    // useEffect(() => {
    //     if (search_text?.length > 2 && search_option !== "" || search_text === "") {
    //         _getRulesList();
    //     }
    // }, [search_text, search_option, sort_name]);



    return (
        <React.Fragment>
            <div className="body-wrapper">
                <div className="ltnd__header-area ltnd__header-area-2 section-bg-2---">
                    <div className="ltnd__header-middle-area mt-30">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="ltnd__page-title-area">
                                    <h2>Authority Matrix </h2>
                                </div>
                            </div>
                            <div className="col-lg-3 align-self-center text-end">
                                <div className="ltnd__date-area d-none">
                                    <div className="ltn__datepicker">
                                        <div className="ltn_datepicker-title">
                                            <span>Date</span>
                                        </div>
                                        <div className="input-group date" data-provide="datepicker">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Select Date"
                                            />
                                            <div className="input-group-addon">
                                                <i className="far fa-calendar-alt" />
                                            </div>
                                        </div>
                                    </div>
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
                                        {/* <select name="search_option" value={search_option} onChange={_handleChange} className='select search-options'>
                                            <option disabled value={""}>Search By</option>
                                            {search_options.map((op) => (
                                                <option key={op.value} value={op.value}>{op.label}</option>

                                            ))}
                                        </select> */}
                                    </form>

                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="ltn__shop-options ltnd__shop-options select-list-right">
                                    <ul>
                                        {/* <li>
                                            <div className="short-by text-center">
                                                <select onChange={_handleChange} name="sort_name" value={sort_name} className="nice-select">
                                                    <option disabled value={""}>Sort By</option>
                                                    {search_options.map((op) => (
                                                        <option key={op.value} value={op.value}>{op.label}</option>

                                                    ))}
                                                </select>
                                            </div>
                                        </li> */}
                                        <li>
                                            <div className="btn-wrapper text-center mt-0">
                                                <Link
                                                    to={"/admin/add_rule/1"}
                                                    className="btn theme-btn-1 btn-round-12 zindexNormal">
                                                    Add Initial +
                                                </Link>
                                                <Link
                                                    to={"/admin/add_rule/2"}
                                                    className="btn theme-btn-1 btn-round-12 zindexNormal">
                                                    Add After Assessment +
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
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

export default Rules
