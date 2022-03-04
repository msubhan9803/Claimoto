


import React, { useEffect } from 'react'
import { CSSTransition } from 'react-transition-group';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { modalStyle } from 'variables/modalCSS';
import { handleInputValue, clearInputValues, getModules, getAccessGroupDetails, addUpdateAccessGroup, deleteGroup } from 'store/actions/users/users_screen';
import Select, { components } from 'react-select';
import { Animated } from 'react-animated-css';
import ClickAwayListener from 'react-click-away-listener';
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { getAccessRoles } from 'store/actions/users/users_screen';
import { confirmAlert } from 'functions';
import { getAllowActions } from 'functions';
import LoaderAnimation from 'components/Loader/AnimatedLoaded';





const AccessAddModal = ({ openModal, toggleModal, id, edit }) => {
    const dispatch = useDispatch();
    const { permissions } = useSelector(state => state.authReducer);
    let pre_actions = getAllowActions({ permissions, module_name: "AUM" });
    const { accessValues, modules_access_groups, modules_actions, access_groups, actions } = useSelector(state => state.usersScreenReducer);
    const { access_group, name, modules, module, loading } = accessValues;
    const { register, handleSubmit, formState: { errors }, control } = useForm(
        { mode: "onChange" }
    );


    const _onSubmit = data => {
        _addUpdateAccessGroup();
        // alert(JSON.stringify(data));

    };



    const _getActionName = (actionId) => {
        return actions.find(act => act.Id === actionId)?.ActionName || "";
    }


    const _handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        dispatch(handleInputValue({ name, value, compnnt: "access_group" }));
    }


    const _handleSelect = (value, name) => {
        if (name === "access_group") {
            let access_group_id = parseInt(value?.value || 0);
        }
        dispatch(handleInputValue({ name, value, compnnt: "access_group" }));
    }

    const _clearState = () => {
        dispatch(clearInputValues());
    }

    const _multiValueLabel = props => {
        return (
            <div style={{ cursor: "pointer" }}
                onClick={(e) => _handleMultiValueClick(e, props)}>
                <components.MultiValueLabel  {...props} />
            </div>
        );
    };



    const _handleMultiValueClick = (e, { data }) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(handleInputValue({ name: "module", value: data, compnnt: "access_group" }));

    }


    useEffect(() => {
        if (edit && id) {
            dispatch(getAccessGroupDetails(id));
        }
        return () => {
            _clearState()
        }
    }, []);


    useEffect(() => {
        dispatch(getModules(access_group?.value));
    }, [access_group]);

    const _deleteAction = () => {
        dispatch(deleteGroup(id));
        toggleModal();
        setTimeout(() => {
            dispatch(getAccessRoles());
        }, 1000);
    }


    const _deleteGroup = () => {
        if (id) {
            confirmAlert({
                title: "Are you sure?",
                text: "",
                buttonText: "Yes, Deactivate it",
                action: _deleteAction
            });
        }
    }


    const _addUpdateAccessGroup = () => {
        let selected_modules = modules.map((mod) => {
            let module_id = mod.value;
            let selectedActions = modules_actions.filter(act => act.ModuleId === mod.value && act.status);
            return {
                ModuleId: module_id,
                Actions: selectedActions
            }
        });


        const payload = {
            Edit: edit,
            AccessGroupId: id,
            GroupName: name,
            GroupDetails: "",
            GroupType: "",
            InheritAccessGroupId: access_group.value,
            Modules: selected_modules
        }


        dispatch(addUpdateAccessGroup(payload));

        setTimeout(() => {
            dispatch(getAccessRoles());
            toggleModal();
        }, 1000);

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
            {/* <ClickAwayListener onClickAway={toggleModal}> */}
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
                            <h1 className="section-title">{!edit ? "Add Group" : "Edit Group"}</h1>
                        </div>
                        {loading ?
                            <LoaderAnimation />
                            :

                            <div className="row">
                                <form onSubmit={handleSubmit(_onSubmit)}>
                                    <div className="col-lg-12">
                                        <div className="ltnd__edit-table-item">
                                            <div className="input-item">
                                                <h6 className="ltnd__title-3">Access Group Name <span className={errors.name && "errorMsg"}>*</span></h6>
                                                <input type="text"
                                                    aria-invalid={errors.name ? "true" : "false"}
                                                    autoComplete="off"
                                                    {...register("name", {
                                                        required: "Access Group Name is required.",
                                                        minLength: {
                                                            value: 4,
                                                            message: "Access Group Name must exceed 5 characters"
                                                        }
                                                    })}
                                                    onChange={_handleChange} name="name" placeholder="" value={name} />
                                                <ErrorMessage
                                                    errors={errors}
                                                    name="name"
                                                    render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                />

                                            </div>
                                            <div className="input-item my-3">
                                                <h6 className="ltnd__title-3 ">Inherited From <span className={errors.access_group && "errorMsg"}>*</span></h6>
                                                {/* <Controller
                                                    control={control}
                                                    name="access_group"
                                                    value={access_group}
                                                    // rules={{ required: "Access Group is required" }} */}
                                                {/* render={({ field: { onChange } }) => ( */}
                                                <Select
                                                    name="access_group"
                                                    value={access_group}
                                                    onChange={(event) => _handleSelect(event, "access_group")}
                                                    options={access_groups.filter(ag=>ag.IsDefault).map((option => { return { label: option?.GroupName || "", value: option.Id } }))}
                                                    closeMenuOnSelect={true}
                                                />
                                                {/* )}
                                                /> */}
                                                <ErrorMessage
                                                    errors={errors}
                                                    name="access_group"
                                                    render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                />
                                            </div>
                                            <div className="input-item my-3">
                                                <h6 className="ltnd__title-3 mb-2">Modules <span className={errors.modules && "errorMsg"}>*</span></h6>
                                                <span>Click module to manage its actions</span>
                                                <br />
                                                <span>Atleast one action should be selected</span>
                                                {/* <Controller
                                                    control={control}
                                                    value={modules}
                                                    name="modules"
                                                    // rules={{ required: "Modules is required *" }}
                                                    render={({ field: { onChange } }) => ( */}
                                                <Select
                                                    value={modules}
                                                    name="modules"
                                                    closeMenuOnSelect={true}
                                                    isMulti
                                                    menuPlacement="top"
                                                    blurInputOnSelect={true}
                                                    components={{ MultiValueLabel: _multiValueLabel }}
                                                    onChange={(event) => _handleSelect(event, "modules")}
                                                    options={modules_access_groups.map((option => { return { label: option.ModuleMenuName, value: option.Id } }))}
                                                />
                                                {/* )}
                                                /> */}
                                                <ErrorMessage
                                                    errors={errors}
                                                    name="modules"
                                                    className="errorMsg"
                                                    render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                />
                                            </div>




                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h4>{module?.label || ""}</h4>
                                                    <div className="ltn__checkbox-radio-group inline mt-30">
                                                        {modules_actions.filter(act => act.ModuleId === module.value).map((act) => (
                                                            <label className="ltn__switch-2"><input type="checkbox" onChange={_handleChange} name="actions" value={act.Id} checked={act?.status || false} /> <i className="lever"></i> <span className="text">{_getActionName(act.ActionId)}</span></label>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>



                                            {/* <footer className="ltnd__footer-1 fixed-footer-1 bg-white mt-50"> */}
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="ltnd__footer-1-inner pl-0 pr-0">
                                                            <div className="ltnd__left btn-normal">
                                                                {pre_actions.includes("DELETE") && <a onClick={_deleteGroup} className="ltn__color-1" role="button"><i className="ti-trash"></i> Delete</a>}
                                                            </div>
                                                            <div className="ltnd__right btn-normal">
                                                                <div className="btn-wrapper">
                                                                    {/* <a onClick={_clearState} className="ltn__color-1"><i className="ti-angle-left"></i> Cancel</a> */}
                                                                    <button type="submit" className="btn theme-btn-1 btn-round-12">Save</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* </footer> */}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        }
                    </div>
                </div>


            </Animated>
            {/* </ClickAwayListener> */}
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
