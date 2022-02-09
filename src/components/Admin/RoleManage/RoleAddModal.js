


import React from 'react'
import Img from 'assets/img/testimonial/1.jpg';
import { CSSTransition } from 'react-transition-group';
import Modal from 'react-modal';

const UserAddModal = ({ openModal, toggleModal }) => {

    const style = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)'
        },
        content: {
            position: 'fixed',
            top: '0%',
            left: 'auto',
            right: '0%',
            bottom: '0%',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px',
            maxWidth: 600,
        }
    }


    return (
        <CSSTransition
            in={openModal}
            timeout={200}
            classNames="dialog"
        >
            <Modal
                closeTimeoutMS={500}
                ariaHideApp={false}
                isOpen={openModal}
                style={style}
            >
                <div className="modal-header">
                    <button onClick={toggleModal} type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="ltnd__adding-modal-inner">
                        <div className="section-title-area mb-30---">
                            <h1 className="section-title">User roles</h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ltnd__edit-table-item">
                                    <div className="ltnd__edit-table-logo-title mb-20">
                                        <div className="ltnd__edit-table-logo">
                                            <img src={Img} alt="#" />
                                        </div>
                                        <div className="ltnd__edit-table-title">
                                            <h3 className="animated fadeIn">Yasmin Ali </h3>
                                            <p className="ltn__color-1">Yasminali@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="ltn__shop-details-tab-inner ltn__shop-details-tab-inner-2">
                                        <div className="ltn__shop-details-tab-menu mb-20">
                                            <div className="nav">
                                                <a className="show active" data-bs-toggle="tab" href="#ltn__tab_5_1">Module 1</a>
                                                <a data-bs-toggle="tab" href="#ltn__tab_5_2" className="">Module 2</a>
                                                <a data-bs-toggle="tab" href="#ltn__tab_5_3" className="">Module 3</a>
                                            </div>
                                        </div>
                                        <div className="tab-content">
                                            <div className="tab-pane fade active show" id="ltn__tab_5_1">
                                                <div className="ltn__apartments-tab-content-inner ">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <h4>Module</h4>
                                                            <div className="ltn__checkbox-radio-group inline mt-30">
                                                                <label className="ltn__switch-2"><input type="checkbox" /> <i className="lever"></i> <span className="text">Action name</span></label>
                                                                <label className="ltn__switch-2"><input type="checkbox" checked="" /> <i className="lever"></i> <span className="text">Action name Active</span></label>
                                                                <label className="ltn__switch-2"><input type="checkbox" disabled="" /> <i className="lever"></i> <span className="text">Action name Disabled</span></label>
                                                            </div>
                                                            <div className="ltn__checkbox-radio-group inline--- mt-30">
                                                                <label className="ltn__switch-2"><input type="checkbox" /> <i className="lever"></i> <span className="text">Action name</span></label>
                                                                <label className="ltn__switch-2"><input type="checkbox" checked="" /> <i className="lever"></i> <span className="text">Action name Active</span></label>
                                                                <label className="ltn__switch-2"><input type="checkbox" disabled="" /> <i className="lever"></i> <span className="text">Action name Disabled</span></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="ltn__tab_5_2">
                                                <div className="ltn__product-tab-content-inner">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <h4>Module 2</h4>

                                                            <div className="ltn__checkbox-radio-group inline mt-30">
                                                                <label className="ltn__switch"><input type="checkbox" /> <i className="lever"></i> <span className="text">Switch 1</span></label>
                                                                <label className="ltn__switch"><input type="checkbox" checked="" /> <i className="lever"></i> <span className="text">Switch 1 Active</span></label>
                                                                <label className="ltn__switch"><input type="checkbox" disabled="" /> <i className="lever"></i> <span className="text">Switch 1 Disabled</span></label>
                                                            </div>
                                                            <div className="ltn__checkbox-radio-group inline--- mt-30">
                                                                <label className="ltn__switch"><input type="checkbox" /> <i className="lever"></i> <span className="text">Switch 1</span></label>
                                                                <label className="ltn__switch"><input type="checkbox" checked="" /> <i className="lever"></i> <span className="text">Switch 1 Active</span></label>
                                                                <label className="ltn__switch"><input type="checkbox" disabled="" /> <i className="lever"></i> <span className="text">Switch 1 Disabled</span></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="ltn__tab_5_3">
                                                <div className="ltn__product-tab-content-inner">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <h4>Module 2</h4>

                                                            <div className="ltn__checkbox-radio-group inline">
                                                                <label className="ltn__checkbox"><input type="checkbox" /> <i className="icon"></i> Checkbox 1</label>
                                                                <label className="ltn__checkbox"><input type="checkbox" checked="" /> <i className="icon"></i> Checkbox 1 Active</label>
                                                                <label className="ltn__checkbox"><input type="checkbox" disabled="" /> <i className="icon"></i> Checkbox 1 Disabled</label>
                                                            </div>
                                                            <div className="ltn__checkbox-radio-group inline---">
                                                                <label className="ltn__checkbox"><input type="checkbox" /> <i className="icon"></i> Checkbox 1</label>
                                                                <label className="ltn__checkbox"><input type="checkbox" checked="" /> <i className="icon"></i> Checkbox 1 Active</label>
                                                                <label className="ltn__checkbox"><input type="checkbox" disabled="" /> <i className="icon"></i> Checkbox 1 Disabled</label>
                                                            </div>


                                                            <div className="ltn__checkbox-radio-group inline mt-30">
                                                                <label className="ltn__checkbox-2"><input type="checkbox" /> <i className="icon"></i> Checkbox 2</label>
                                                                <label className="ltn__checkbox-2"><input type="checkbox" checked="" /> <i className="icon"></i> Checkbox 2 Active</label>
                                                                <label className="ltn__checkbox-2"><input type="checkbox" disabled="" /> <i className="icon"></i> Checkbox 2 Disabled</label>
                                                            </div>
                                                            <div className="ltn__checkbox-radio-group inline--- mt-30">
                                                                <label className="ltn__checkbox-2"><input type="checkbox" /> <i className="icon"></i> Checkbox 2</label>
                                                                <label className="ltn__checkbox-2"><input type="checkbox" checked="" /> <i className="icon"></i> Checkbox 2 Active</label>
                                                                <label className="ltn__checkbox-2"><input type="checkbox" disabled="" /> <i className="icon"></i> Checkbox 2 Disabled</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

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
                                                                <a href="providers.html" className="ltn__color-1"><i className="ti-angle-left"></i> Cancel</a>
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
            </Modal>
        </CSSTransition>






    )
}

export default UserAddModal;














