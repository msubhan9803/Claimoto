import React from 'react'
import Img from 'assets/img/testimonial/1.jpg';
import { CSSTransition } from 'react-transition-group';
import Modal from 'react-modal';
import { Animated } from "react-animated-css";
import { modalStyle } from 'variables/modalCSS';
import { useSelector, useDispatch } from 'react-redux';
import { handleInputValue } from 'store/actions/users/users_screen';
import { clearInputValues } from 'store/actions/users/users_screen';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const UserAddModal = ({ openModal, toggleModal, id, edit }) => {

    const { roles, userValues, access_groups_role } = useSelector(state => state.usersScreenReducer);
    const dispatch = useDispatch();
    const {
        first_name,
        last_name,
        phone,
        email,
        access_role,
        access_group
    } = userValues;


    const animatedComponents = makeAnimated();



    const _handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        dispatch(handleInputValue({ name, value, compnnt: "user" }));
    }


    const _handleMultipleSelect = (value) => {
        let name = "access_group";
        dispatch(handleInputValue({ name, value, compnnt: "user" }));
    }

    const _clearState = () => {
        dispatch(clearInputValues());
        toggleModal();
    }

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
                            <h1 className="section-title">{edit ? "Edit member" : "Add member" }</h1>
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
                                                <input type="text" onChange={_handleChange} name="first_name" placeholder="First name" value={first_name} />
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" onChange={_handleChange} name="last_name" placeholder="Last name " value={last_name} />
                                            </div>
                                        </div>
                                        <h6 className="ltnd__title-3">Conact information</h6>
                                        <input type="text" onChange={_handleChange} name="phone" placeholder="079 079 1189" value={phone} />
                                        <input type="email" onChange={_handleChange} name="email" placeholder="Email" value={email} />
                                        <div className="input-item">
                                            <h6 className="ltnd__title-3">Access role *</h6>

                                            <select className="nice-select" name='access_role' onChange={_handleChange} value={access_role}>
                                                <option value={""}>Select Access Role</option>
                                                {roles.length > 0 ? roles.map((role) => (
                                                    <option value={role.id}>{role.name}</option>
                                                )) :
                                                    <option disabled>No Role Found</option>
                                                }
                                            </select>
                                        </div>
                                        <div className="input-item">
                                            <h6 className="ltnd__title-3 mb-2">Access Group *</h6>
                                            <Select
                                                closeMenuOnSelect={false}
                                                components={animatedComponents}
                                                value={access_group}
                                                name="access_group"
                                                onChange={_handleMultipleSelect}
                                                isMulti
                                                options={access_groups_role.map((option => { return { label: option.name, value: option.id } }))}
                                            />
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
                                                                <a onClick={_clearState} className="ltn__color-1"><i className="ti-angle-left"></i> Cancel</a>
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
