import React, { useEffect } from 'react'
import carImg from 'assets/img/motor/vehicle/1.png'
import carImg2 from 'assets/img/motor/vehicle/12.png'
import carImg3 from 'assets/img/motor/vehicle/14.png'
import carImg4 from 'assets/img/motor/vehicle/11.png'
import carIcon from 'assets/img/icons/mc/png/2.png'
import imgUpload from 'assets/img/upload.png'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { msgAlert } from 'functions'
import { useDispatch, useSelector } from 'react-redux'
import { RegisterPolicies, GetInputs, GetColor } from 'store/actions/policies'
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { SweetAlert } from 'functions'
function VehicalDetail() {

    const params = useParams().id


    const dispatch = useDispatch()

    const changeValue = (e) => {
        e.persist();
        const { name, value } = e.target;
        dispatch(GetInputs(name, value))



    }

    const formSchema = Yup.object().shape({
        PlateNumber: Yup.string()
            .required('Plate Number  is required'),
        ColourId: Yup.string()
            .required('Colour is required'),
        Year: Yup.string()
            .required('Year is required'),
        Capacity: Yup.string()
            .required('Capacity is required')
            .max(2, "Enter 2 digits"),
        ChassisNumber: Yup.string()
            .required('Chassis Number is required'),

    })

    const _onImageChange = (event) => {
        let s_file = event.target.files[0];
        let name = event.target.name
        let selectedTypes = ["image/png", "image/jpg", "image/jpeg"]
        if (!selectedTypes.includes(s_file.type)) {
            msgAlert({ title: "Invalid Image Type", text: "Only Png and Jpeg images are allowed" });
            // imageRef.current.value = "";
        }
        else if (s_file.size < 10000) {
            msgAlert({ title: "Invalid Image Size", text: "Only < 1 MB are allowed" });
        }
        else {
            dispatch(GetInputs(name, s_file))
        }
    }




    useEffect(() => {
        dispatch(GetColor())
    }, [])



    const car_colors = useSelector(state => state.policyReducer.color)
    const policy = useSelector(state => state.policyReducer.policy)

    const {
        
        PlateNumber,
        Year,
        ColourId,
        Capacity,
        ChassisNumber,
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        

    } = policy 



    // Send Form data 

    const SendForm = () => {
        dispatch(RegisterPolicies(policy))
    }

    // update form data 

    const updatProduct = () => {
        // dispatch(UpdateProduct(product))
    }

    const onSubmit = () => {
        // let checkImg = Image1 || Image2 || Image3 || Image4 || Image5
        return params
            ? updatProduct()
            :  SendForm() 

    }



    const formOptions = { resolver: yupResolver(formSchema), mode: "onChange", }
    const { register, handleSubmit, formState: { errors }, control } = useForm(formOptions);



    return (
        <React.Fragment>
            <div className="ltnd__header-area ltnd__header-area-2 section-bg-2---">
                <div className="ltnd__header-middle-area mt-30">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="ltnd__page-title-area">
                                <p className="page-back-btn">
                                    <Link to="/admin/create_policy">
                                        <i className="icon-left-arrow-1" /> Back
                                    </Link>
                                </p>
                                <h2>Vehicle details</h2>
                            </div>
                        </div>
                        <div className="col-lg-3 align-self-center text-end">
                            <div className="ltnd__date-area d-none">
                                <div className="ltn__datepicker">
                                    <div className="ltn_datepicker-title">
                                        <span>Date</span>
                                    </div>
                                    <div className="input-group date" data-provide="datepicker">
                                        <input
                                            type="text" placeholder=''
                                            className="form-control"
                                            placeholder="Select Date"
                                        />
                                        <div className="input-group-addon">
                                            <i className="far fa-calendar-alt" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* header-middle-area end */}
                {/* HEADER AREA END */}
                {/* Body Content Area Inner Start */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="body-content-area-inner">
                        {/* BLOCK AREA START ( Vehicle Details section - 1 ) */}
                        <div className="ltnd__block-area">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="ltnd__block-item mt-30">
                                        <div className="ltnd__title ltnd__title-2---">
                                            <h1>
                                                <img src={carIcon} alt="vehical_img" /> {"Honda"}
                                            </h1>
                                        </div>
                                        <div className="ltn__block-item-info ltnd__policies-details-info">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="policies-details-single-info">
                                                        <h6 className="ltnd__title-4">Plate number</h6>
                                                        <input type="text" {...register('PlateNumber')} onChange={changeValue} name="PlateNumber" value={PlateNumber} placeholder='Plate number' />
                                                        <ErrorMessage
                                                            errors={errors}
                                                            name="PlateNumber"
                                                            render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                        />
                                                    </div>


                                                    <div className="policies-details-single-info">
                                                        <h6 className="ltnd__title-4">Capacity</h6>
                                                        <input type="number" {...register('Capacity')} onChange={changeValue} name="Capacity" value={Capacity} placeholder='Capacity' />
                                                        <ErrorMessage
                                                            errors={errors}
                                                            name="Capacity"
                                                            render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                        />
                                                    </div>


                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="policies-details-single-info">
                                                        <h6 className="ltnd__title-4">Chassis number</h6>
                                                        <input type="text" {...register('ChassisNumber')} onChange={changeValue} name="ChassisNumber" value={ChassisNumber} placeholder='Chassis number' />
                                                        <ErrorMessage
                                                            errors={errors}
                                                            name="ChassisNumber"
                                                            render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                        />
                                                    </div>


                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="policies-details-single-info">
                                                        <h6 className="ltnd__title-4">Color</h6>
                                                        <select className='nice-select' {...register('ColourId')} onChange={changeValue} name="ColourId" value={ColourId}>
                                                            <option value="">--- Please Select ---</option>
                                                            {car_colors.map((colr) => {
                                                                return (
                                                                    <option value={colr.Id} key={colr.Id}>{colr.ColourName}</option>
                                                                )
                                                            })}

                                                        </select>
                                                        <ErrorMessage
                                                            errors={errors}
                                                            name="ColourId"
                                                            render={({ message }) => <p style={{ color: 'red', marginTop: '4rem' }}>{message}</p>}
                                                        />
                                                    </div>

                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="policies-details-single-info">
                                                        <h6 className="ltnd__title-4">Year</h6>
                                                        <input type="number" name="Year" {...register('Year')} onChange={changeValue} value={Year} placeholder='Year' />
                                                        <ErrorMessage
                                                            errors={errors}
                                                            name="Year"
                                                            render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                        />
                                                    </div>

                                                </div>
                                            </div>
                                            {/*  */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* BLOCK AREA END */}
                        {/* BLOCK AREA START ( Vehicle Details section - 2 ) */}
                        <div className="ltnd__block-area mt-15">
                            <div className="row ltn__custom-gutter">
                                <div className="col-lg-5">
                                    <div className="ltnd__img-gallery mt-15" >
                                        {Image1 ?
                                            <img src={URL.createObjectURL(Image1)} alt="Image" />
                                            :
                                            <div className="Neon Neon-theme-dragdropboxs" >
                                                <input
                                                    type="file"
                                                    name="Image1"
                                                    onChange={_onImageChange}
                                                />
                                                <div className="Neon-input-dragDrop" style={{ height: '100%' }} >
                                                    <div className="Neon-input-inner" style={{ paddingTop: '6rem' }}>
                                                        <div className="Neon-input-icon">
                                                            <i className="fas fa-file-image" />
                                                        </div>
                                                        <div className="Neon-input-text">
                                                            {/* <h3>Drag&amp;Drop files here</h3>{" "} */}
                                                            {/* <span >or</span> */}
                                                        </div>
                                                        {/* <button className="Neon-input-choose-btn blue">Browse Files</button> */}
                                                    </div>
                                                </div>
                                            </div>
                                        }

                                        {/* <span data-img-src={carImg} data-rel="lightcase:myCollection">
                                        <label htmlFor='first'>
                                            <img src={Image1 || imgUpload} alt="Image" />
                                        </label>
                                        <input type="file" id="first" name="Image1" onChange={_onImageChange} style={{ display: 'none' }} />

                                    </span> */}
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="row ltn__custom-gutter">
                                        <div className="col-lg-6">
                                            <div className="ltnd__img-gallery mt-15">
                                                {/* <a
                                                href={carImg2}
                                                data-rel="lightcase:myCollection"
                                            > */}
                                                {/* <label htmlFor='second'>
                                                <img src={Image2 || carImg2} alt="Image" />

                                            </label>
                                            <input type="file" id="second" name="Image2" onChange={_onImageChange} style={{ display: 'none' }} /> */}
                                                {/* </button> */}
                                                {Image2 ?
                                                    <img src={URL.createObjectURL(Image2)} alt="Image" />
                                                    :
                                                    <div className="Neon Neon-theme-dragdropbox">
                                                        <input
                                                            type="file"
                                                            name="Image2"
                                                            onChange={_onImageChange}
                                                        />
                                                        <div className="Neon-input-dragDrop">
                                                            <div className="Neon-input-inner">
                                                                <div className="Neon-input-icon">
                                                                    <i className="fas fa-file-image" />
                                                                </div>
                                                                <div className="Neon-input-text">
                                                                    {/* <h3>Drag&amp;Drop files here</h3> */}
                                                                    {/* <span >or</span> */}
                                                                </div>
                                                                {/* <button className="Neon-input-choose-btn blue">Browse Files</button> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                }

                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="ltnd__img-gallery mt-15">
                                                {/* <button
                                                href={carImg3}
                                                data-rel="lightcase:myCollection"
                                            > */}
                                                {/* <label htmlFor='third'>
                                                <img src={Image3 || carImg3} alt="Image" />

                                            </label>
                                            <input type="file" id="third" name="Image3" onChange={_onImageChange} style={{ display: 'none' }} /> */}
                                                {/* </button> */}
                                                {Image3 ?
                                                    <img src={URL.createObjectURL(Image3)} alt="Image" />
                                                    :
                                                    <div className="Neon Neon-theme-dragdropbox">
                                                        <input
                                                            type="file"
                                                            name="Image3"
                                                            onChange={_onImageChange}
                                                        />
                                                        <div className="Neon-input-dragDrop">
                                                            <div className="Neon-input-inner">
                                                                <div className="Neon-input-icon">
                                                                    <i className="fas fa-file-image" />
                                                                </div>
                                                                <div className="Neon-input-text">
                                                                    {/* <h3>Drag&amp;Drop files here</h3>{" "} */}
                                                                    {/* <span >or</span> */}
                                                                </div>
                                                                {/* <button className="Neon-input-choose-btn blue">Browse Files</button> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="ltnd__img-gallery mt-15">
                                                {/* <button
                                                href={carImg4}
                                                data-rel="lightcase:myCollection"
                                            > */}
                                                {/* <img src={carImg4} alt="Image" /> */}

                                                {/* <label htmlFor='forth'>
                                                <img src={Image4 || carImg4} alt="Image" />

                                            </label>
                                            <input type="file" id="forth" name="Image4" onChange={_onImageChange} style={{ display: 'none' }} /> */}
                                                {/* </button> */}
                                                {Image4 ?
                                                    <img src={URL.createObjectURL(Image4)} alt="Image" />
                                                    :
                                                    <div className="Neon Neon-theme-dragdropbox">
                                                        <input
                                                            type="file"
                                                            name="Image4"
                                                            onChange={_onImageChange}
                                                        />
                                                        <div className="Neon-input-dragDrop">
                                                            <div className="Neon-input-inner">
                                                                <div className="Neon-input-icon">
                                                                    <i className="fas fa-file-image" />
                                                                </div>
                                                                <div className="Neon-input-text">
                                                                    {/* <h3>Drag&amp;Drop files here</h3>{" "} */}
                                                                    {/* <span >or</span> */}
                                                                </div>
                                                                {/* <button className="Neon-input-choose-btn blue">Browse Files</button> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="ltnd__img-gallery mt-15">
                                                {/* <button
                                                href={carImg4}
                                                data-rel="lightcase:myCollection"
                                            > */}

                                                {Image5 ?
                                                    <img src={URL.createObjectURL(Image5)} alt="Image" />
                                                    :
                                                    <div className="Neon Neon-theme-dragdropbox">
                                                        <input
                                                            type="file"
                                                            name="Image5"
                                                            onChange={_onImageChange}
                                                        />
                                                        <div className="Neon-input-dragDrop">
                                                            <div className="Neon-input-inner">
                                                                <div className="Neon-input-icon">
                                                                    <i className="fas fa-file-image" />
                                                                </div>
                                                                <div className="Neon-input-text">
                                                                    {/* <h3>Drag&amp;Drop files here</h3>{" "} */}
                                                                    {/* <span >or</span> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* BLOCK AREA END */}
                    </div>
                    {/* Body Content Area Inner End */}

                    <footer className="ltnd__footer-1 fixed-footer-1 mt-4">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="ltnd__footer-1-inner bg-white">

                                        <div className="ltnd__left btn-normal" >
                                            {params?.id &&
                                                <span
                                                    style={{ fontWeight: '600', cursor: 'pointer' }}
                                                >
                                                    <i className="ti-trash" /> Delete
                                                </span>
                                            }
                                        </div>

                                        <div className="ltnd__right btn-normal">
                                            <div className="btn-wrapper">
                                                <Link to="/admin/create_policy">
                                                    <i className="ti-angle-left" /> Back
                                                </Link>
                                                <button type='submit' className="btn theme-btn-1 btn-round-12">
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </form>

            </div>
        </React.Fragment>
    )
}

export default VehicalDetail