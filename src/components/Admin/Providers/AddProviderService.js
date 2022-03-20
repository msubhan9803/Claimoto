import React, { useEffect, useState } from 'react'
import Img from 'assets/img/testimonial/1.jpg';
import Modal from 'react-modal';
import { Animated } from "react-animated-css";
import { modalStyle } from 'variables/modalCSS';
import { useSelector, useDispatch } from 'react-redux';
import { addService, getMakes, clearInputValues, handleAddProviderServiceInputValue, getModels, getServiceTypes, getServices } from 'store/actions/provider/service';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { ErrorMessage } from "@hookform/error-message";
import { getUserDetails } from 'store/actions/users/users_screen';
import { msgAlert } from 'functions';
import { confirmAlert } from 'functions';
import { addUser } from 'store/actions/users/users_screen';
import { getAllowActions } from 'functions';
import LoaderAnimation from 'components/Loader/AnimatedLoaded';
import Loader from 'components/Loader/Loader';


const ProviderServiceAddModal = ({ openModal, toggleModal, id, edit, view, provider_id }) => {

    const { permissions } = useSelector(state => state.authReducer);
    let pre_actions = getAllowActions({ permissions, module_name: "AUM" });

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
        from: Yup.string()
            .required('From is mendatory'),
        to: Yup.string()
            .required('To is mendatory'),
        unit_cost: Yup.string().required("Unit Cost is mendatory"),
        discount: Yup.string()
            .required('Discount is mendatory')

    });

    const { register, handleSubmit, formState: { errors }, control } = useForm({ mode: "all", resolver: yupResolver(formSchema) });
    const { values, service_types, services, makes, models, loading_action, loading, success } = useSelector(state => state.providerServicesScreenReducer);
    const dispatch = useDispatch();
    const {
        service_code,
        service_type,
        service,
        make,
        model,
        from,
        to,
        unit_cost,
        discount,
        remarks
    } = values;


    const animatedComponents = makeAnimated();

    const _onSubmit = data => {
        let service_type_id = services.find(srvs => srvs.Id === service.value)?.ServiceTypeId || null;
        if (id) {
            //Update User
            dispatch(addService({ edit_id: id, service_type_id, provider_id, ...values }))
        } else {
            //Add User
            dispatch(addService({ provider_id, service_type_id , ...values }));
        }
        // toggleModal();
    };



    const _clearState = () => {
        dispatch(clearInputValues());
    }



    // useEffect(() => {
    //     if (edit && id) {
    //         dispatch(getUserDetails(parseInt(id)));
    //     }
    //     return () => {
    //         _clearState();
    //     }
    // }, []);


    useEffect(() => {
        // dispatch(getMakes(""));
        // if (success) {
        //     // dispatch(getUsers({ users_per_page, users_page_index, search_text, search_option, sort_name, sort_type }));
        //     toggleModal();
        // }
    }, [success]);



    const _changeVal = ({ name, value }) => {
        switch (name) {
            case "make":
                //Getttig First Ten Models
                dispatch(getModels("", value?.value));
                break;

            // case "service_type":
            //     //Getttig First Ten services
            //     dispatch(getServices("", value?.value));
            //     break;

            default:
                break;
        }

        dispatch(handleAddProviderServiceInputValue({ name, value }))
    }


    const _inputChangeHandler = (value, name) => {
        // if (value.length > 1) {
        //     switch (name) {
        //         case "make":
        //             dispatch(getMakes(value));
        //             _changeVal({ name: "model", value: "" });
        //             break;
        //         case "model":
        //             dispatch(getModels(value, make.value));
        //             break;
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
        dispatch(getMakes(""));
        // dispatch(getServiceTypes("", provider_id));
        dispatch(getServices("", provider_id));

    }, []);




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
                                                {/* <div className='col-lg-12 mt-2' >
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
                                                </div> */}
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

                                                <div className='col-12'>
                                                    <div className="form-group">
                                                        <h6 className="ltnd__title-4 mt-2">Make *</h6>
                                                        <Select
                                                            value={make}
                                                            name="make"
                                                            inputValue={comState.values.make}
                                                            placeholder="Select Make"
                                                            onInputChange={(val) => _inputChangeHandler(val, "make")}
                                                            formatGroupLabel={"User"}
                                                            closeMenuOnSelect={true}
                                                            className="mt-1"
                                                            onChange={(value) => _changeVal({ name: "make", value })}
                                                            // components={animatedComponents}
                                                            options={[{ label: "All Makes", value: 0 }].concat(makes.map(make => { return { label: make?.MakeName, value: make?.Id } }))}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='col-12 '>
                                                    <div className="form-group">
                                                        <h6 className="ltnd__title-4 mt-2">Model *</h6>
                                                        <Select
                                                            value={model}
                                                            name="model"
                                                            inputValue={comState.values.model}
                                                            placeholder="Select Model"
                                                            formatGroupLabel={"model"}
                                                            onInputChange={(val) => _inputChangeHandler(val, "model")}
                                                            closeMenuOnSelect={true}
                                                            className="mt-1"
                                                            onChange={(value) => _changeVal({ name: "model", value })}
                                                            // components={animatedComponents}
                                                            options={[{ label: "All Models", value: 0 }].concat(models.map(model => { return { label: model?.ModelName, value: model?.Id } }))}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 mt-2">
                                                    <h6 className="ltnd__title-4 mt-2">From *</h6>
                                                    <input
                                                        autoComplete='off'
                                                        {...register("from")}
                                                        disabled={view}
                                                        type="number" onChange={_handleChange} name="from" placeholder="From" value={from} />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="from"
                                                        render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                    />
                                                </div>
                                                <div className="col-lg-6 mt-2">
                                                    <h6 className="ltnd__title-4 mt-2">To *</h6>
                                                    <input
                                                        autoComplete='off'
                                                        {...register("to")}
                                                        disabled={view}
                                                        type="number" onChange={_handleChange} name="to" placeholder="To " value={to} />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="to"
                                                        render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                    />
                                                </div>


                                                <div className="col-lg-6 mt-2">
                                                    <h6 className="ltnd__title-4 mt-2">Unit Cost *</h6>
                                                    <input
                                                        autoComplete='off'
                                                        {...register("unit_cost")}
                                                        disabled={view}
                                                        type="number" onChange={_handleChange} name="unit_cost" placeholder="Unit Cost" value={unit_cost} />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="unit_cost"
                                                        render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                    />
                                                </div>
                                                <div className="col-lg-6 mt-2">
                                                    <h6 className="ltnd__title-4 mt-2">Discount *</h6>
                                                    <input
                                                        autoComplete='off'
                                                        {...register("discount")}
                                                        disabled={view}
                                                        type="number" onChange={_handleChange} name="discount" placeholder="Discount (%) " value={discount} />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="discount"
                                                        render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                    />
                                                </div>


                                                <div className="col-lg-12 mt-2">
                                                    <h6 className="ltnd__title-3 mt-2">Remarks</h6>
                                                    <textarea rows="2">
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
                                                                    <a onClick={toggleModal} className="ltn__color-1" role="button"><i className="ti-angle-left"></i> Cancel</a>
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
