import React, { useEffect } from 'react';
import Garage_Icon from "assets/img/motor/garage-logo.png";
import Side_Image from 'assets/img/motor/login-bg-1.png';
import TabsHeader from 'components/Tabs/TabsHeader';
import { useSelector } from 'react-redux';
import TabContent from 'components/Tabs/TabsContent';
import { Link, useSearchParams, useNavigate, useParams } from 'react-router-dom';
import { getServices, getCountries, clearAddProviderState } from 'store/actions/provider';
import { msgAlert } from 'functions';
import { successAlert } from 'functions';
import { addProvider } from 'store/actions/provider';

const AddProvider = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const { type } = useParams();
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { addTabs, tab1, tab2, tab3 } = useSelector(state => state.addProviderScreenReducer);
    const { name, contacts, logo } = tab1;
    const { selected_service_types } = tab2;
    const { selected_locations } = tab3;



    //Actions
    const _handleComActions = () => {

        let activeTab = searchParams.get("tab");

        if (!activeTab) {
            searchParams.set("tab", 0);
            setSearchParams(searchParams);
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

            case "car%20agency":
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

            let action_payload = {
                name,
                logo,
                contacts,
                services: selected_service_types,
                locations: selected_locations,
                providerId: _getProviderId()

            }
            dispatch(addProvider(action_payload));
            

        }
    }

    const _movePrev = () => {
        let nextTab = parseInt(searchParams.get("tab"))-1;
        searchParams.set("tab", nextTab);
        setSearchParams(searchParams);
    }







    useEffect(() => {
        if(success && !loading){
            return navigate("/admin/provider");
        }
    }, [success]);


    useEffect(() => {
        dispatch(getServices());
        dispatch(getCountries());
        dispatch(clearAddProviderState())
    }, []);



    useEffect(() => {
        _handleComActions();
    }, [searchParams]);



    return (
        <React.Fragment>
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
                        <img src={Side_Image} alt="#" />
                    </div>
                </div>

                <footer className="ltnd__footer-1 fixed-footer-1  bg-white" >
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ltnd__footer-1-inner">
                                    <div className="ltnd__left btn-normal">
                                        <a href="#"><i className="ti-trash"></i> Delete</a>
                                    </div>
                                    <div className="ltnd__right btn-normal">
                                        <div className="btn-wrapper">
                                            <Link to="/admin/provider" ><i className="ti-angle-left"></i> Cancel</Link>
                                            {/* <a href="providers.html"><i className="ti-angle-left"></i> Cancel</a> */}
                                            {searchParams.get("tab") > 0 &&
                                                <a role="button" onClick={_movePrev} className="btn theme-btn-2 btn-round-12">Back</a>}
                                            <a role="button" onClick={_moveNext} className="btn theme-btn-1 btn-round-12">{searchParams.get("tab") < 2 ? "Next" : "Save"}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        </React.Fragment>
    )
}

export default AddProvider;