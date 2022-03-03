import React, { useEffect, createRef } from 'react'
import Modal from 'react-modal';
import { Animated } from "react-animated-css";
import { modalStyleCenter } from 'variables/modalCSS';
import { useDispatch, useSelector } from 'react-redux';
import makeAnimated from 'react-select/animated';
import { Link } from 'react-router-dom';
import { getAllowActions } from 'functions';


const ProviderAddModal = ({ openModal, toggleModal }) => {



    //Permissions Controlling
    const { permissions } = useSelector(state => state.authReducer);
    let garage_actions = getAllowActions({ permissions, module_name: "PG" });
    let agency_actions = getAllowActions({ permissions, module_name: "PA" });
    let car_agency_actions = getAllowActions({ permissions, module_name: "PC" });
    let surveyor_actions = getAllowActions({ permissions, module_name: "PS" });








    const animatedComponents = makeAnimated();


    return (
        <Modal
            closeTimeoutMS={500}
            ariaHideApp={false}
            isOpen={openModal}
            style={modalStyleCenter}
        >
            <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                animationInDuration={1000}
                animationOutDuration={1000}
                isVisible={openModal}
            >
                <div className="modal-header">
                    <button onClick={toggleModal} type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="ltnd__adding-modal-inner">
                        <div className="section-title-area text-center mb-30---">
                            <h1 className="section-title">What are you adding?</h1>
                        </div>
                        <div className="row">
                            {garage_actions?.includes("INSERT") &&
                                <div className="col-lg-3">
                                    <div className="ltnd__single-adding-item text-center">
                                        <div className="ltnd__adding-icon">
                                            <i className="ti-home"></i>
                                        </div>
                                        <h4>Garage</h4>
                                        <p>Lorem ipsum, or lipsum as it is sometimes known</p>
                                        <div className="btn-wrapper text-center mt-0">
                                            <Link className="btn theme-btn-1 btn-round-12" to="/admin/add_provider/garage" > Add +</Link>

                                        </div>
                                    </div>
                                </div>
                            }
                            {agency_actions?.includes("INSERT") &&
                                <div className="col-lg-3">
                                    <div className="ltnd__single-adding-item text-center">
                                        <div className="ltnd__adding-icon">
                                            <i className="ti-pencil-alt"></i>
                                        </div>
                                        <h4>Agency</h4>
                                        <p>Lorem ipsum, or lipsum as it is sometimes known</p>
                                        <div className="btn-wrapper text-center mt-0">
                                            <Link className="btn theme-btn-1 btn-round-12" to="/admin/add_provider/agency" > Add +</Link>
                                        </div>
                                    </div>
                                </div>
                            }
                            {car_agency_actions?.includes("INSERT") &&
                                <div className="col-lg-3">
                                    <div className="ltnd__single-adding-item text-center">
                                        <div className="ltnd__adding-icon">
                                            <i className="ti-car"></i>
                                        </div>
                                        <h4>Car agency</h4>
                                        <p>Lorem ipsum, or lipsum as it is sometimes known</p>
                                        <div className="btn-wrapper text-center mt-0">
                                            <Link className="btn theme-btn-1 btn-round-12" to="/admin/add_provider/car%20agency" > Add +</Link>
                                        </div>
                                    </div>
                                </div>
                            }
                            {surveyor_actions?.includes("INSERT") &&
                                <div className="col-lg-3">
                                    <div className="ltnd__single-adding-item text-center">
                                        <div className="ltnd__adding-icon">
                                            <i className="ti-pencil-alt"></i>
                                        </div>
                                        <h4>Surveyor</h4>
                                        <p>Lorem ipsum, or lipsum as it is sometimes known</p>
                                        <div className="btn-wrapper text-center mt-0">
                                            <Link className="btn theme-btn-1 btn-round-12" to="/admin/add_provider/surveyor" > Add +</Link>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>

                    </div>
                </div>
            </Animated>
        </Modal>






    )
}

export default ProviderAddModal;
