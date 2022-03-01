import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { capitalizeFirstLetter } from 'functions';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from "@hookform/error-message";
import * as Yup from 'yup';
import { handleInputValue2, saveService , editServiceIndex, removeService} from 'store/actions/provider';
import Select from 'react-select';
import { getServiceChilds } from 'store/actions/provider';
import { getServices } from 'store/actions/provider';



const AddProviderTab2 = () => {
    const { type } = useParams();
    const dispatch = useDispatch();
    const { tab2 } = useSelector(state => state.addProviderScreenReducer);
    const { services_values, services, service_types, selected_service_types, edit_index, add_service_modal } = tab2;
    const { service, service_type } = services_values;


    //Form Validtion
    const formSchema = Yup.object().shape({
        service: Yup.string()
            .required('Service is mendatory'),
        service_type: Yup.string()
            .required('Service Type is mendatory')
    })
    const { register, handleSubmit, reset, formState: { errors }, control } = useForm({ mode: "all", resolver: yupResolver(formSchema) });







    const _handleChange = (event) => {

        let name = event.target.name;
        let value = event.target.value;
        if(name === "service"){
            dispatch(getServiceChilds(value));
        }
        dispatch(handleInputValue2({ name, value, comp: 1 }));

    }

    const _importServiceTypes = () => {

    }

    const _saveService = (data) => {
        let serviceObj = service_types.find(svrs=> svrs.Id === parseInt(service_type));
        dispatch(saveService({service, service_type, edit_index, service_name:serviceObj.Service }))
    }

    const _editService = (index) => {
        let selected_service = selected_service_types[index];
        dispatch(getServices());
        dispatch(getServiceChilds(selected_service.service));
        reset();
        dispatch(editServiceIndex(index));
    }


    const _addServiceModal = (act) => {
        reset();
        dispatch(handleInputValue2({ name: "add_service_modal", value: act, comp:0 }));
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
                            <div role="button" onClick={()=>_addServiceModal(true)} className="adding-method-icon">
                                <i className="ti-plus"></i>
                            </div>
                        </div>
                        {add_service_modal &&
                        <form onSubmit={handleSubmit(_saveService)} className="ltnd__form-1 ltnd__block-item">
                            <label>Select Service</label>
                            <select
                                className='form-control'
                                value={service}
                                name="service"
                                {...register("service")}
                                onChange={_handleChange}

                            >
                                <option disabled={true} value="">Select Service</option>
                                {services.map(service => (
                                    <option key={service.id} value={service.Id}>{service.Name}</option>
                                ))}
                            </select>
                            <ErrorMessage
                                errors={errors}
                                name="service"
                                className="errorMsg"
                                render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                            />
                            <label>Select Service Type</label>
                            <select
                                className='form-control'
                                value={service_type}
                                {...register("service_type")}
                                name="service_type"
                                onChange={_handleChange}
                            >
                                <option disabled={true} value="">Select Service Type</option>
                                {service_types.map(service => (
                                    <option key={service.id} value={service.Id}>{service.Service}</option>
                                ))}
                            </select>
                            <ErrorMessage
                                errors={errors}
                                name="service_type"
                                className="errorMsg"
                                render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                            />

                            <button className="btn btn-xs theme-btn-3 btn-round-12 mt-2">Add</button>
                            <button onClick={_closeAddServiceModal} className="btn btn-xs theme-btn-1 btn-round-12 mt-2">Cancel</button>


                            {/* <a className="ltn__secondary-color mt-2" href="#"><strong>Add service +</strong></a> */}
                        </form>
                        }


                        {selected_service_types.length > 0 &&
                            <div class="list-group mt-3">
                                <a href="#" class="list-group-item list-group-item-action active disabled">
                                    Services</a>
                                {selected_service_types.map((service, index) => (
                                    <div class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                        <div onClick={() => _editService(index)} role="button">{service?.service_name || ""}</div>
                                        <div>
                                            <span onClick={() => _deleteService(index)} role="button" className='text-danger'>x</span>
                                        </div>

                                    </div>))}
                            </div>
                        }






                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default AddProviderTab2;