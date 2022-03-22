import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { Animated } from "react-animated-css";
import { modalStyle } from 'variables/modalCSS';
import { useSelector, useDispatch } from 'react-redux';
import { addService, getMakes, clearInputValues, handleAddProviderServiceInputValue, getModels, getServiceTypes, getServices, getProviderServiceDetails } from 'store/actions/provider/service';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { ErrorMessage } from "@hookform/error-message";
import LoaderAnimation from 'components/Loader/AnimatedLoaded';
import Loader from 'components/Loader/Loader';
import { getAllowActions } from 'functions';
import { confirmAlert } from 'functions';
import moment from "moment";
import { useNavigate, useParams } from 'react-router-dom';


const ProviderServiceAddModal = ({ openModal, toggleModal, id, edit, view, provider_id, getProviderServices, type }) => {
    const { permissions } = useSelector(state => state.authReducer);
    let pre_actions = getAllowActions({ permissions, module_name: "AUM" });
    const navigate = useNavigate();

    const [comState, setComState] = useState({
        values: {
            make: "",
            model: "",
            service: "",
            service_type: ""
        }
    })




    //Form Validtion
    const formSchema = Yup.object().shape({
        service_code: Yup.string()
            .required('Service Code is mendatory')
            .min(3, 'Service Code must be at 3 char long'),
        remarks: Yup.string()
        //     .optional(''),


    });

    const { register, handleSubmit, formState: { errors }, control } = useForm({ mode: "all", resolver: yupResolver(formSchema) });
    const { values, service_types, services, makes, models, loading_action, loading, success } = useSelector(state => state.providerServicesScreenReducer);
    const dispatch = useDispatch();
    const {
        service_code,
        service_type,
        service,
        remarks,
    } = values;


    const animatedComponents = makeAnimated();


    const _updateRecord = () => {
        getProviderServices();
        toggleModal()
    }

    const _onSubmit = data => {
        if (id) {
            //Update User
            dispatch(addService({ edit_id: id, provider_id, type, ...values }, _updateRecord))
        } else {
            //Add User
            dispatch(addService({ provider_id, type, ...values }, _updateRecord));
        }
    };



    const _clearState = () => {
        dispatch(clearInputValues());
    }



    useEffect(() => {
        if (edit && id) {
            dispatch(getProviderServiceDetails(parseInt(id)));
        }
        return () => {
            _clearState();
        }
    }, []);


    const _changeVal = ({ name, value }) => {
        switch (name) {
            case "service_type":
                //Getttig First Ten services
                dispatch(getServices("", value?.value));
                break;

            default:
                break;
        }

        dispatch(handleAddProviderServiceInputValue({ name, value }))
    }


    const _inputChangeHandler = (value, name) => {
        // if (value.length > 1) {
        //     switch (name) {
        //         case "service_type":
        //             dispatch(getServiceTypes(value));
        //             _changeVal({ name: "service", value: "" });
        //             break;
        //         case "service":
        //             dispatch(getServices(value, service_type.value));
        //             break;
        //     }
        // }

        setComState({
            ...comState,
            values: {
                ...comState.values,
                [name]: value
            }
        })


    }




    const _handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        _changeVal({ name, value });
    }


    useEffect(() => {
        dispatch(getServiceTypes("", provider_id));
    }, []);


    const _closeModal = () => {
        confirmAlert({
            title: "Are you sure?",
            text: "",
            buttonText: "Go Back",
            action: toggleModal
        });
    }




    return (
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
                            <h1 className="section-title">{view ? "View Services" : edit ? "Edit Services" : "Add Services"}</h1>
                        </div>
                        {!loading ?
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="ltnd__edit-table-item">
                                        <form onSubmit={handleSubmit(_onSubmit)} className="ltnd__form-1">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h6 className="ltnd__title-4 mt-2">Service Code *</h6>
                                                    <input type="text"
                                                        autoComplete='off'
                                                        {...register("service_code")}
                                                        disabled={view}
                                                        onChange={_handleChange} name="service_code" placeholder="Service code" value={service_code} />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="service_code"
                                                        render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                    />
                                                </div>
                                                <div className='col-lg-12 mt-2' >
                                                    <h6 className="ltnd__title-3 mt-2">Service Type *</h6>
                                                    <Select
                                                        closeMenuOnSelect={true}
                                                        {...register("service_type")}
                                                        onChange={(value) => _changeVal({ name: "service_type", value })}
                                                        value={service_type}
                                                        className="mt-2"
                                                        name="service_type"
                                                        onInputChange={(val) => _inputChangeHandler(val, "service_type")}
                                                        inputValue={comState.values.service_type}
                                                        isDisabled={view}
                                                        components={animatedComponents}
                                                        options={service_types.map((option => { return { label: option.Name, value: option.Id } }))}

                                                    />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="service_type"
                                                        className="errorMsg"
                                                        render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                    />
                                                </div>
                                                <div className="col-lg-12 mt-2">
                                                    <h6 className="ltnd__title-3 mt-2">Service *</h6>
                                                    <Select
                                                        closeMenuOnSelect={true}
                                                        {...register("service")}
                                                        onChange={(value) => _changeVal({ name: "service", value })}
                                                        onInputChange={(val) => _inputChangeHandler(val, "make")}
                                                        inputValue={comState.values.service}
                                                        value={service}
                                                        className="mt-2"
                                                        name="service"
                                                        isDisabled={view}
                                                        components={animatedComponents}
                                                        options={services.map((option => { return { label: option.Service, value: option.Id } }))}

                                                    />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="service"
                                                        className="errorMsg"
                                                        render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                    />

                                                </div>


                                                <div className="col-lg-12 mt-2">
                                                    <h6 className="ltnd__title-3 mt-2">Remarks</h6>
                                                    <textarea onChange={_handleChange} rows="2" name="remarks">
                                                        {remarks}
                                                    </textarea>
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="remarks"
                                                        render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                    />
                                                </div>


                                            </div>



                                            {/* <footer className="ltnd__footer-1 fixed-footer-1 bg-white mt-50"> */}
                                            <div className="container-fluid mt-2 ">
                                                <div className="row ">
                                                    <div className="col-lg-12">
                                                        <div className="ltnd__footer-1-inner pl-0 pr-0">
                                                            <div className="ltnd__left btn-normal">
                                                            </div>
                                                            <div className="ltnd__right btn-normal">
                                                                <div className="btn-wrapper">
                                                                    <a onClick={_closeModal} className="ltn__color-1" role="button"><i className="ti-angle-left"></i> Cancel</a>
                                                                    {!view ? loading_action ? <Loader /> : <button disabled={loading_action} type="submit" className="btn theme-btn-1 btn-round-12">{loading_action ? "loading" : "Save"}</button> : ""}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* </footer> */}
                                        </form>

                                    </div>
                                </div>
                            </div>
                            :
                            <LoaderAnimation />
                        }
                    </div>
                </div>
            </Animated>
        </Modal>






    )
}

export default ProviderServiceAddModal;
