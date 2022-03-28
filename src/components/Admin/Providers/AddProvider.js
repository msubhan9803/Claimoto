import React, { useEffect } from 'react';
import Side_Image from 'assets/img/motor/login-bg-1.png';
import TabsHeader from 'components/Tabs/TabsHeader';
import { useDispatch, useSelector } from 'react-redux';
import TabContent from 'components/Tabs/TabsContent';
import { Link, useSearchParams, useNavigate, useParams } from 'react-router-dom';
import { getServices, getCountries, clearAddProviderState, setProviderDetails } from 'store/actions/provider';
import { msgAlert } from 'functions';
import { successAlert } from 'functions';
import { addProvider } from 'store/actions/provider';
import Loader from 'components/Loader/Loader';
import { confirmAlert } from 'functions';
import { deleteProvider } from 'store/actions/provider';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MapComponent from 'components/Admin/Providers/Map/MapComponent';
import { getAllowActions } from 'functions';
import LoaderAnimation from 'components/Loader/AnimatedLoaded';

const AddProvider = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const { type, id } = useParams();
    let navigate = useNavigate();
    const dispatch = useDispatch();


    //Permissions Controlling
    const { permissions } = useSelector(state => state.authReducer);
    let garage_actions = getAllowActions({ permissions, module_name: "PG" });
    let agency_actions = getAllowActions({ permissions, module_name: "PA" });
    let car_agency_actions = getAllowActions({ permissions, module_name: "PCA" });
    let surveyor_actions = getAllowActions({ permissions, module_name: "PS" });





    const { addTabs, tab1, tab2, tab3, success, loading, user_loading } = useSelector(state => state.addProviderScreenReducer);
    const { name, contacts, logo } = tab1;
    const { selected_service_types } = tab2;
    const { selected_locations, location_values } = tab3;
    const { lat, long } = location_values;
    //Map Defaults
    const zoom = 7;



    const _mapRender = (status) => {
        // if (status === Status.LOADING) return <h3>{status} ..</h3>;
        // if (status === Status.FAILURE) return <h3>{status} ...</h3>;
        // return null;
        return <p>{status}</p>;

    };

    //Actions
    const _handleComActions = () => {

        let activeTab = searchParams.get("tab");

        if (!activeTab) {
            searchParams.set("tab", 0);
            setSearchParams(searchParams);
        }
    }


    const _setProviderDetails = (id) => {
        dispatch(setProviderDetails(id));
    }


    const _checkPermissionsOfProvider = (action) => {
        switch (type) {
            case "garage":
                return garage_actions?.includes(action);
                break;
            case "agency":
                return agency_actions?.includes(action);
                break;

            case "replacement agency":
                return car_agency_actions?.includes(action);
                break;

            case "surveyor":
                return surveyor_actions?.includes(action);
                break;

            default:
                return false;
                break;
        }
    }



    const _getProviderId = () => {
        switch (type) {
            case "garage":
                return 1
                break;

            case "agency":
                return 2
                break;

            case "replacement agency":
                return 3
                break;

            case "surveyor":
                return 4
                break;

            default:
                return 1
                break;
        }
    }


    const _moveNext = () => {

        let active_tab = parseInt(searchParams.get("tab"));
        let error = false;
        switch (active_tab) {
            case 0:
                if (name === "" || contacts.length < 1) {
                    error = true;
                    return msgAlert({ title: "Required Fields", text: "Name and Minimum Contact is Required" });
                }
                break;
            case 1:
                if (selected_service_types.length < 1) {
                    error = true;
                    return msgAlert({ title: "Required Fields", text: "Minimum one Service is Required" });
                }
                break;
            case 2:
                if (selected_locations.length < 1) {
                    error = true;
                    return msgAlert({ title: "Required Fields", text: "Minimum one Location is Required" });
                }
                break;
            default:
                break;
        }
        if (!error && active_tab < 2) {
            let nextTab = active_tab + 1;
            searchParams.set("tab", nextTab);
            setSearchParams(searchParams);
        } else if (!error && active_tab === 2) {


            //Handling Update and Insert

            if ((_checkPermissionsOfProvider("INSERT") || _checkPermissionsOfProvider("UPDATE"))) {
                //If user has Permission of Insert and Update
                if (id && !_checkPermissionsOfProvider("UPDATE")) {
                    //If User is Updating but Do not Have Permissions
                    msgAlert({ title: "Permissions Denied", text: "Requested Action Permissions Denied" })
                } else {
                    // Updating and Inserting
                    let action_payload = {
                        name,
                        logo,
                        contacts,
                        services: selected_service_types,
                        locations: selected_locations,
                        providerId: _getProviderId(),
                        editId: id || null
                    }
                    dispatch(addProvider(action_payload, navigate));

                }
            } else {
                //If User Do not have permissions
                msgAlert({ title: "Permissions Denied", text: "Requested Action Permissions Denied" })
            }

        }
    }

    const _movePrev = () => {
        let nextTab = parseInt(searchParams.get("tab")) - 1;
        searchParams.set("tab", nextTab);
        setSearchParams(searchParams);
    }


    const _cancelAction = () => {
        navigate('/admin/provider');
    }


    const _handleCancel = () => {
        confirmAlert({
            title: "Are you sure?",
            text: "",
            buttonText: "Yes, Go Back",
            action: _cancelAction
        });
    }

    const _deleteAction = () => {
        dispatch(deleteProvider(navigate, id));
    }


    const _handleDelete = () => {
        if (id) {
            confirmAlert({
                title: "Are you sure?",
                text: "",
                buttonText: "Yes, Deactivate it",
                action: _deleteAction
            });
        }
    }





    useEffect(() => {
        // if (success && !loading) {
        //     return navigate("/admin/provider");
        // }
    }, [success]);


    useEffect(() => {
        dispatch(getServices());
        dispatch(getCountries());
        return () => {
            dispatch(clearAddProviderState());
        };
    }, []);


    useEffect(() => {
        if (id) {
            _setProviderDetails(id);
        }else{
            dispatch(clearAddProviderState());
        }
    }, [id]);



    useEffect(() => {
        _handleComActions();
    }, [searchParams]);



    return (
        <React.Fragment>
            {user_loading || loading ?
                <div style={{ textAlign: "center" }}>
                    <LoaderAnimation />
                </div>
                :
                <div className="body-content-area ltnd__no-sidebar-menu body-100vh ltn__body-height-800 body-bg-1--- pb-80---">

                    <div className="ltnd__block-area pt-40 pb-80">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6  offset-md-1">

                                    <div className="ltn__shop-details-tab-inner ltn__shop-details-tab-inner-2 ltn__tab-active-hold-inner">
                                        <TabsHeader tabs={addTabs} />
                                        <TabContent>
                                            {addTabs[parseInt(searchParams.get("tab"))]?.component || <h4>Select a Valid Tab</h4>}
                                        </TabContent>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ltnd__right-full-height d-none d-md-block">
                            {
                                searchParams.get("tab") < 2 ?
                                    <img src={Side_Image} alt="#" /> :
                                    <Wrapper apiKey='AIzaSyASwWi0HKSx9m6NhXKyn-voaZm2YunPtx4' render={_mapRender}>
                                        <MapComponent height={window.screen.height} center={{ lat: parseFloat(lat), lng: parseFloat(long) }} zoom={zoom} />
                                    </Wrapper>

                            }

                        </div>




                    </div>

                    <footer className="ltnd__footer-1 fixed-footer-1  bg-white" >
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="ltnd__footer-1-inner">
                                        <div className="ltnd__left btn-normal">
                                            {_checkPermissionsOfProvider("DELETE") &&
                                                <button onClick={_handleDelete} className="btn "><i className="ti-trash"></i> Delete</button>
                                            }
                                        </div>
                                        <div className="ltnd__right btn-normal">
                                            <div className="btn-wrapper">
                                                {/* <Link to="/admin/provider" ><i className="ti-angle-left"></i> Cancel</Link> */}
                                                <button onClick={_handleCancel} className="btn " ><i className="ti-angle-left"></i> Cancel</button>
                                                {/* <a href="providers.html"><i className="ti-angle-left"></i> Cancel</a> */}
                                                {searchParams.get("tab") > 0 &&
                                                    <button role="button" onClick={_movePrev} className="btn theme-btn-2 btn-round-12">Back</button>}

                                                { // (_checkPermissionsOfProvider("INSERT") || _checkPermissionsOfProvider("UPDATE")) &&
}
                                                    <button role="button" disabled={loading} onClick={_moveNext} className="btn theme-btn-1 btn-round-12">{searchParams.get("tab") < 2 ? "Next" : "Save"}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>

                </div>
            }
        </React.Fragment>
    )
}

export default AddProvider;