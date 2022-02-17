import React, { useEffect, createRef } from 'react'
import Img from 'assets/img/testimonial/1.jpg';
import Modal from 'react-modal';
import { Animated } from "react-animated-css";
import { modalStyle } from 'variables/modalCSS';
import { useSelector, useDispatch } from 'react-redux';
import { handleInputValue } from 'store/actions/users/users_screen';
import { clearInputValues } from 'store/actions/users/users_screen';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup';
import { ErrorMessage } from "@hookform/error-message";
import { getUserDetails } from 'store/actions/users/users_screen';
import { msgAlert } from 'functions';


const UserAddModal = ({ openModal, toggleModal, id, edit }) => {


    //Form Validtion
    const formSchema = Yup.object().shape({
        first_name: Yup.string()
            .required('First Name is mendatory')
            .min(3, 'First Name must be at 3 char long'),
        last_name: Yup.string()
            .required('Last Name is mendatory')
            .min(3, 'Last Name must be at 3 char long'),
        password: Yup.string().optional()
            // .required('Password is mendatory')
            ,
        confirm_password: Yup.string()
            // .required('Password is mendatory')
            .oneOf([Yup.ref('password')], 'Passwords does not match'),
        email: Yup.string().email().required("Email is mendatory"),
        phone: Yup.string().required("Phone is mendatory"),
        // attachment: Yup.mixed()
        //     .test('fileType', 'Unsupported File Format', function (value) {
        //         if (!value.length) return true // attachment is optional
        //         const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
        //         return SUPPORTED_FORMATS.includes(value.type)
        //     })
        //     .test('fileSize', "File Size is too large", value => {
        //         if (!value.length) return true // attachment is optional
        //         const sizeInBytes = 500000;//0.5MB
        //         return value.size <= sizeInBytes;
        //     })

    })

    const { register, handleSubmit, formState: { errors }, control } = useForm({ mode: "all", resolver: yupResolver(formSchema) });
    const imageRef = createRef();
    const { roles, userValues, access_groups } = useSelector(state => state.usersScreenReducer);
    const dispatch = useDispatch();
    const {
        first_name,
        last_name,
        phone,
        email,
        access_role,
        access_group,
        selected_image,
        password,
        confirm_password,
        loading
    } = userValues;


    const animatedComponents = makeAnimated();

    const _onSubmit = data => {
        alert(JSON.stringify(data));

    };

    const _handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        dispatch(handleInputValue({ name, value, compnnt: "user" }));
    }
    const _handleSelect = (name, value) => {
        dispatch(handleInputValue({ name, value, compnnt: "user" }));
    }

    const _handleMultipleSelect = (value) => {
        let name = "access_group";
        dispatch(handleInputValue({ name, value, compnnt: "user" }));
    }

    const _onImageChange = (event) => {
        let s_file = event.target.files[0];
        let selectedTypes = ["image/png", "image/jpg", "image/jpeg"]
        if (!selectedTypes.includes(s_file.type)) {
            msgAlert({ title: "Invalid Image Type", text: "Only Png and Jpeg images are allowed" });
            imageRef.current.value = "";
        }
        else if (s_file.size > 20000) {
            msgAlert({ title: "Invalid Image Size", text: "Only > 2 MB are allowed" });
            imageRef.current.value = "";
        }
        else {
            const reader = new FileReader();
            reader.onloadend = () => {
                dispatch(handleInputValue({ name: "selected_image", value: {base64: reader.result, file:s_file}, compnnt: "user" }))
            }
            reader.readAsDataURL(s_file);
        }
    }

    const _clearState = () => {
        dispatch(clearInputValues());
        toggleModal();
    }



    useEffect(() => {
        if (edit && id) {
            dispatch(getUserDetails(parseInt(id)));
        }
    }, [edit, id]);


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
                            <h1 className="section-title">{edit ? "Edit member" : "Add member"}</h1>
                        </div>
                        {!loading ?
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="ltnd__edit-table-item">
                                        <form onSubmit={handleSubmit(_onSubmit)} className="ltnd__form-1">
                                            <div className="ltnd__edit-table-logo-title mb-20">
                                                <div className="ltnd__edit-table-logo">
                                                    <img src={selected_image?.base64 || selected_image?.file || Img} style={{ cursor: "pointer" }} onClick={() => { imageRef.current.click() }} alt="user_image" />
                                                    <input type="file" ref={imageRef} style={{ display: "none" }} onChange={_onImageChange} name="attachment" />
                                                </div>
                                                <div className="ltnd__edit-table-title">
                                                    <h3>{first_name || "First Name"} {last_name || "Last Name"} </h3>
                                                    <p className="ltn__color-1">{email || "Email"}</p>
                                                </div>
                                            </div>
                                            {/* <ErrorMessage
                                            errors={errors}
                                            name="attachment"
                                            render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                        /> */}
                                            <h6 className="ltnd__title-3">Personal information</h6>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <input type="text"
                                                        autoComplete='off'
                                                        {...register("first_name")}
                                                        onChange={_handleChange} name="first_name" placeholder="First name" value={first_name} />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="first_name"
                                                        render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                    />
                                                </div>
                                                <div className="col-lg-6">
                                                    <input
                                                        autoComplete='off'
                                                        {...register("last_name", {
                                                            required: "Last Name is required.",
                                                            minLength: {
                                                                value: 4,
                                                                message: "Last Name must exceed 5 characters"
                                                            }
                                                        })}
                                                        type="text" onChange={_handleChange} name="last_name" placeholder="Last name " value={last_name} />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="last_name"
                                                        render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                    />
                                                </div>
                                            </div>
                                            <h6 className="ltnd__title-3">Contact information</h6>
                                            <input
                                                {...register("phone")}
                                                type="text" onChange={_handleChange} name="phone" placeholder="079 079 1189" value={phone} />
                                            <ErrorMessage
                                                errors={errors}
                                                name="phone"
                                                render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                            />
                                            <input
                                                {...register("email")}
                                                type="email" onChange={_handleChange} name="email" placeholder="Email" value={email} />
                                            <ErrorMessage
                                                errors={errors}
                                                name="email"
                                                render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                            />
                                            <h6 className="ltnd__title-3">Password Management</h6>

                                            <input
                                                {...register("password")}
                                                type="password" onChange={_handleChange} name="password" placeholder="Password" value={password} />
                                            <ErrorMessage
                                                errors={errors}
                                                name="password"
                                                render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                            />

                                            <input
                                                {...register("confirm_password")}
                                                type="password" onChange={_handleChange} name="confirm_password" placeholder="Confirm Password" value={confirm_password} />
                                            <ErrorMessage
                                                errors={errors}
                                                name="confirm_password"
                                                render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                            />





                                            <div className="input-item">
                                                <h6 className="ltnd__title-3">Access role *</h6>
                                                <Select
                                                    closeMenuOnSelect={true}
                                                    {...register("access_role")}
                                                    onChange={(value) => _handleSelect("access_role", value)}
                                                    value={access_role}
                                                    name="access_role"
                                                    components={animatedComponents}
                                                    options={roles.map((option => { return { label: option.RoleName, value: option.RoleId } }))}

                                                />
                                                <ErrorMessage
                                                    errors={errors}
                                                    name="access_role"
                                                    className="errorMsg"
                                                    render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                />
                                            </div>
                                            <div className="input-item mt-3">
                                                <h6 className="ltnd__title-3 mb-2">Access Group *</h6>
                                                <Select
                                                    value={access_group}
                                                    name="access_group"
                                                    closeMenuOnSelect={false}
                                                    onChange={_handleMultipleSelect}
                                                    components={animatedComponents}
                                                    isMulti
                                                    options={access_groups.filter(ag => ag.RoleId === parseInt(access_role.value) && ag.IsDefault).map((option => { return { label: option.GroupName, value: option.Id } }))}
                                                />
                                                <ErrorMessage
                                                    errors={errors}
                                                    name="access_group"
                                                    className="errorMsg"
                                                    render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                />
                                            </div>


                                            {/* <footer className="ltnd__footer-1 fixed-footer-1 bg-white mt-50"> */}
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="ltnd__footer-1-inner pl-0 pr-0">
                                                            <div className="ltnd__left btn-normal">
                                                                <a className="ltn__color-1"><i className="ti-trash"></i> Delete</a>
                                                            </div>
                                                            <div className="ltnd__right btn-normal">
                                                                <div className="btn-wrapper">
                                                                    <a onClick={_clearState} className="ltn__color-1"><i className="ti-angle-left"></i> Cancel</a>
                                                                    <button type="submit" className="btn theme-btn-1 btn-round-12">Save</button>
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
                            <div class="spinner-grow" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        }
                    </div>
                </div>
            </Animated>
        </Modal>






    )
}

export default UserAddModal;
