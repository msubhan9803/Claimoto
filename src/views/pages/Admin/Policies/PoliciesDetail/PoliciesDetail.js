import React, { useEffect, useState, createRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import carIcon from 'assets/img/upload.png'
import { useSelector, useDispatch } from 'react-redux'
import {
    GetInputs,
    GetMake,
    GetProductNames,
    GetProductBeniftCov,
    RegisterPolicies
} from 'store/actions/policies'
import {
    GetProducType
} from 'store/actions/product'
import { msgAlert } from 'functions';
import * as Yup from 'yup';
import DatePicker from "react-datepicker";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import "react-datepicker/dist/react-datepicker.css";


function PoliciesDetail() {

    let params = useParams();


    const [show, setShow] = useState(false)
    const [pname, setPname] = useState(false)
    const [startDate, setStartDate] = useState(new Date());


    useEffect(() => {
        dispatch(GetProducType())
        dispatch(GetMake())
    }, [])

    const imageRef = createRef();

    // dipatch hook

    const dispatch = useDispatch()

    // slector hook

    const policy = useSelector(state => state.policyReducer.policy)
    const productTyps = useSelector(state => state.productReducer.product_Types)
    const policy_make = useSelector(state => state.policyReducer.make)
    const product_names = useSelector(state => state.policyReducer.prouctNames)

    const garageInfo = ["Repair By Agency", "Repair By Garage ", "Repair By Agency/Garage "]

    const formSchema = Yup.object().shape({
        CarNumber: Yup.string()
            .required('Car Number is required'),
        policyType: Yup.string()
            .required('Policy Type is required'),
        PolicyHolderName: Yup.string()
            .required('Policy Holder Name is required'),
        MakeId: Yup.string()
            .required('Make is required'),
        ModelId: Yup.string()
            .required('Model is required'),
        policyNumber: Yup.string()
            .required('Policy Number is required'),
        AnnualPremium: Yup.string()
            .required('AnnualPremium is required'),
        DOB: Yup.string()
            .required('Date of birth  is required'),
        StartDate: Yup.string()
            .required('Start Date is required'),
        EndDate: Yup.string()
            .required('End Date is required'),
        DrivingLicenseValidity: Yup.string()
            .required('Driving License is required'),
        IdentificationNumber: Yup.string()
            .required('IdentificationNumber is required')
            .max(12, 'Enter 12 digits '),
        ProductName: Yup.string()
            .required('ProductName is required'),
        Address: Yup.string()
            .required('Address is required'),

    });


    const changeValue = (e) => {
        e.persist();

        if (e.target.name === "policyType") {
            dispatch(GetProductNames(e.target.value))
            setShow(true)
            setPname(false)
        }
        else if (e.target.name === "ProductId") {
            debugger
            dispatch(GetProductBeniftCov(e.target.value))
            setPname(true)
        }


        const { name, value } = e.target;
        dispatch(GetInputs(name, value))



    }

    const {
        TenantId,
        CarNumber,
        insuranceComp,
        policyType,
        productName,
        IdentificationNumber,
        PolicyHolderName,
        MakeId,
        ModelId,
        selected_image,
        policyNumber,
        AnnualPremium,
        DOB,
        StartDate,
        EndDate,
        Address,
        DrivingLicenseValidity,
        CoPayPercentage,
        Deductibles,
        IsAgencyRepair,
        ProductId,
        Benefit,

    } = policy

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
                dispatch(GetInputs("selected_image", reader.result,))
            }
            reader.readAsDataURL(s_file);
        }
    }

    const formOptions = { resolver: yupResolver(formSchema), mode: "onChange", }
    const { register, handleSubmit, formState: { errors }, control } = useForm(formOptions);

    // Send Form data 

    const SendForm = () => {
        dispatch(RegisterPolicies(policy))
    }

    // update form data 

    const updatProduct = () => {
        // dispatch(UpdateProduct(product))
    }

    function onSubmit() {

        return params.id
            ? updatProduct()
            : SendForm();
    }


    console.log("error", errors)

    return (
        <React.Fragment>
            {/* HEADER AREA START */}
            <div className="ltnd__header-area ltnd__header-area-2 section-bg-2---">

                {/* header-middle-area start */}
                <div className="ltnd__header-middle-area ">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="ltnd__page-title-area">
                                <p className="page-back-btn" onClick={() => setShow(false)}>
                                    <Link to="/admin/policies" >
                                        <i className="icon-left-arrow-1" />
                                        Back
                                    </Link>
                                </p>
                                <h2>{params?.id ? "10/tpl2020/001" : "Create Policies"}</h2>
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
                                            type="text"
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
            </div>
            {/* HEADER AREA END */}
            {/* Body Content Area Inner Start */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="body-content-area-inner">
                    {/* BLOCK AREA START ( Policy Details section - 1 ) */}
                    <div className="ltnd__block-area">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ltnd__block-item">
                                    <div className="ltnd__title ltnd__title-2">
                                        <h4>Policy details</h4>
                                    </div>
                                    <div className="ltn__block-item-info ltnd__policies-details-info">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-6">
                                                <div className="column-data">
                                                    <div className="policies-details-single-info">
                                                        <h6 className="ltnd__title-4">Policy number</h6>
                                                        <input type="text" {...register('policyNumber')} name="policyNumber" value={policyNumber} onChange={changeValue} placeholder='Policy number' />
                                                        <ErrorMessage
                                                            errors={errors}
                                                            name="policyNumber"
                                                            render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                        />
                                                    </div>
                                                    <div className="policies-details-single-info" >
                                                        <h6 className="ltnd__title-4">Policy type</h6>
                                                        <select className="nice-select" name="policyType" {...register('policyType')} value={policyType} onChange={changeValue}>
                                                            <option value="">--- Please Select --- </option>
                                                            {productTyps.map((item, index) => {
                                                                return (
                                                                    <option value={item.Id} key={index}>{item.ProductTypeName}</option>

                                                                )
                                                            })}
                                                        </select>
                                                        <ErrorMessage
                                                            errors={errors}
                                                            name="policyType"
                                                            render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                        />
                                                    </div>

                                                    <div className="policies-details-single" >
                                                        <h6 className="ltnd__title-4">Make</h6>

                                                        <div className='d-flex'>
                                                            <select className="nice-select "
                                                                name="MakeId"
                                                                {...register('MakeId')}
                                                                value={MakeId}
                                                                onChange={changeValue}

                                                            >
                                                                <option value="">--- Please Select --- </option>
                                                                {policy_make.map((item, index) => {
                                                                    return (
                                                                        <option value={item.Id} key={index}>{item.MakeName}</option>
                                                                    )
                                                                })}
                                                            </select>

                                                        </div>
                                                        <ErrorMessage
                                                            errors={errors}
                                                            name="MakeId"
                                                            render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                        />


                                                    </div>
                                                </div>



                                            </div>
                                            <div className="col-lg-3 col-md-6 ">
                                                <div className="policies-details-single-info">
                                                    <h6 className="ltnd__title-4">Policy holder</h6>
                                                    <input type="text" name="PolicyHolderName" {...register('PolicyHolderName')} value={PolicyHolderName} onChange={changeValue} placeholder='Policy holder' />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="PolicyHolderName"
                                                        render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                    />
                                                </div>





                                                <div className="policies-details-single-info">
                                                    <h6 className="ltnd__title-4">Product Name</h6>
                                                    <select className="nice-select" {...register('ProductId')} name="ProductId" value={ProductId} onChange={changeValue}>
                                                        <option value="">{product_names.length > 0 ? "--- Please Select ---" : "No Record"} </option>
                                                        {product_names.map((item, index) => {
                                                            return (
                                                                <option value={item.Id} key={index}>{item.ProductName}</option>

                                                            )
                                                        })}
                                                    </select>
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="ProductName"
                                                        render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                    />

                                                </div>

                                                <div className="policies-details-single">
                                                    <h6 className="ltnd__title-4">Model</h6>

                                                    <select className='nice-select'
                                                        value={ModelId}
                                                        {...register('ModelId')}
                                                        onChange={changeValue}
                                                        name="ModelId" >
                                                        <option value="">--- Please Select ---</option>
                                                        <option>honda yamaha </option>
                                                        <option>honda yamaha </option>
                                                        <option>honda yamaha </option>
                                                    </select>
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="ModelId"
                                                        render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                    />
                                                </div>

                                            </div>
                                            <div className="col-lg-3 col-md-6">

                                                <div className="policies-details-single-info">
                                                    <h6 className="ltnd__title-4">Identification number</h6>
                                                    <input type="number" onChange={changeValue} name="IdentificationNumber" value={IdentificationNumber} placeholder='Id Card' />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="IdentificationNumber"
                                                        render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                    />
                                                </div>
                                                <div className="policies-details-single-info">
                                                    <h6 className="ltnd__title-4">Start date</h6>
                                                    <div className="input-group date" data-provide="datepicker">

                                                        <input type="text"
                                                            placeholder='DD-MM-YYYY'
                                                            name="StartDate"
                                                            {...register('StartData')}
                                                            value={StartDate}
                                                            readOnly
                                                            onChange={changeValue}
                                                            className='form-control' />
                                                        <div className="input-group-addon" style={{ zIndex: '1' }}>
                                                            <i className="far fa-calendar-alt" style={{ marginLeft: '-14px', paddingTop: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="StartDate"
                                                        render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                    />
                                                </div>


                                                <div className="policies-details-single-info">
                                                    <h6 className="ltnd__title-4">Car number</h6>
                                                    <input
                                                        type="text"
                                                        name="CarNumber"
                                                        value={CarNumber}
                                                        {...register('CarNumber')}
                                                        onChange={changeValue}
                                                        placeholder="Car number"
                                                    />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="CarNumber"
                                                        render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                    />
                                                </div>

                                            </div>
                                            <div className="col-lg-3 col-md-6">

                                                <div className="policies-details-single-info ">
                                                    <h6 className="ltnd__title-4">Date of birth</h6>
                                                    <DatePicker
                                                        selected={DOB}
                                                        name="DOB"
                                                        placeholder="DD-MM-YYYY"
                                                        onChange={(date) => changeValue(date)}
                                                        {...register('DOB')}
                                                        dateFormat="dd/mm/yy"
                                                    />
                                                    {/* <div className="input-group date " data-provide="datepicker">
                                                        <input
                                                            type="text"
                                                            name="DOB"
                                                            id="#return"
                                                            placeholder='DD-MM-YYYY'
                                                            value={DOB}
                                                            {...register('DOB')}
                                                            // readOnly
                                                            onChange={changeValue} className='form-control'
                                                        />
                                                        <div className="input-group-addon" style={{ zIndex: '1' }}>
                                                            <i className="far fa-calendar-alt" style={{ marginLeft: '-14px', paddingTop: '15px' }} />
                                                        </div>
                                                    </div> */}


                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="DOB"
                                                        render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                    />
                                                </div>

                                                <div className="policies-details-single-info"  >
                                                    <h6 className="ltnd__title-4">End date</h6>
                                                    <div className="input-group date" data-provide="datepicker" >

                                                        <input type="text"
                                                            name="EndDate" {...register('EndDate')}
                                                            value={EndDate}
                                                            placeholder='DD-MM-YYYY'
                                                            onChange={changeValue}
                                                            readOnly
                                                            className='form-control'
                                                        />
                                                        <div className="input-group-addon" style={{ zIndex: '1' }}>
                                                            <i className="far fa-calendar-alt" style={{ marginLeft: '-14px', paddingTop: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="EndDate"
                                                        render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                    />

                                                </div>

                                                <div className="policies-details-single-info" >
                                                    <h6 className="ltnd__title-4">
                                                        Driving license validity
                                                    </h6>
                                                    <div className="input-group date" data-provide="datepicker">

                                                        <input
                                                            type="text"
                                                            name="DrivingLicenseValidity"
                                                            {...register('DrivingLicenseValidity')}
                                                            placeholder="DD-MM-YYYY"
                                                            readOnly
                                                            value={DrivingLicenseValidity}
                                                            onChange={changeValue}
                                                            className='form-control' />
                                                        <div className="input-group-addon" style={{ zIndex: '1' }}>
                                                            <i className="far fa-calendar-alt" style={{ marginLeft: '-14px', paddingTop: '15px' }} />
                                                        </div>
                                                    </div>
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="DrivingLicenseValidity"
                                                        render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                    />
                                                </div>

                                            </div>
                                            <div className='col-lg-12'>
                                                <div className="policies-details-single-info ">
                                                    <h6 className="ltnd__title-4">Address</h6>
                                                    <p>
                                                        <strong>
                                                            <input type="text" name="Address" value={Address} {...register('Address')} onChange={changeValue} placeholder='Address' />
                                                            <ErrorMessage
                                                                errors={errors}
                                                                name="Address"
                                                                render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                            />
                                                        </strong>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 mt-3">
                                                <div className="btn-wrapper btn-normal mt-0 mt--30">
                                                    <Link
                                                        to={"/admin/create_vehical"}
                                                        className="btn btn-2 btn-transparent btn-round-12 btn-border"
                                                    >
                                                        Vehicle details
                                                    </Link>
                                                    <span className="ltnd__title-4">( Please enter vehical detail before saving )</span>
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
                    {/* BLOCK AREA START ( Policy Details section - 2 ) */}

                    {pname ?
                        <>
                            <div className="ltnd__block-area">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="ltnd__block-item mt-30">
                                            <div className="ltnd__title ltnd__title-2">
                                                <h4>Coverage</h4>
                                            </div>
                                            <div className="ltn__block-item-info">
                                                {/* form */}
                                                {/* <form className="ltnd__form-1"> */}
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="input-item">
                                                            <h6 className="ltnd__title-3">Copay</h6>
                                                            <span>{CoPayPercentage}</span>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="input-item">
                                                            <h6 className="ltnd__title-3">Deductibles</h6>
                                                            <span>{Deductibles}</span>


                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="input-item">
                                                            <h6 className="ltnd__title-3">Gragage/ Agency repair</h6>

                                                            <span>{garageInfo[IsAgencyRepair]}</span>

                                                        </div>
                                                    </div>
                                                </div>
                                                {/* </form> */}
                                                {/*  */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* BLOCK AREA END */}

                            {/* BLOCK AREA START ( Benefits ) */}
                            <div className="ltnd__block-area pb-60 mt-40">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h4>{Benefit?.map((i) => i != null ? "Benefits" : null)} </h4>

                                        <div className="benifits-list">

                                            {/* benifits-list-item */}
                                            {Benefit?.map((item, index) => {
                                                if (item != null)
                                                    return (

                                                        <div className="benifits-list-item">
                                                            <div className="benifits-brief">
                                                                <i className="fas fa-circle" />
                                                                <span>
                                                                    {item?.BenefitDetails}
                                                                </span>
                                                            </div>

                                                        </div>
                                                    )
                                            })}


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        : null

                    }
                    {/* BLOCK AREA END */}
                </div>
                {/* Body Content Area Inner End */}
                <footer className="ltnd__footer-1 fixed-footer-1 mt-10">
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
                                            <Link to="/admin/policies">
                                                <i className="ti-angle-left" /> Back
                                            </Link>
                                            <button type="submit" className="btn theme-btn-1 btn-round-12">
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
            {/* Body Content Area End */}
            {/* BLOCK AREA END */}

            {/* Body Content Area Inner End */}
        </React.Fragment >
    )
}

export default PoliciesDetail
