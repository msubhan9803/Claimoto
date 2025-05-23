import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { Animated } from "react-animated-css";
import { modalStyle } from 'variables/modalCSS';
import { useSelector, useDispatch } from 'react-redux';
import { addServicePrice, getMakes, clearInputValues, handleAddProviderServiceInputValue, getModels, getProviderServicePriceDetails } from 'store/actions/provider/price';
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


const ServicePriceAddModal = ({ openModal, toggleModal, id, edit, view, provider_id, service_id, getProviderServices, type }) => {
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
        from: Yup.string().when('year_all', {
            is: true,
            then: Yup.string().required("Year is mendatory")
        }),
        // to: Yup.string()
        //     .required('To is mendatory'),
        unit_cost: Yup.number().required("Unit Cost is mendatory").min(1, "Unit Cost must be greater then 0"),
        discount: Yup.string()
            .required('Discount is mendatory'),
        // start_date: Yup.string().when('date_all', {
        //     is: true,
        //     then: Yup.string().required("Start Date is mendatory")
        // }),
        // end_date: Yup.string().when('date_all', {
        //     is: true,
        //     then: Yup.string().required("End Date is mendatory")
        // }),
        start_date:Yup.string().required("Start Date is mendatory"),
        end_date:Yup.string().required("End Date is mendatory"),
        remarks: Yup.string(),
        //     .optional(''),
        // date_all: Yup.boolean(),
        // year_all: Yup.boolean()


    });

    const { register, handleSubmit, formState: { errors }, control } = useForm({ mode: "all", resolver: yupResolver(formSchema) });
    const { values, services, makes, models, loading_action, loading, success } = useSelector(state => state.providerServicesPriceScreenReducer);
    const dispatch = useDispatch();
    const {
        service,
        make,
        model,
        from,
        to,
        unit_cost,
        discount,
        remarks,
        start_date,
        end_date,
        date_all,
        year_all
    } = values;


    const animatedComponents = makeAnimated();


    const _updateRecord = () => {
        getProviderServices();
        toggleModal()
    }

    const _onSubmit = data => {
        if (id) {
            //Update User
            dispatch(addServicePrice({ edit_id: id, provider_id, service_id, type, ...values }, _updateRecord))
        } else {
            //Add User
            dispatch(addServicePrice({ provider_id, service_id, type, ...values }, _updateRecord));
        }
    };



    const _clearState = () => {
        dispatch(clearInputValues());
    }



    useEffect(() => {
        if (edit && id) {
            dispatch(getProviderServicePriceDetails(parseInt(id)));
        }
        return () => {
            _clearState();
        }
    }, []);


    const _changeVal = ({ name, value }) => {
        const n_years = 100;
        switch (name) {
            case "make":
                //Getttig First Ten Models
                dispatch(getModels("", value?.value));
                break;
                
            case "year_all":
                let current_year = new Date().getFullYear();
                let year = value ? current_year : current_year - n_years;
                dispatch(handleAddProviderServiceInputValue({ name: "from", value: year }));
                break;

            case "date_all":
                let end_date = value ? new Date() : new Date(new Date().setFullYear(new Date().getFullYear() + n_years));
                let start_date = new Date();
                dispatch(handleAddProviderServiceInputValue({ name: "start_date", value: start_date }));
                dispatch(handleAddProviderServiceInputValue({ name: "end_date", value: end_date }));
                break;
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
                            <h1 className="section-title">{view ? "View Price Contract" : edit ? "Edit Price Contract" : "Add Price Contract"}</h1>
                        </div>
                        {!loading ?
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="ltnd__edit-table-item">
                                        <form onSubmit={handleSubmit(_onSubmit)} className="ltnd__form-1">
                                            <div className="row">
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
                                                <div className="col-lg-12 mt-2">
                                                    <div class="form-check form-switch">
                                                        <label className="form-check-label" for="year">Specify Year</label>
                                                        <input  className="form-check-input mt-1" onChange={() => _changeVal({ name: "year_all", value: !year_all })} type="checkbox" id="year" checked={year_all} value={year_all} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 mt-2">
                                                    <h6 className="ltnd__title-4 mt-2">Year *</h6>
                                                    <input
                                                        autoComplete='off'
                                                        {...register("from")}
                                                        disabled={view || !year_all}
                                                        type="number" onChange={_handleChange} name="from" placeholder="Year" value={from} />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="from"
                                                        render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                    />
                                                </div>
                                                {/* <div className="col-lg-6 mt-2">
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
                                                </div> */}
                                                <div className="col-lg-12 mt-2">
                                                    <div class="form-check form-switch">
                                                        <label className="form-check-label" for="time_duration">Time Duration</label>
                                                        <input  className="form-check-input mt-1" onChange={() => _changeVal({ name: "date_all", value: !date_all })} type="checkbox" id="time_duration" checked={date_all} value={date_all} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 mt-2">
                                                    <h6 className="ltnd__title-4 mt-2">Start Date *</h6>
                                                    <input
                                                        autoComplete='off'
                                                        {...register("start_date")}
                                                        disabled={view || !date_all}
                                                        type="date" className='form-control' onChange={_handleChange} name="start_date" placeholder="Start_date" value={moment(start_date).format("YYYY-MM-DD")} />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="start_date"
                                                        render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                    />
                                                </div>
                                                <div className="col-lg-6 mt-2">
                                                    <h6 className="ltnd__title-4 mt-2">End Date *</h6>
                                                    <input
                                                        autoComplete='off'
                                                        {...register("end_date")}
                                                        disabled={view || !date_all}
                                                        type="date" onChange={_handleChange} className="form-control" name="end_date" placeholder="End date" value={moment(end_date).format("YYYY-MM-DD")} />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="end_date"
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

export default ServicePriceAddModal;
