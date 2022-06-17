import React, { useState, useEffect } from 'react'
import TabsWrapper from 'components/Tabs/TabsWrapper';
import TabContent from 'components/Tabs/TabsContent';
import TabsHeader from 'components/Tabs/TabsHeader';

import UserAddModal from 'components/Admin/UserManage/UserAddModal';
import AccessAddModal from 'components/Admin/AccessManage/AccessAddModal';
import { useSelector, useDispatch } from 'react-redux';

import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getAccessRoles, getRoles, handleInputValue, getActions, getModulesActions } from 'store/actions/users/users_screen';
import { getUsers } from 'store/actions/users/users_screen';
import { getAllowActions, capitalizeFirstLetter } from 'functions';
import ADAnimation from 'components/AccessDenied/ADAnimation';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


function UserListProvider() {
    const { type, id } = useParams();

    const navigate = useNavigate();
    let dispatch = useDispatch();
    let [searchParams, setSearchParams] = useSearchParams();

    //Redux State

    //Permissions Controlling
    const { permissions } = useSelector(state => state.authReducer);

    let user_actions = getAllowActions({ permissions, module_name: "AUM" });
    let roles_actions = getAllowActions({ permissions, module_name: "ARM" });
    let ag_actions = getAllowActions({ permissions, module_name: "AGM" });


    const { tabs, search_options, userValues, users_per_page, users_page_index, users_count } = useSelector(state => state.usersScreenReducer);
    const { search_option, search_text, sort_name, sort_type } = userValues;
    //Component State
    let initialState = {
        openUserModal: false,
        openAccessModal: false,
        edit: false,
        view: false,
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
                    view: false,
                    edit: false
                }));
                break;
            case "add_access_group":
                setComState((comState) => ({
                    ...initialState,
                    openAccessModal: true,
                    view: false,
                }));
                break;
            case "edit_user":
                setComState((comState) => ({
                    ...initialState,
                    openUserModal: true,
                    edit: true,
                    view: false,
                    id
                }));
                break;
            case "view_user":
                setComState((comState) => ({
                    ...initialState,
                    openUserModal: true,
                    edit: true,
                    view: true,
                    id
                }));
                break;
            case "edit_access_group":
                setComState((comState) => ({
                    ...initialState,
                    openAccessModal: true,
                    edit: true,
                    view: false,
                    id
                }));
                break;
            case "view_access_group":
                setComState((comState) => ({
                    ...initialState,
                    openAccessModal: true,
                    edit: true,
                    view: true,
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
        if (search_text?.length > 2 && (search_option !== "" || search_text === "")) {
            dispatch(getUsers({ users_per_page, users_page_index: 1, search_text, search_option, sort_name, sort_type, provider_id:id }));
        }
    }, [search_text, search_option, sort_name]);


    return (
        <React.Fragment>
            {comState.openUserModal && <UserAddModal pre_actions={user_actions} view={comState.view} edit={comState.edit} id={comState.id} toggleModal={() => _toggleModal("add_user")} openModal={comState.openUserModal} />}
            {comState.openAccessModal && <AccessAddModal pre_actions={ag_actions} view={comState.view} edit={comState.edit} id={comState.id} toggleModal={() => _toggleModal("add_access_group")} openModal={comState.openAccessModal} />}
            <div className="body-wrapper">
                <div className="ltnd__header-area ltnd__header-area-2 section-bg-2---">
                    <div className="ltnd__header-middle-area mt-30">
                        <div className="row">
                            <div className="col-lg-9">
                                <p onClick={() => navigate(-1)} role="button" className="page-back-btn">
                                    <i className="icon-left-arrow-1" /> Back
                                </p>
                                <div className="ltnd__page-title-area">
                                    <h2>{capitalizeFirstLetter(type)} Users </h2>
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
                                        {searchParams.get("tab") === "0" &&
                                            <select name="search_option" value={search_option} onChange={_handleChange} className='select search-options'>
                                                <option disabled value={""}>Search By</option>
                                                {search_options.map((op) => (
                                                    <option key={op.value} value={op.value}>{op.label}</option>

                                                ))}
                                            </select>
                                        }
                                    </form>

                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="ltn__shop-options ltnd__shop-options select-list-right">
                                    <ul>
                                        {searchParams.get("tab") === "0" &&
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
                                        }

                                        {/* <li>
                                            <div className="short-by text-center">
                                                <select onChange={_handleChange} name="sort_type" value="sort_type" className="form-control-sm border-0 px-1 ">
                                                    <option value="asc">ASC</option>
                                                    <option value="desc">DESC</option>
                                                </select>
                                            </div>
                                        </li> */}
                                        {
                                            <li>
                                                <div className="btn-wrapper text-center mt-0">
                                                    {user_actions?.includes("INSERT") &&
                                                        <button
                                                            onClick={() => _toggleModal("add_user")}
                                                            className="btn theme-btn-1 btn-round-12 zindexNormal">
                                                            Add User +
                                                        </button>
                                                    }
                                                </div>
                                            </li>
                                        }
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
                                                        tabs[parseInt(searchParams.get("tab"))]?.component || <h4>Select a Valid Tab</h4> :
                                                        // <iframe style={{position:"fixed", left:"50%", top:"50%"}} src="https://embed.lottiefiles.com/animation/86535"></iframe>
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

export default UserListProvider;
