import React, { useEffect, useState, createRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
    GetInputs,
    GetMake,
    GetProductNames,
    GetProductBeniftCov,
    RegisterPolicies,
    GetMakeModel,
    GetSinglePolicy,
    DeletePolicies
} from 'store/actions/policies'
import { useNavigate } from 'react-router-dom'
import { GetProducType } from 'store/actions/product'
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Select from 'react-select'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
function PoliciesDetail() {

    let params = useParams().id;


    const [show, setShow] = useState(false)
    const [pname, setPname] = useState(false)

    const navigate = useNavigate()

    // dipatch hook

    const dispatch = useDispatch()

    // slector hook

    const policy = useSelector(state => state.policyReducer.policy)
    const productTyps = useSelector(state => state.productReducer.product_Types)
    const policy_make = useSelector(state => state.policyReducer.make)
    const policy_model = useSelector(state => state.policyReducer.model)
    const product_names = useSelector(state => state.policyReducer.prouctNames)
    const { isSuccess } = useSelector(state => state.policyReducer)



    const formSchema = Yup.object().shape({
        CarNumber: Yup.string()
            .required('Car Number is required'),
        PolicyType: Yup.string()
            .required('Policy Type is required'),
        PolicyHolderName: Yup.string()
            .required('Policy Holder Name is required'),
        MakeId: Yup.string()
            .required('Make is required'),
        ModelId: Yup.string()
            .required('Model is required'),
        PolicyNo: Yup.string()
            .required('Policy Number is required'),
        AnnualPremium: Yup.string()
            .required('Annual Premium is required'),
        DOB: Yup.string()
            .required('Date of birth  is required'),
        StartDate: Yup.string()
            .required('Start Date is required'),
        EndDate: Yup.string()
            .required('End Date is required'),
        DrivingLicenseValidityExpiryDate: Yup.string()
            .required('Driving License Date is required'),
        IdentityNo: Yup.string()
            .required('ID Number is required')
            .max(12, 'Enter 12 digits '),
        ProductId: Yup.string()
            .required('Product Name is required'),
        Address: Yup.string()
            .required('Address is required'),

    });


    const changeValue = (e) => {
        e.persist();

        if (e.target.name === "PolicyType") {
            dispatch(GetProductNames(e.target.value))
            setShow(true)
            setPname(false)
        }
        else if (e.target.name === "ProductId") {
            debugger
            dispatch(GetProductBeniftCov(e.target.value))
            setPname(true)
        }
        else if (e.target.name === "MakeId") {
            dispatch(GetMakeModel(e.target.value))
        }


        const { name, value } = e.target;
        dispatch(GetInputs(name, value))



    }
    //  Prevent iuput field value in datepicker 
    const handleDateChangeRaw = function (e) {
        e.preventDefault();
    };

    const {
        TenantId,
        CarNumber,
        PolicyType,
        IdentityNo,
        PolicyHolderName,
        MakeId,
        ModelId,
        PolicyNo,
        AnnualPremium,
        DOB,
        StartDate,
        EndDate,
        Address,
        DrivingLicenseValidityExpiryDate,
        CoPayPercentage,
        Deductibles,
        IsAgencyRepair,
        ProductId,
        Benefit,
        isLoading
    } = policy


    useEffect(() => {

        if (params) {
            dispatch(GetSinglePolicy(params))
            dispatch(GetProductNames(PolicyType))
            dispatch(GetMakeModel(MakeId))
        }
        dispatch(GetProducType())
        dispatch(GetMake());
    }, [])


    useEffect(() => {
        if (isSuccess) {
            navigate('/admin/policies')
        }
    }, [isSuccess])




    const formOptions = { resolver: yupResolver(formSchema), mode: "onChange", }
    const { register, handleSubmit, formState: { errors }, control } = useForm(formOptions);

    // // Send Form data 

    // const SendForm = () => {
    //     dispatch(RegisterPolicies(policy))
    // }

    // // update form data 

    // const updatProduct = () => {
    //     // dispatch(UpdateProduct(product))
    // }

    function onSubmit() {
        return navigate(params ? `/admin/vehical_detail/${params}` : "/admin/create_vehical")


    }

    const delPolicy = (id) => {
        dispatch(DeletePolicies(id))
    }


    const StartD = (new Date(StartDate));
    const EndD = (new Date(EndDate));
    const DateB = (new Date(DOB));
    const DrivL = (new Date(DrivingLicenseValidityExpiryDate));

    return (
        <React.Fragment>
            <div className="body-wrapper">

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
                                    <h2>{params ? PolicyNo : "Create Policies"}</h2>
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

                {/* loading */}

                {params.id && isLoading ?
                    <div className="spinner-grow" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    :
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
                                                                <input type="text" {...register('PolicyNo')} name="PolicyNo" value={PolicyNo} onChange={changeValue} placeholder='Policy number' />
                                                                <ErrorMessage
                                                                    errors={errors}
                                                                    name="PolicyNo"
                                                                    render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                                />
                                                            </div>
                                                            <div className="policies-details-single-info" >
                                                                <h6 className="ltnd__title-4">Policy type</h6>
                                                                <select className="form-control" name="PolicyType" {...register('PolicyType')} value={PolicyType} onChange={changeValue}>
                                                                    <option value="">--- Please Select --- </option>
                                                                    {productTyps.map((item, index) => {
                                                                        return (
                                                                            <option value={item.Id} key={index}>{item.ProductTypeName}</option>

                                                                        )
                                                                    })}
                                                                </select>
                                                                <ErrorMessage
                                                                    errors={errors}
                                                                    name="PolicyType"
                                                                    render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                                />
                                                            </div>

                                                            <div className="policies-details-single">
                                                                <h6 className="ltnd__title-4">Make</h6>
                                                                <div className=''>
                                                                    {/* <Select
                                                                    style={{ width: '100%' }}
                                                                    name="MakeId"
                                                                    value={MakeId}
                                                                    onChange={(value) => GetInputs("MakeId", value)}
                                                                    options={policy_make.map((option => { return { label: <div><img src={`http://103.173.62.74:70${option.Image}`} height="30px" width="30px" />{option.MakeName} </div>, value: option.Id } }))}
                                                                    closeMenuOnSelect={true}
                                                                /> */}
                                                                    <select className="form-control "
                                                                        name="MakeId"
                                                                        {...register('MakeId')}
                                                                        value={MakeId}
                                                                        onChange={changeValue}

                                                                    >
                                                                        <option value="">--- Please Select --- </option>
                                                                        {policy_make.map((item, index) => {
                                                                            console.log("Image", item.Image)
                                                                            return (
                                                                                <option value={item.Id} key={index} >
                                                                                    {item.MakeName}
                                                                                </option>
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
                                                            <h6 className="ltnd__title-4">Product name</h6>
                                                            <select className="form-control" {...register('ProductId')} name="ProductId" value={ProductId} onChange={changeValue}>
                                                                <option value="">{product_names.length > 0 ? "--- Please Select ---" : "No Record"} </option>
                                                                {product_names.map((item, index) => {
                                                                    return (
                                                                        <option value={item.Id} key={index}>
                                                                            {item.ProductName}
                                                                        </option>

                                                                    )
                                                                })}
                                                            </select>
                                                            <ErrorMessage
                                                                errors={errors}
                                                                name="ProductId"
                                                                render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                            />

                                                        </div>

                                                        <div className="policies-details-single">
                                                            <h6 className="ltnd__title-4">Model</h6>

                                                            <select className='form-control'
                                                                value={ModelId}
                                                                {...register('ModelId')}
                                                                onChange={changeValue}
                                                                name="ModelId" >
                                                                <option value="">{policy_model.length > 0 ? "--- Please Select ---" : "No Record"} </option>
                                                                {policy_model.map((item, index) => {
                                                                    return (
                                                                        <option value={item.Id} key={index}>

                                                                            {item.ModelName}</option>

                                                                    )
                                                                })}
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
                                                            <input type="number"
                                                                min="0"
                                                                {...register('IdentityNo')}
                                                                onChange={changeValue}
                                                                name="IdentityNo"
                                                                value={IdentityNo} placeholder='ID Card' />
                                                            <ErrorMessage
                                                                errors={errors}
                                                                name="IdentityNo"
                                                                render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                            />
                                                        </div>
                                                        <div className="policies-details-single-info">
                                                            <h6 className="ltnd__title-4">Start date</h6>
                                                            <Controller
                                                                control={control}
                                                                name='StartDate'
                                                                render={({ field }) => (
                                                                    <DatePicker
                                                                        placeholderText='DD-MM-YYYY'
                                                                        dateFormat="dd/MM/yyyy"
                                                                        onChangeRaw={handleDateChangeRaw}
                                                                        onChange={(date) => { return field.onChange(date), dispatch(GetInputs('StartDate', date)) }}
                                                                        selected={params ? StartD : StartDate}

                                                                    />
                                                                )}
                                                            />
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
                                                            {/* <input
                                                        type="date"
                                                        name="DOB"
                                                        value={DOB}
                                                        {...register('DOB')}
                                                        onChange={changeValue} className='form-control'
                                                    /> */}

                                                            <Controller
                                                                control={control}
                                                                name='DOB'
                                                                render={({ field }) => (
                                                                    <DatePicker
                                                                        placeholderText='DD-MM-YYYY'
                                                                        dateFormat="dd/MM/yyyy"
                                                                        onChangeRaw={handleDateChangeRaw}
                                                                        onChange={(date) => { return field.onChange(date), dispatch(GetInputs('DOB', date)) }}
                                                                        selected={params ? DateB : DOB}
                                                                    />
                                                                )}
                                                            />



                                                            <ErrorMessage
                                                                errors={errors}
                                                                name="DOB"
                                                                render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                            />
                                                        </div>

                                                        <div className="policies-details-single-info"  >
                                                            <h6 className="ltnd__title-4">End date</h6>

                                                            <Controller
                                                                control={control}
                                                                name='EndDate'
                                                                render={({ field }) => (
                                                                    <DatePicker
                                                                        placeholderText='DD-MM-YYYY'
                                                                        dateFormat="dd/MM/yyyy"
                                                                        onChangeRaw={handleDateChangeRaw}
                                                                        onChange={(date) => { return field.onChange(date), dispatch(GetInputs('EndDate', date)) }}
                                                                        selected={params ? EndD : EndDate}
                                                                    />
                                                                )}
                                                            />

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

                                                            <Controller
                                                                control={control}
                                                                name='DrivingLicenseValidityExpiryDate'
                                                                render={({ field }) => (
                                                                    <DatePicker
                                                                        placeholderText='DD-MM-YYYY'
                                                                        dateFormat="dd/MM/yyyy"
                                                                        onChangeRaw={handleDateChangeRaw}
                                                                        onChange={(date) => { return field.onChange(date), dispatch(GetInputs('DrivingLicenseValidityExpiryDate', date)) }}
                                                                        selected={params ? DrivL : DrivingLicenseValidityExpiryDate}
                                                                    />
                                                                )}
                                                            />

                                                            <ErrorMessage
                                                                errors={errors}
                                                                name="DrivingLicenseValidityExpiryDate"
                                                                render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                            />
                                                        </div>

                                                    </div>
                                                    <div className='col-lg-3'>
                                                        <div className="policies-details-single-info ">
                                                            <h6 className="ltnd__title-4">Annual Premium</h6>
                                                            <p>
                                                                <strong>
                                                                    <input type="text" name="AnnualPremium" value={AnnualPremium} {...register('AnnualPremium')} onChange={changeValue} placeholder='Annual Premium' />
                                                                    <ErrorMessage
                                                                        errors={errors}
                                                                        name="AnnualPremium"
                                                                        render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                                    />
                                                                </strong>
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className='col-lg-9'>
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
                                                    {/* <div className="col-lg-12 mt-5">
                                                <div className="btn-wrapper btn-normal mt-0 mt--30">
                                                    <Link
                                                        to={params ? `/admin/vehical_detail/${params}` : "/admin/create_vehical"}
                                                        className="btn btn-2 btn-transparent btn-round-12 btn-border"
                                                    >
                                                        Vehicle details
                                                    </Link>
                                                    <span className="ltnd__title-4">( Please enter vehical detail before saving )</span>
                                                </div>


                                            </div> */}
                                                </div>
                                                {/*  */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* BLOCK AREA END */}
                            {/* BLOCK AREA START ( Policy Details section - 2 ) */}

                            {pname || ProductId ?
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
                                                                    <input
                                                                        type="number"
                                                                        min={0}
                                                                        name="CoPayPercentage"
                                                                        value={CoPayPercentage}
                                                                        {...register('CoPayPercentage')}

                                                                        onChange={changeValue}
                                                                        placeholder="Amount"
                                                                    />
                                                                    <ErrorMessage
                                                                        errors={errors}
                                                                        name="CoPayPercentage"
                                                                        render={({ message }) => <p style={{ color: 'red', paddingTop: '20px' }}>{message}</p>}
                                                                    />


                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="input-item">
                                                                    <h6 className="ltnd__title-3">Deductibles</h6>
                                                                    <input type="number"
                                                                        min="0"
                                                                        value={Deductibles}
                                                                        {...register('Deductibles')}
                                                                        onChange={changeValue}
                                                                        name="Deductibles" placeholder="Amount" />
                                                                    <ErrorMessage
                                                                        errors={errors}

                                                                        name="Deductibles"
                                                                        render={({ message }) => <p style={{ color: 'red', paddingTop: '20px' }}>{message}</p>}
                                                                    />


                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="input-item">
                                                                    <h6 className="ltnd__title-3">Gragage/ Agency repair</h6>
                                                                    <select className="form-control mt-2"
                                                                        value={IsAgencyRepair}
                                                                        name="IsAgencyRepair"
                                                                        {...register('IsAgencyRepair')}
                                                                        onChange={changeValue}>
                                                                        <option value="">--- Please Select ---</option>
                                                                        <option value={1} >Repair By Agency </option>
                                                                        <option value={2}>Repair By Garage </option>
                                                                        <option value={3}>Repair By Agency/Garage </option>
                                                                    </select>
                                                                    <ErrorMessage
                                                                        errors={errors}
                                                                        name="IsAgencyRepair"
                                                                        render={({ message }) => <p style={{ color: 'red' }}>{message}</p>}
                                                                    />


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
                        <footer className=" fixed-footer-1 mt-4 ">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="ltnd__footer-1-inner bg-white">

                                            <div className="ltnd__left btn-normal" >
                                                {params &&
                                                    <span
                                                        style={{ fontWeight: '600', cursor: 'pointer' }}
                                                        onClick={() => delPolicy(params)}
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
                                                        Next
                                                    </button>
                                                    {/* <Link to={params ? `/admin/vehical_detail/${params}` : "/admin/create_vehical"} type="submit" className="btn theme-btn-1 btn-round-12">
                                                    Next
                                                </Link> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>

                    </form>
                }
                {/* Body Content Area End */}
                {/* BLOCK AREA END */}

                {/* Body Content Area Inner End */}
            </div>
        </React.Fragment >
    )
}

export default PoliciesDetail
