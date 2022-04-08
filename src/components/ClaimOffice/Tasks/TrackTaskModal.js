import React, { useEffect, createRef } from 'react'
import Modal from 'react-modal';
import { Animated } from "react-animated-css";
import { modalStyleCenterTask } from 'variables/modalCSS';
import { useDispatch, useSelector } from 'react-redux';
import makeAnimated from 'react-select/animated';
import { Link } from 'react-router-dom';
import { getAllowActions } from 'functions';


const TrackTaskModal = ({ openModal, toggleModal }) => {



    //Permissions Controlling
    const { permissions } = useSelector(state => state.authReducer);





    const animatedComponents = makeAnimated();


    return (
        <Modal
            closeTimeoutMS={500}
            ariaHideApp={false}
            isOpen={openModal}
            style={modalStyleCenterTask}
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
                            <h1 className="section-title">Track - 10/tpl2020/001</h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ltnd__track-modal-item-wrap">
                                    <div className="ltnd__track-modal-item">
                                        <h5>Claim submitted</h5>
                                        <p>Claim submitted by the policy holder</p>
                                    </div>
                                    <div className="ltnd__track-modal-item">
                                        <h5>Claim received to insurance company</h5>
                                        <p>Claim submitted by the policy holder</p>
                                    </div>
                                    <div className="ltnd__track-modal-item">
                                        <h5>Initial approval</h5>
                                        <p>Claim submitted by the policy holder</p>
                                    </div>
                                    <div className="ltnd__track-modal-item">
                                        <h5>Vechicle assesment</h5>
                                        <p>Claim submitted by the policy holder</p>
                                    </div>
                                    <div className="ltnd__track-modal-item">
                                        <h5>Car in garage</h5>
                                        <p>Claim submitted by the policy holder</p>
                                    </div>
                                    <div className="ltnd__track-modal-item">
                                        <h5>Return replacement car</h5>
                                        <p>Claim submitted by the policy holder</p>
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

export default TrackTaskModal;
