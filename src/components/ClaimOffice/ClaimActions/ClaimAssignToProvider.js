import React, { useState, useEffect, useRef, createRef } from 'react'
import TabsWrapper from 'components/Tabs/TabsWrapper';
import TabContent from 'components/Tabs/TabsContent';
import TabsHeader from 'components/Tabs/TabsHeader';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getAllowActions } from 'functions';
import ADAnimation from 'components/AccessDenied/ADAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { handleAssignProviderInputValue } from 'store/actions/taskList/assign';
import { getAssignProvider } from 'store/actions/taskList/assign';
import AssignProviderGrid from './AssignProviderGrid';

function ClaimAssignToProvider() {
    let { id } = useParams();
    const navigate = useNavigate();
    let dispatch = useDispatch();
    let [searchParams, setSearchParams] = useSearchParams();

    //Permissions Controlling
    const { permissions } = useSelector(state => state.authReducer);

    //Redux State
    const { search_options, search_option, search_text, sort_type, sort_name, record } = useSelector(state => state.assignProviderScreenReducer);



    const _getProvidersList = () => {
        let records_per_page = 10;
        let page_index = 1;
        records_per_page = record.records_per_page;
        page_index = record.page_index;
        dispatch(getAssignProvider({
            provider_id:id,
            records_per_page, 
            page_index,
            search_option,
            search_text,
            sort_type,
            sort_name,
        }));

    }



    const _handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        dispatch(handleAssignProviderInputValue({ name, value }));
    }



    useEffect(() => {
        if (search_text?.length > 2 && search_option !== "" || search_text === "") {
            _getProvidersList();
        }
    }, [search_text, search_option, sort_name]);


    
    const _getProviderName = () => {
        switch (id) {
            case "1":
                return "Garages";
                break;

            case "2":
                return "Agencies";
                break;

            case "3":
                return "Replacement Cars";
                break;

            case "4":
                return "Surveyors";
                break;

            default:
                return "";
                break;
        }
    }



    return (
        <React.Fragment>
            <div className="body-wrapper">
                <div className="ltnd__header-area ltnd__header-area-2 section-bg-2---">
                <div className="ltnd__page-title-area">
                                    <p onClick={() => navigate(-1)} role="button" className="page-back-btn">
                                        <i className="icon-left-arrow-1" /> Back
                                    </p>
                                </div>
                    <div className="ltnd__header-middle-area mt-30">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="ltnd__page-title-area">
                                    <h2>{_getProviderName()}</h2>
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
                                        <select name="search_option" value={search_option} onChange={_handleChange} className='select search-options'>
                                            <option disabled value={""}>Search By</option>
                                            {search_options.map((op) => (
                                                <option key={op.value} value={op.value}>{op.label}</option>

                                            ))}
                                        </select>
                                    </form>

                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="ltn__shop-options ltnd__shop-options select-list-right">
                                    <ul>
                                        <li>
                                            <div className="short-by text-center">
                                                <select onChange={_handleChange} name="sort_name" value={sort_name} className="nice-select">
                                                    <option disabled value={""}>Sort By</option>
                                                    {search_options.map((op) => (
                                                        <option key={op.value} value={op.value}>{op.label}</option>

                                                    ))}
                                                </select>
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
                                            <AssignProviderGrid />
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

export default ClaimAssignToProvider;
