


import React from 'react'
import { CSSTransition } from 'react-transition-group';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { modalStyle } from 'variables/modalCSS';
import { handleInputValue, clearInputValues } from 'store/actions/users/users_screen';
import Select from 'react-select';
import { Animated } from 'react-animated-css';


const AccessAddModal = ({ openModal, toggleModal, id, edit }) => {
    const dispatch = useDispatch();
    const { roles, accessValues, modules_role, actions } = useSelector(state => state.usersScreenReducer);
    const { access_role, name, module } = accessValues;

    const _handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        dispatch(handleInputValue({ name, value, compnnt: "access_group" }));
    }
    const _handleSelect = (value, name) => {
        dispatch(handleInputValue({ name, value, compnnt: "access_group" }));
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
                            <h1 className="section-title">{!edit ? "Add Group": "Edit Group"}</h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ltnd__edit-table-item">
                                    <div className="input-item">
                                        <h6 className="ltnd__title-3">Access Group Name *</h6>
                                        <input type="text" onChange={_handleChange} name="name" placeholder="" value={name} />
                                    </div>
                                    <div className="input-item">
                                        <h6 className="ltnd__title-3 ">Access role *</h6>
                                        <Select
                                            closeMenuOnSelect={true}
                                            // components={animatedComponents}
                                            value={access_role}
                                            name="access_role"
                                            onChange={(event) => _handleSelect(event, "access_role")}
                                            options={roles.map((option => { return { label: option.name, value: option.id } }))}
                                        />
                                        {/* <select className="nice-select" name='access_role' onChange={_handleChange} value={access_role}>
                                            <option value={""}>Select Access Role</option>
                                            {roles.length > 0 ? roles.map((role) => (
                                                <option value={role.id}>{role.name}</option>
                                            )) :
                                                <option disabled>No Role Found</option>
                                            }
                                        </select> */}
                                    </div>
                                    <div className="input-item my-3">
                                        <h6 className="ltnd__title-3 mb-2">Modules *</h6>
                                        <Select
                                            closeMenuOnSelect={true}
                                            // components={animatedComponents}
                                            value={module}
                                            name="module"
                                            onChange={(event) => _handleSelect(event, "module")}
                                            options={modules_role.map((option => { return { label: option.name, value: option.id } }))}
                                        />
                                    </div>




                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h4>{module?.label || ""}</h4>
                                            <div className="ltn__checkbox-radio-group inline mt-30">
                                                {actions.filter(act => act.module_id === module.value).map((act) => (
                                                    <label className="ltn__switch-2"><input type="checkbox" onChange={_handleChange} name="actions" disabled={act.disabled} value={act.id} checked={act.status} /> <i className="lever"></i> <span className="text">{act.name}</span></label>
                                                ))}
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
                                                                <a onClick={_clearState} className="ltn__color-1"><i className="ti-angle-left"></i> Cancel</a>
                                                                <a  className="btn theme-btn-1 btn-round-12">Save</a>
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

export default AccessAddModal;














{/* <div className="ltn__shop-details-tab-inner ltn__shop-details-tab-inner-2">
<div className="ltn__shop-details-tab-menu mb-20">
    <div className="nav">
        <a className="show active" data-bs-toggle="tab" href="#ltn__tab_5_1">Module 1</a>
        <a data-bs-toggle="tab" href="#ltn__tab_5_2" className="">Module 2</a>
        <a data-bs-toggle="tab" href="#ltn__tab_5_3" className="">Module 3</a>
        <a data-bs-toggle="tab" href="#ltn__tab_5_3" className="">Module 3</a>
        <a data-bs-toggle="tab" href="#ltn__tab_5_3" className="">Module 3</a>
        <a data-bs-toggle="tab" href="#ltn__tab_5_3" className="">Module 3</a>
        <a data-bs-toggle="tab" href="#ltn__tab_5_3" className="">Module 3</a>
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
</div> */}