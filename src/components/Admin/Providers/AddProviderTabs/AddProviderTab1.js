import React, { createRef } from 'react';
import Garage_Icon from "assets/img/motor/garage-logo.png";
import { useParams } from "react-router-dom";
import { capitalizeFirstLetter } from 'functions';
import { useDispatch, useSelector } from 'react-redux';
import { handleInputValue, addContacts, removeContact } from 'store/actions/provider';
import { msgAlert } from 'functions';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from "@hookform/error-message";
import * as Yup from 'yup';
import { editContactIndex } from 'store/actions/provider';




const AddProviderTab1 = () => {
    const { tab1 } = useSelector(state => state.addProviderScreenReducer);
    const { logo, name, full_name, email, phone, contacts, add_contact_modal, edit_index } = tab1;
    const imageRef = createRef();
    const { type } = useParams();
    const dispatch = useDispatch();



    //Form Validtion
    const formSchema = Yup.object().shape({
        full_name: Yup.string()
            .required('Full Name is mendatory')
            .min(3, 'Full Name must be at 3 char long'),
        email: Yup.string().email().required("Email is mendatory"),
        phone: Yup.string().required("Phone is mendatory"),
    });


    const { register, handleSubmit, reset, formState: { errors }, control } = useForm({ mode: "all", resolver: yupResolver(formSchema) });


    const _onImageChange = (event) => {
        let s_file = event.target.files[0];
        let selectedTypes = ["image/png", "image/jpg", "image/jpeg"]
        if (!selectedTypes.includes(s_file.type)) {
            msgAlert({ title: "Invalid Image Type", text: "Only Png and Jpeg images are allowed" });
            imageRef.current.value = "";
        }
        else if (s_file.size < 20000) {
            msgAlert({ title: "Invalid Image Size", text: "Only > 2 MB are allowed" });
            imageRef.current.value = "";
        }
        else {
            const reader = new FileReader();
            reader.onloadend = () => {
                let image_type = s_file.type.split('/')[1];
                dispatch(handleInputValue({ name: "logo", value: { Base64: reader.result, Type: image_type, ImageName: s_file.name, file: s_file }, compnnt: "user" }))
            }
            reader.readAsDataURL(s_file);
        }
    }


    const _editContact = (index) => {
        reset();
        dispatch(editContactIndex(index));
    }


    const _addContactModal = () => {
        reset();
        dispatch(handleInputValue({ name: "add_contact_modal", value: true }));


    }


    const _closeAddContactModal = () => {
        dispatch(handleInputValue({ name: "add_contact_modal", value: false }));
        dispatch(handleInputValue({ name: "edit_index", value: null }));
    }


    const _deleteContact = (index) => {
        dispatch(removeContact(index));
    }

    const _saveContact = () => {
        dispatch(addContacts({ full_name, email, phone, edit_index }));
    }

    const _handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        dispatch(handleInputValue({ name, value }));
    }




    return (
        <React.Fragment>

            <div className="ltn__adding-tab-content-inner">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-area ">
                            <h1 className="section-title">{capitalizeFirstLetter(type) || ""} details</h1>
                        </div>
                        <p><strong>{capitalizeFirstLetter(type) || ""} logo</strong></p>
                        <div className="garage-logo mb-30">
                            <img src={logo?.Base64 || typeof logo === "string" && `${process.env.REACT_APP_API_ENVIRONMENT}/${logo}` || Garage_Icon} style={{ cursor: "pointer" }} onClick={() => { imageRef.current.click() }} alt="user_image" width={150} />
                            <input type="file" ref={imageRef} style={{ display: "none" }} onChange={_onImageChange} name="logo" />
                        </div>




                        <input type="text" onChange={_handleChange} name="name" value={name} placeholder={"Name"} />
                        <div className="ltnd__adding-method">
                            <div className="adding-method-title">
                                <p><strong>Point of contact </strong></p>
                            </div>
                            <div role="button" onClick={_addContactModal} className="adding-method-icon">
                                <i className="ti-plus"></i>
                            </div>
                        </div>

                        {add_contact_modal &&
                            <form onSubmit={handleSubmit(_saveContact)} className="ltnd__form-1 mt-2">

                                <input
                                    value={full_name || ""}
                                    {...register("full_name")}
                                    type="text" onChange={_handleChange} name="full_name" placeholder="Full name"
                                    autoComplete='off'

                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="full_name"
                                    render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                />
                                <input
                                    value={phone || ""}
                                    {...register("phone")}
                                    type="text" onChange={_handleChange} name="phone" placeholder="phone number"
                                    autoComplete='off'

                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="phone"
                                    render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                />
                                <input
                                    value={email || ""}
                                    {...register("email")}
                                    type="email" onChange={_handleChange} name="email" placeholder="Email"
                                    autoComplete='off'

                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="email"
                                    render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                />
                                <button className="btn btn-xs theme-btn-3 btn-round-12 mt-2">Add</button>
                                <button onClick={_closeAddContactModal} className="btn btn-xs theme-btn-1 btn-round-12 mt-2">Cancel</button>



                            </form>
                        }
                        {contacts?.length > 0 &&
                            <div class="list-group mt-3">
                                <a href="#" class="list-group-item list-group-item-action active disabled">
                                    Contacts</a>
                                {contacts.map((contact, index) => (
                                    <div class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                        <div onClick={() => _editContact(index)} role="button">{contact.full_name || ""}</div>
                                        <div>
                                            <span onClick={() => _deleteContact(index)} role="button" className='text-danger'>x</span>
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

export default AddProviderTab1;