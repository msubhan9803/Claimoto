import React, { useState, useEffect } from 'react'
import TabsWrapper from 'components/Tabs/TabsWrapper';
import TabContent from 'components/Tabs/TabsContent';
import TabsHeader from 'components/Tabs/TabsHeader';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from "react-router-dom";
import { getAccessRoles, getRoles } from 'store/actions/users/users_screen';
import ProviderAddModal from 'components/Admin/Providers/ProviderAddModal';
import { getAllowActions } from 'functions';
import ADAnimation from 'components/AccessDenied/ADAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Provider() {

    let dispatch = useDispatch();
    let [searchParams, setSearchParams] = useSearchParams();



    //Permissions Controlling
    const { permissions } = useSelector(state => state.authReducer);




    //Redux State
    const { tabs, search_options } = useSelector(state => state.providersScreenReducer);

    //Component State
    let initialState = {
        openModal: false,
    }
    const [comState, setComState] = useState(initialState);



    //Actions
    const _handleComActions = () => {
        dispatch(getRoles());
        dispatch(getAccessRoles());
        // dispatch(getModules());
        let action = searchParams.get("action");
        let activeTab = searchParams.get("tab");
        switch (action) {
            case "add":
                setComState((comState) => ({
                    ...initialState,
                    openModal: true,
                }));
                break;
            default:
                setComState(initialState);
                break;
        }
        if (!activeTab) {
            searchParams.set("tab", 0);
            setSearchParams(searchParams);
        }

        // if(action){
        //     document.body.style.overflow = 'hidden';
        // }
        // else{
        //     setTimeout(() => {
        //         document.body.style.overflow = 'scroll';
        //     }, 700);
        // }
    }



    //toggleModal
    const _toggleModal = (action) => {
        if (searchParams.has("action")) {
            searchParams.delete("action");
            setSearchParams(searchParams)
        }
        else {
            searchParams.set("action", action);
            setSearchParams(searchParams)
        };
    }


    useEffect(() => {
        _handleComActions();
    }, [searchParams]);




    return (
        <React.Fragment>
            <ProviderAddModal toggleModal={() => _toggleModal("add")} openModal={comState.openModal} />
            <div className="body-wrapper">
                <div className="ltnd__header-area ltnd__header-area-2 section-bg-2---">
                    <div className="ltnd__header-middle-area mt-30">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="ltnd__page-title-area">
                                    <h2>Providers </h2>
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
                                            name="search"
                                            placeholder="Search ..."
                                            className=""
                                        />
                                        <button type="submit">
                                        <FontAwesomeIcon icon={faSearch} />

                                        </button>
                                        {/* <select className='select search-options'>
                                        {search_options.map((op)=>(
                                            <option key={op.value} value={op.vlaue}>{op.label}</option>

                                        ))}
                                        </select> */}
                                    </form>

                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="ltn__shop-options ltnd__shop-options select-list-right">
                                    <ul>
                                        <li>
                                            <div className="short-by text-center">
                                                <select className="nice-select">
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="btn-wrapper text-center mt-0">
                                                <a
                                                    onClick={() => _toggleModal("add")}
                                                    className="btn theme-btn-1 btn-round-12 zindexNormal">
                                                    Add
                                                </a>
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
                                                    {getAllowActions({ permissions, module_name: tabs[parseInt(searchParams.get("tab"))]?.short }) ?
                                                        tabs[parseInt(searchParams.get("tab"))]?.component || <h4>Select a Valid Tab</h4>
                                                        :
                                                        <ADAnimation />
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

export default Provider
