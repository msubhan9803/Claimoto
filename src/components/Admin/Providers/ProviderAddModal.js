import React, { useEffect, createRef } from 'react'
import Modal from 'react-modal';
import { Animated } from "react-animated-css";
import { modalStyleCenter } from 'variables/modalCSS';
import { useDispatch } from 'react-redux';
import makeAnimated from 'react-select/animated';


const ProviderAddModal = ({ openModal, toggleModal }) => {


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
                            <div className="col-lg-3">
                                <div className="ltnd__single-adding-item text-center">
                                    <div className="ltnd__adding-icon">
                                        <i className="ti-home"></i>
                                    </div>
                                    <h4>Garage</h4>
                                    <p>Lorem ipsum, or lipsum as it is sometimes known</p>
                                    <div className="btn-wrapper text-center mt-0">
                                        <a href="add-garage.html" className="btn theme-btn-1 btn-round-12"> Add + </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="ltnd__single-adding-item text-center">
                                    <div className="ltnd__adding-icon">
                                        <i className="ti-pencil-alt"></i>
                                    </div>
                                    <h4>Agency</h4>
                                    <p>Lorem ipsum, or lipsum as it is sometimes known</p>
                                    <div className="btn-wrapper text-center mt-0">
                                        <a href="add-agency.html" className="btn theme-btn-1 btn-round-12"> Add + </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="ltnd__single-adding-item text-center">
                                    <div className="ltnd__adding-icon">
                                        <i className="ti-car"></i>
                                    </div>
                                    <h4>Car agency</h4>
                                    <p>Lorem ipsum, or lipsum as it is sometimes known</p>
                                    <div className="btn-wrapper text-center mt-0">
                                        <a href="add-car-agency.html" className="btn theme-btn-1 btn-round-12"> Add + </a>
                                    </div>
                                </div>
                            </div>
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
                        </div>
                    </div>
                </div>
            </Animated>
        </Modal>






    )
}

export default ProviderAddModal;
