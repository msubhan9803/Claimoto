import React from 'react'
import Img from 'assets/img/testimonial/1.jpg';
import { CSSTransition } from 'react-transition-group';
import Modal from 'react-modal';
import { Animated } from "react-animated-css";
import { modalStyle } from 'variables/modalCSS';


const UserAddModal = ({ openModal, toggleModal }) => {

    


    return (
        // <CSSTransition
        //     in={openModal}
        //     timeout={200}
        //     classNames="dialog"
        // >
            <Modal
                closeTimeoutMS={500}
                ariaHideApp={false}
                isOpen={openModal}
                style={modalStyle}
            >
                <Animated
                    animationIn="bounceInRight"
                    animationOut="bounceOutRight"
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
                            <div className="section-title-area mb-30---">
                                <h1 className="section-title">Add member</h1>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="ltnd__edit-table-item">
                                        <div className="ltnd__edit-table-logo-title mb-20">
                                            <div className="ltnd__edit-table-logo">
                                                <img src={Img} alt="user_image" />
                                                {/* <input type="file" id="myFile1" name="filename" /> */}
                                            </div>
                                            <div className="ltnd__edit-table-title">
                                                <h3>Yasmin Ali </h3>
                                                <p className="ltn__color-1">Yasminali@gmail.com</p>
                                            </div>
                                        </div>
                                        <form id="#" action="#" method="post" className="ltnd__form-1">
                                            <h6 className="ltnd__title-3">Personal information</h6>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <input type="text" name="name" placeholder="First name " />
                                                </div>
                                                <div className="col-lg-6">
                                                    <input type="text" name="name" placeholder="Last name " />
                                                </div>
                                            </div>
                                            <h6 className="ltnd__title-3">Conact information</h6>
                                            <input type="text" name="phone" placeholder="079 079 1189" />
                                            <input type="email" name="name" placeholder="Email" />
                                            <div className="input-item">
                                                <h6 className="ltnd__title-3">Access role</h6>
                                                <select className="nice-select" style={{ display: "none" }}>
                                                    <option></option>
                                                    <option>Administrator</option>
                                                    <option>Option 1 </option>
                                                    <option>Option 2 </option>
                                                    <option>Option 3 </option>
                                                </select>
                                            </div>
                                        </form>

                                        <footer className="ltnd__footer-1 fixed-footer-1 bg-white mt-50">
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="ltnd__footer-1-inner pl-0 pr-0">
                                                            <div className="ltnd__left btn-normal">
                                                                <a href="#" className="ltn__color-1"><i className="ti-trash"></i> Delete</a>
                                                            </div>
                                                            <div className="ltnd__right btn-normal">
                                                                <div className="btn-wrapper">
                                                                    <a onClick={toggleModal} className="ltn__color-1"><i className="ti-angle-left"></i> Cancel</a>
                                                                    <a href="add-garage-2.html" className="btn theme-btn-1 btn-round-12">Next</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </footer>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Animated>
            </Modal>
        // </CSSTransition>






    )
}

export default UserAddModal;
