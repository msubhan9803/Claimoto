import React, { useState, useEffect } from 'react'
import TabsWrapper from 'components/Tabs/TabsWrapper';
import TabContent from 'components/Tabs/TabsContent';
import TabsHeader from 'components/Tabs/TabsHeader';

import UserAddModal from 'components/Admin/UserManage/UserAddModal';
import AccessAddModal from 'components/Admin/AccessManage/AccessAddModal';
import { useSelector, useDispatch } from 'react-redux';

import { useSearchParams } from "react-router-dom";
import { getAccessRoles, getRoles, handleInputValue, getActions, getModulesActions } from 'store/actions/users/users_screen';
import { getUsers } from 'store/actions/users/users_screen';


function UserManagement() {
    let dispatch = useDispatch();
    let [searchParams, setSearchParams] = useSearchParams();

    //Redux State
    const { tabs, search_options, userValues, users_per_page, users_page_index, users_count } = useSelector(state => state.usersScreenReducer);
    const { search_option, search_text, sort_name, sort_type } = userValues;
    //Component State
    let initialState = {
        openUserModal: false,
        openAccessModal: false,
        edit: false,
        id: null
    }
    const [comState, setComState] = useState(initialState);


    const _handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        dispatch(handleInputValue({ name, value, compnnt: "user" }));
    }



    //Actions
    const _handleComActions = () => {
        // dispatch(getModules());
        let action = searchParams.get("action");
        let activeTab = searchParams.get("tab");
        let id = searchParams.get("id");
        switch (action) {
            case "add_user":
                setComState((comState) => ({
                    ...initialState,
                    openUserModal: true,
                }));
                break;
            case "add_access_group":
                setComState((comState) => ({
                    ...initialState,
                    openAccessModal: true,
                }));
                break;
            case "edit_user":
                setComState((comState) => ({
                    ...initialState,
                    openUserModal: true,
                    edit: true,
                    id
                }));
                break;
            case "edit_access_group":
                setComState((comState) => ({
                    ...initialState,
                    openAccessModal: true,
                    edit: true,
                    id
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

        if (action) {
            document.body.style.overflow = 'hidden';
        }
        else {
            setTimeout(() => {
                document.body.style.overflow = 'scroll';
            }, 300);
        }
    }



    //toggleModal
    const _toggleModal = (action) => {

        // dispatch(clearInputValues())

        if (searchParams.has("action")) {
            searchParams.delete("action");
            searchParams.delete("id");
            searchParams.delete("edit");
            setSearchParams(searchParams)
        }
        else {
            searchParams.set("action", action);
            setSearchParams(searchParams)
        };
    }


    const _loadData = () => {
        dispatch(getModulesActions());
        dispatch(getActions());
        dispatch(getRoles());
        dispatch(getAccessRoles());
    }




    useEffect(() => {
        _handleComActions();
    }, [searchParams]);

    useEffect(() => {
        _loadData();
    }, []);

    useEffect(() => {
        if(search_text?.length > 2 && search_option !== "" || search_text === ""){
            dispatch(getUsers({ users_per_page, users_page_index: 1, search_text, search_option, sort_name, sort_type }));
        }
    }, [search_text ,search_option, sort_name])



    return (
        <React.Fragment>
            {comState.openUserModal && <UserAddModal edit={comState.edit} id={comState.id} toggleModal={() => _toggleModal("add_user")} openModal={comState.openUserModal} />}
            {comState.openAccessModal && <AccessAddModal edit={comState.edit} id={comState.id} toggleModal={() => _toggleModal("add_access_group")} openModal={comState.openAccessModal} />}
            <div className="body-wrapper">
                <div className="ltnd__header-area ltnd__header-area-2 section-bg-2---">
                    <div className="ltnd__header-middle-area mt-30">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="ltnd__page-title-area">
                                    <h2>User Management </h2>
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
                                            <i className="fas fa-search" />
                                        </button>
                                        <select name="search_option" value={search_option} onChange={_handleChange} className='select search-options'>
                                        <option disabled value={""}>Options</option>
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
                                                <option disabled value={""}>Sort</option>
                                                    {search_options.map((op) => (
                                                        <option key={op.value} value={op.value}>{op.label}</option>

                                                    ))}
                                                </select>
                                            </div>
                                        </li>

                                        {/* <li>
                                            <div className="short-by text-center">
                                                <select onChange={_handleChange} name="sort_type" value="sort_type" className="form-control-sm border-0 px-1 ">
                                                    <option value="asc">ASC</option>
                                                    <option value="desc">DESC</option>
                                                </select>
                                            </div>
                                        </li> */}

                                        <li>
                                            <div className="btn-wrapper text-center mt-0">
                                                <a
                                                    onClick={() => _toggleModal("add_user")}
                                                    className="btn theme-btn-1 btn-round-12 zindexNormal">
                                                    Add User +
                                                </a>
                                                <a
                                                    onClick={() => _toggleModal("add_access_group")}
                                                    className="btn theme-btn-1 btn-round-12 zindexNormal">
                                                    Add Access Group +
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
                                                    {tabs[parseInt(searchParams.get("tab"))]?.component || <h4>Select a Valid Tab</h4>}
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

export default UserManagement
