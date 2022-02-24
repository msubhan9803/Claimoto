import React from 'react';
import Garage_Icon from "assets/img/motor/garage-logo.png";
import { useParams } from "react-router-dom";
import { capitalizeFirstLetter } from 'functions';
const AddProviderTab1 = () => {

    const { type } = useParams();


    return (
        <React.Fragment>

                <div className="ltn__adding-tab-content-inner">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-area ">
                                <h1 className="section-title">{capitalizeFirstLetter(type) || ""} details</h1>
                            </div>
                            <p><strong>{capitalizeFirstLetter(type) || ""} logo</strong></p>
                            <div className="garage-logo mb-30">
                                <img className="border-radius-12" src={Garage_Icon} alt="#" />
                            </div>

                            <form id="#" action="#" method="post" className="ltnd__form-1">
                                <input type="text" name="name" placeholder="Garage name" />
                                <div className="ltnd__adding-method">
                                    <div className="adding-method-title">
                                        <p><strong>Point of contact </strong></p>
                                    </div>
                                    <div className="adding-method-icon">
                                        <i className="ti-plus"></i>
                                    </div>
                                </div>
                                <input type="text" name="name" placeholder="Full name" />
                                <input type="text" name="phone" placeholder="phone number" />
                                <input type="email" name="email" placeholder="Email" />
                            </form>
                        </div>
                    </div>
                </div>

        </React.Fragment>
    )
}

export default AddProviderTab1;