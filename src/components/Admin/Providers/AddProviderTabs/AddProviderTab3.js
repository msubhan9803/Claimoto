import React from 'react';
import Garage_Icon from "assets/img/motor/garage-logo.png";
import Side_Image from 'assets/img/motor/login-bg-1.png';
import TabsHeader from 'components/Tabs/TabsHeader';
import { useDispatch, useSelector } from 'react-redux';
import { capitalizeFirstLetter } from 'functions';
import { useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from "@hookform/error-message";
import * as Yup from 'yup';
import { handleInputValue2 } from 'store/actions/provider';
import Select from 'react-select';

const AddProviderTab3 = () => {
    const { type } = useParams();
    const dispatch = useDispatch();
    // const { 
    //      Locations_values, Locations, Location_types, selected_Location_types,
    //     editLocationIndex, removeLocation } = useSelector(state => state.providersScreenReducer.tab2);
    // const { selected_Location, selected_Location_type } = Locations_values;

    let editLocationIndex, removeLocation = null;


    //Form Validtion
    const formSchema = Yup.object().shape({
        Location: Yup.string()
            .required('Location is mendatory'),
        Location_types: Yup.string()
            .required('Location Type is mendatory')
    })
    const { register, handleSubmit, reset, formState: { errors }, control } = useForm({ mode: "all", resolver: yupResolver(formSchema) });



    const _handleSelect = (name, value) => {
        dispatch(handleInputValue2({ name, value, compnnt: "user" }));
    }

    const _importLocationTypes = () => {

    }

    const _saveLocation = (data) => {

    }

    const _editLocation = (index) => {
        reset();
        dispatch(editLocationIndex(index));
    }


    const _addLocationModal = () => {
        reset();
        dispatch(handleInputValue2({ name: "add_Location_modal", value: true }));
    }



    const _closeAddLocationModal = () => {
        dispatch(handleInputValue2({ name: "add_Location_modal", value: false }));
        dispatch(handleInputValue2({ name: "edit_index", value: null }));
    }


    const _deleteLocation = (index) => {
        dispatch(removeLocation(index));
    }




    return (
        <React.Fragment>

            <div className="ltn__adding-tab-content-inner">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-area ">
                            <h1 className="section-title">{capitalizeFirstLetter(type)} location</h1>
                        </div>
                        <div className="ltnd__adding-method">
                            <div className="adding-method-title">
                                <p><strong> </strong></p>
                            </div>
                            <div role="button" onClick={_addLocationModal} className="adding-method-icon">
                                <i className="ti-plus"></i>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit(_saveLocation)} className="ltnd__form-1">
                            <input type="text" name="name" placeholder="Branch name" />

                            <Select
                                closeMenuOnSelect={true}
                                // {...register("service_type")}
                                onChange={(value) => _handleSelect("country", value)}
                                // value={selected_service_type}
                                name="country"
                                className='mt-3'
                            // options={services.map((option => { return { label: option.name, value: option.id } }))}

                            />
                            <ErrorMessage
                                errors={errors}
                                name="country"
                                className="errorMsg"
                                render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                            />

                            <Select
                                closeMenuOnSelect={true}
                                // {...register("service_type")}
                                onChange={(value) => _handleSelect("city", value)}
                                // value={selected_service_type}
                                name="city"
                                className='mt-3'
                            // options={services.map((option => { return { label: option.name, value: option.id } }))}

                            />
                            <ErrorMessage
                                errors={errors}
                                name="city"
                                className="errorMsg"
                                render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                            />

                            <Select
                                closeMenuOnSelect={true}
                                // {...register("service_type")}
                                onChange={(value) => _handleSelect("area", value)}
                                // value={selected_service_type}
                                name="area"
                                className='mt-3'
                            // options={services.map((option => { return { label: option.name, value: option.id } }))}

                            />
                            <ErrorMessage
                                errors={errors}
                                name="area"
                                className="errorMsg"
                                render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                            />

                            <input type="text" className='mt-3' name="name" placeholder="Street address " />
                            <p className='mt-3'><strong>Directions</strong></p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <input type="text" name="lat" placeholder="Latitude" />
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" name="long" placeholder="Longitude" />
                                </div>
                            </div>                        </form>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default AddProviderTab3;