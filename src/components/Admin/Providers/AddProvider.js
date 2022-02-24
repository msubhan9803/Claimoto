import React from 'react';



const AddProvider = () => {
    return (
        <React.Fragment>
            <div className="body-content-area ltnd__no-sidebar-menu body-100vh ltn__body-height-800 body-bg-1--- pb-80---">
                <div className="ltnd__block-area pt-40 pb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="ltn__shop-details-tab-inner ltn__shop-details-tab-inner-2 ltn__tab-active-hold-inner">
                                    <div className="ltn__shop-details-tab-menu mb-20">
                                        <ul className="nav ltn__tab-active-hold">
                                            <li>
                                                <a className="active show" data-bs-toggle="tab" href="#ltn__tab_4_1"></a>
                                            </li>
                                            <li>
                                                <a data-bs-toggle="tab" href="#ltn__tab_4_2"></a>
                                            </li>
                                            <li>
                                                <a data-bs-toggle="tab" href="#ltn__tab_4_3" className=""></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content">
                                        <div className="tab-pane fade active show" id="ltn__tab_4_1">
                                            <div className="ltn__adding-tab-content-inner">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="section-title-area ">
                                                            <h1 className="section-title">Garage details</h1>
                                                        </div>
                                                        <p><strong>Garage logo</strong></p>
                                                        <div className="garage-logo mb-30">
                                                            <img className="border-radius-12" src="img/motor/garage-logo.png" alt="#" />
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
                                        </div>
                                        <div className="tab-pane fade" id="ltn__tab_4_2">
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
                                        </div>
                                        <div className="tab-pane fade" id="ltn__tab_4_3">
                                            <div className="ltn__adding-tab-content-inner">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="section-title-area ">
                                                            <h1 className="section-title">Garage location</h1>
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
                                                                    {/* <select className="nice-select" style="display: none;">
                                                                        <option>Jordan</option>
                                                                        <option>Jordan</option>
                                                                        <option>Jordan</option>
                                                                        <option>Jordan</option>
                                                                    </select> */}
                                                                    <div className="nice-select" tabIndex="0"><span className="current">Jordan</span><ul className="list"><li data-value="Jordan" className="option selected">Jordan</li><li data-value="Jordan" className="option">Jordan</li><li data-value="Jordan" className="option">Jordan</li><li data-value="Jordan" className="option">Jordan</li></ul></div>
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ltnd__right-full-height d-none d-md-block">
                            <img src="img/motor/login-bg-1.png" alt="#" />
                        </div>
                    </div>

                    <footer className="ltnd__footer-1 fixed-footer-1  bg-white">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="ltnd__footer-1-inner">
                                        <div className="ltnd__left btn-normal">
                                            <a href="#"><i className="ti-trash"></i> Delete</a>
                                        </div>
                                        <div className="ltnd__right btn-normal">
                                            <div className="btn-wrapper">
                                                <a href="providers.html"><i className="ti-angle-left"></i> Cancel</a>
                                                <a href="add-garage-2.html" className="btn theme-btn-1 btn-round-12">Next</a>
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