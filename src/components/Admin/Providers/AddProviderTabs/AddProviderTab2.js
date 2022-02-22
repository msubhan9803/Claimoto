import React from 'react';
import Garage_Icon from "assets/img/motor/garage-logo.png";
import Side_Image from 'assets/img/motor/login-bg-1.png';
import TabsHeader from 'components/Tabs/TabsHeader';
import { useSelector } from 'react-redux';

const AddProviderTab2 = () => {

    const { addTabs } = useSelector(state => state.providersScreenReducer);



    return (
        <React.Fragment>

                <div className="ltn__adding-tab-content-inner">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-area ">
                                <h1 className="section-title">Garage services</h1>
                            </div>
                            <div className="ltnd__adding-method">
                                <div className="adding-method-title">
                                    <p><strong>Import </strong></p>
                                </div>
                                <div className="adding-method-icon">
                                    <i className="ti-plus"></i>
                                </div>
                            </div>

                            <form id="#" action="#" method="post" className="ltnd__form-1 ltnd__block-item">
                                <input type="text" name="name" placeholder="Service type" />
                                <input type="text" name="name" placeholder="Service " />
                                <a className="ltn__secondary-color" href="#"><strong>Add service +</strong></a>
                            </form>
                        </div>
                    </div>
                </div>

        </React.Fragment>
    )
}

export default AddProviderTab2;