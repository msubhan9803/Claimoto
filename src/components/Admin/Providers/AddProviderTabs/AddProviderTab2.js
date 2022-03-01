import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { capitalizeFirstLetter } from 'functions';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from "@hookform/error-message";
import * as Yup from 'yup';
import { handleInputValue2 } from 'store/actions/provider';
import Select from 'react-select';



const AddProviderTab2 = () => {
    const { type } = useParams();
    const dispatch = useDispatch();
    // const { 
    //      services_values, services, service_types, selected_service_types,
    //     editServiceIndex, removeService } = useSelector(state => state.providersScreenReducer.tab2);
    // const { selected_service, selected_service_type } = services_values;

    let editServiceIndex, removeService = null;


    //Form Validtion
    const formSchema = Yup.object().shape({
        service: Yup.string()
            .required('Service is mendatory'),
        service_types: Yup.string()
            .required('Service Type is mendatory')
    })
    const { register, handleSubmit, reset, formState: { errors }, control } = useForm({ mode: "all", resolver: yupResolver(formSchema) });



    const _handleSelect = (name, value) => {
        dispatch(handleInputValue2({ name, value, compnnt: "user" }));
    }

    const _importServiceTypes = () => {

    }

    const _saveService = (data) => {

    }

    const _editService = (index) => {
        reset();
        dispatch(editServiceIndex(index));
    }


    const _addServiceModal = () => {
        reset();
        dispatch(handleInputValue2({ name: "add_service_modal", value: true }));
    }



    const _closeAddServiceModal = () => {
        dispatch(handleInputValue2({ name: "add_service_modal", value: false }));
        dispatch(handleInputValue2({ name: "edit_index", value: null }));
    }


    const _deleteService = (index) => {
        dispatch(removeService(index));
    }





    return (
        <React.Fragment>

            <div className="ltn__adding-tab-content-inner">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-area ">
                            <h1 className="section-title">{capitalizeFirstLetter(type)} Services</h1>
                        </div>
                        <div className="ltnd__adding-method">
                            <div onClick={_importServiceTypes} role="button" className="adding-method-title">
                                <p><strong>Import </strong></p>
                            </div>
                            <div role="button" onClick={_addServiceModal} className="adding-method-icon">
                                <i className="ti-plus"></i>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit(_saveService)} className="ltnd__form-1 ltnd__block-item">
                            <Select
                                closeMenuOnSelect={true}
                                // {...register("service_type")}
                                onChange={(value) => _handleSelect("service_type", value)}
                                // value={selected_service_type}
                                name="service_type"
                                className='mt-3'
                            // options={services.map((option => { return { label: option.name, value: option.id } }))}

                            />
                            <ErrorMessage
                                errors={errors}
                                name="service_type"
                                className="errorMsg"
                                render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                            />
                            <Select
                                closeMenuOnSelect={true}
                                // {...register("service")}
                                onChange={(value) => _handleSelect("service", value)}
                                // value={selected_service}
                                className='mt-3'
                                name="service"
                            // options={service_types.map((option => { return { label: option.name, value: option.id } }))}

                            />
                            <ErrorMessage
                                errors={errors}
                                name="service_type"
                                className="errorMsg"
                                render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                            />

                            <button className="btn btn-xs theme-btn-3 btn-round-12 mt-2">Add</button>
                            <button onClick={_closeAddServiceModal} className="btn btn-xs theme-btn-1 btn-round-12 mt-2">Cancel</button>


                            <a className="ltn__secondary-color mt-2" href="#"><strong>Add service +</strong></a>
                        </form>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default AddProviderTab2;