import React, { useEffect } from 'react';
import Garage_Icon from "assets/img/motor/garage-logo.png";
import Side_Image from 'assets/img/motor/login-bg-1.png';
import TabsHeader from 'components/Tabs/TabsHeader';
import { useSelector } from 'react-redux';
import TabContent from 'components/Tabs/TabsContent';
import { Link, useSearchParams } from 'react-router-dom';

const AddProvider = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const { addTabs } = useSelector(state => state.addProviderScreenReducer);


    //Actions
    const _handleComActions = () => {

        let activeTab = searchParams.get("tab");

        if (!activeTab) {
            searchParams.set("tab", 0);
            setSearchParams(searchParams);
        }
    }



    const _moveNext = () => {
        let nextTab = parseInt(searchParams.get("tab"))+1;
        searchParams.set("tab", nextTab);
        setSearchParams(searchParams);
    }



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
                                            <a role="button" onClick={_moveNext} className="btn theme-btn-1 btn-round-12">Next</a>
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