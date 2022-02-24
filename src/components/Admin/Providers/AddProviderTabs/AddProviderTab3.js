import React from 'react';
import Garage_Icon from "assets/img/motor/garage-logo.png";
import Side_Image from 'assets/img/motor/login-bg-1.png';
import TabsHeader from 'components/Tabs/TabsHeader';
import { useSelector } from 'react-redux';
import { capitalizeFirstLetter } from 'functions';
import { useParams } from "react-router-dom";

const AddProviderTab3 = () => {
    const {type} = useParams();
    const { addTabs } = useSelector(state => state.providersScreenReducer);



    return (
        <React.Fragment>

                <div className="ltn__adding-tab-content-inner">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-area ">
                                <h1 className="section-title">{capitalizeFirstLetter(type)} location</h1>
                            </div>
                            <div className="ltnd__adding-method">
                                <div className="adding-method-title">
                                    <p><strong> </strong></p>
                                </div>
                                <div className="adding-method-icon">
                                    <i className="ti-plus"></i>
                                </div>
                            </div>
                            <form id="#" action="#" method="post" className="ltnd__form-1">
                                <input type="text" name="name" placeholder="Branch name" />
                                <div className="input-item">
                                    <select className="nice-select">
                                        <option>Jordan</option>
                                        <option>Jordan</option>
                                        <option>Jordan</option>
                                        <option>Jordan</option>
                                    </select>
                                </div>
                                <input type="text" name="name" placeholder="Street address " />
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input type="text" name="name" placeholder="City" />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" name="name" placeholder="Zip code" />
                                    </div>
                                </div>
                                <p><strong>Directions</strong></p>
                                <input type="text" name="name" placeholder="How to reach the farm landmarks ect... " />
                            </form>
                        </div>
                    </div>
                </div>

        </React.Fragment>
    )
}

export default AddProviderTab3;