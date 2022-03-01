import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { capitalizeFirstLetter } from 'functions';
import { useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from "@hookform/error-message";
import * as Yup from 'yup';
import { handleInputValue3, getAreas, getCities, editLocationIndex, removeLocation, saveLocation } from 'store/actions/provider';
import { getCountries } from 'store/actions/provider';

const AddProviderTab3 = () => {
    const { type } = useParams();
    const dispatch = useDispatch();

    const { tab3 } = useSelector(state => state.addProviderScreenReducer);
    const { countries, cities, areas, location_values, selected_locations, add_location_modal, edit_index } = tab3;
    const {
        name,
        country,
        city,
        area,
        lat,
        long,
        url,
        street_address
    } = location_values;


    //Form Validtion
    const formSchema = Yup.object().shape({
        name: Yup.string()
            .required('Branch Name is mendatory'),
        country: Yup.string()
            .required('Country is mendatory'),
        city: Yup.string()
            .required('City Type is mendatory'),
        area: Yup.string()
            .required('Area Type is mendatory'),
        lat: Yup.string()
            .required('Lat is mendatory'),
        long: Yup.string()
            .required('Long is mendatory'),
        url: Yup.string()
            .required('Url is mendatory'),
        street_address: Yup.string()
            .required('Street Address is mendatory'),
    })
    const { register, handleSubmit, reset, formState: { errors }, control } = useForm({ mode: "all", resolver: yupResolver(formSchema) });


    const _importLocationTypes = () => {

    }

    const _saveLocation = (data) => {
        dispatch(saveLocation({ ...location_values, edit_index }))
    }

    const _editLocation = (index) => {
        reset();
        let selected_loc = selected_locations[index];
        dispatch(getCountries());
        dispatch(getCities(selected_loc.country));
        dispatch(getAreas(selected_loc.city));

        dispatch(editLocationIndex(index));
    }




    const _handleChange = (event) => {

        let name = event.target.name;
        let value = event.target.value;
        if (name === "country") {
            dispatch(getCities(value));
        }
        if (name === "city") {
            dispatch(getAreas(value));
        }
        dispatch(handleInputValue3({ name, value, comp: 1 }));

    }


    const _addLocationModal = (action) => {
        reset();
        dispatch(handleInputValue3({ name: "add_location_modal", value: action, comp: 0 }));
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
                            <div role="button" onClick={() => _addLocationModal(true)} className="adding-method-icon">
                                <i className="ti-plus"></i>
                            </div>
                        </div>
                        {add_location_modal &&
                            <form onSubmit={handleSubmit(_saveLocation)} className="ltnd__form-1">
                                <input type="text" name="name" placeholder="Branch name" value={name}
                                    {...register("name")}
                                    onChange={_handleChange}
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="name"
                                    className="errorMsg"
                                    render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                />

                                <label>Select Country</label>
                                <select
                                    className='form-control'
                                    value={country}
                                    name="country"
                                    {...register("country")}
                                    onChange={_handleChange}

                                >
                                    <option disabled={true} value="">Select Country</option>
                                    {countries?.map(country => (
                                        <option key={country.id} value={country.Id}>{country.Name}</option>
                                    )) || []}
                                </select>
                                <ErrorMessage
                                    errors={errors}
                                    name="country"
                                    className="errorMsg" xw
                                    render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                />


                                <label>Select City</label>
                                <select
                                    className='form-control'
                                    value={city}
                                    name="city"
                                    {...register("city")}
                                    onChange={_handleChange}

                                >
                                    <option disabled={true} value="">Select City</option>
                                    {cities?.map(city => (
                                        <option key={city.id} value={city.Id}>{city.Name}</option>
                                    )) || []}
                                </select>
                                <ErrorMessage
                                    errors={errors}
                                    name="city"
                                    className="errorMsg"
                                    render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                />



                                <label>Select Area</label>
                                <select
                                    className='form-control'
                                    value={area}
                                    name="area"
                                    {...register("area")}
                                    onChange={_handleChange}

                                >
                                    <option disabled={true} value="">Select Area</option>
                                    {areas?.map(area => (
                                        <option key={area.id} value={area.Id}>{area.Name}</option>
                                    )) || ""}
                                </select>
                                <ErrorMessage
                                    errors={errors}
                                    name="area"
                                    className="errorMsg"
                                    render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                />







                                <input type="text" className='mt-3' name="street_address" placeholder="Street address " value={street_address}
                                    {...register("street_address")}
                                    onChange={_handleChange}
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="street_address"
                                    className="errorMsg"
                                    render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                />



                                <p className='mt-3'><strong>Directions</strong></p>
                                <input type="text" name="url" placeholder="URL " value={url}
                                    {...register("url")}
                                    onChange={_handleChange}
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="url"
                                    className="errorMsg"
                                    render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                />
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input type="text" name="lat" placeholder="Latitude" value={lat}
                                            {...register("lat")}
                                            onChange={_handleChange}
                                        />
                                        <ErrorMessage
                                            errors={errors}
                                            name="lat"
                                            className="errorMsg"
                                            render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" name="long" placeholder="Longitude" value={long}
                                            {...register("long")}
                                            onChange={_handleChange}
                                        />
                                        <ErrorMessage
                                            errors={errors}
                                            name="long"
                                            className="errorMsg"
                                            render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                        />
                                    </div>
                                </div>


                                <div className='mt-3'>

                                    <button type='submit' className="btn btn-xs theme-btn-3 btn-round-12 mt-2">Add</button>
                                    <button onClick={() => _addLocationModal(false)} className="btn btn-xs theme-btn-1 btn-round-12 mt-2">Cancel</button>
                                </div>



                            </form>}


                        {selected_locations?.length > 0 &&
                            <div class="list-group mt-3">
                                <a href="#" class="list-group-item list-group-item-action active disabled">
                                    Locations</a>
                                {selected_locations?.map((loc, index) => (
                                    <div class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                        <div onClick={() => _editLocation(index)} role="button">{loc.name || ""}</div>
                                        <div>
                                            <span onClick={() => _deleteLocation(index)} role="button" className='text-danger'>x</span>
                                        </div>

                                    </div>)) || []}
                            </div>
                        }
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default AddProviderTab3;