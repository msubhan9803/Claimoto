import React from 'react'
import { Link, useParams } from 'react-router-dom'
import carIcon from 'assets/img/icons/mc/png/1.png'
import {useSelector ,  useDispatch } from 'react-redux'
import {
    GetInputs,
} from 'store/actions/policies'

function PoliciesDetail() {

    let params = useParams();


    // dipatch hook

    const dispatch = useDispatch()

    // slector hook

    const policy = useSelector(state => state.PolicyReducer.policy)




    const changeValue = (e) => {
        e.persist();

        const { name, value } = e.target;
        dispatch(GetInputs(name, value))

    }


    const {
        Id,
        TenantId,
        carNumber,
        insuranceComp,
        policyType,
        policyHolder,
        make,
        icon,
        policyNumber,
        annualPremium,
        dateofBirth,
        model,
        startDate,
        endDate,
        drivingLic,
        address,
    } = policy



    // Send Form data 

    const SendForm = () => {
        // dispatch(RegisterProduct(product))
    }

    // update form data 

    const updatProduct = () => {
        // dispatch(UpdateProduct(product))
    }

    return (
        <React.Fragment>
            {/* HEADER AREA START */}
            <div className="ltnd__header-area ltnd__header-area-2 section-bg-2---">

                {/* header-middle-area start */}
                <div className="ltnd__header-middle-area ">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="ltnd__page-title-area">
                                <p className="page-back-btn">
                                    <Link to="/policies">
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
                                            <div className="policies-details-single-info">
                                                <h6 className="ltnd__title-4">Car number</h6>
                                                <input
                                                    type="text"
                                                    name="carNumber"
                                                    value={carNumber}
                                                    onChange={changeValue}
                                                    placeholder="$0 after deductible"
                                                />
                                            </div>
                                            <div className="policies-details-single-info">
                                                <h6 className="ltnd__title-4">Make</h6>

                                                <div className='d-flex'>
                                                    <label htmlFor='logo'>
                                                        <img src={carIcon} style={{ objectFit: 'contain' }} alt="carIcon" />
                                                    </label>
                                                    <select className="nice-select"
                                                        name="make" value={make}
                                                        onChange={changeValue}
                                                        style={{ border: 'none', borderBottom: '1pt solid', borderRadius: '0px' }}>
                                                        <option>Honda</option>
                                                        <option>Honda</option>
                                                        <option>Honda</option>
                                                    </select>
                                                    <input type="file" className='d-none' id="logo" />
                                                </div>


                                            </div>
                                            <div className="policies-details-single-info">
                                                <h6 className="ltnd__title-4">Model</h6>
                                                <input type="text" name="model" value={model} onChange={changeValue} placeholder='Model' />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 mt-4">
                                            <div className="policies-details-single-info">
                                                <h6 className="ltnd__title-4">Insurance company</h6>
                                                <h6>Delta insurance</h6>
                                            </div>
                                            <div className="policies-details-single" style={{ paddingTop: '1.6rem' }}>
                                                <h6 className="ltnd__title-4">Policy number</h6>
                                                <input type="text" name="model" value={model} onChange={changeValue} placeholder='Policy number' />

                                            </div>
                                            <div className="policies-details-single-info">
                                                <h6 className="ltnd__title-4">Start date</h6>
                                                <input type="date" name="stateDate" value={startDate} onChange={changeValue} className='form-control' />

                                            </div>
                                            <div className="policies-details-single-info">
                                                <h6 className="ltnd__title-4">End date</h6>
                                                <input type="date" name="endDate" value={endDate} onChange={changeValue} className='form-control' />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 " >
                                            <div className="policies-details-single-info" >
                                                <h6 className="ltnd__title-4">Policy type</h6>
                                                <select className="nice-select" name="policyType" value={policyType} onChange={changeValue}>
                                                    <option value={1} >Repair By Agency </option>
                                                    <option value={2}>Repair By Garage </option>
                                                    <option value={3}>Repair By Agency/Garage </option>
                                                </select>
                                            </div>
                                            <div className="policies-details-single" style={{ paddingTop: '5rem' }} >
                                                <h6 className="ltnd__title-4">Annual premium</h6>
                                                <input type="text" name="annualPremium" value={annualPremium} onChange={changeValue} placeholder='Annual premium' />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="policies-details-single-info">
                                                <h6 className="ltnd__title-4">Policy holder</h6>
                                                <input type="text" name="policyHolder" value={policyHolder} onChange={changeValue} placeholder='Policy holder' />

                                            </div>
                                            <div className="policies-details-single-info">
                                                <h6 className="ltnd__title-4">Date of birth</h6>
                                                <input type="date" name="dateofBirth" value={dateofBirth} onChange={changeValue} className='form-control' />
                                            </div>
                                            <div className="policies-details-single-info">
                                                <h6 className="ltnd__title-4">
                                                    Driving license validity
                                                </h6>
                                                <input type="date" name="drivingLic" value={drivingLic} onChange={changeValue} className='form-control' />

                                            </div>
                                            <div className="policies-details-single-info">
                                                <h6 className="ltnd__title-4">Address</h6>
                                                <p>
                                                    <strong>
                                                        <input type="text" name="address" value={address} onChange={changeValue} placeholder='Address' />

                                                    </strong>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="btn-wrapper btn-normal mt-0 mt--30">
                                                <Link
                                                    to={params?.id ? "/admin/vehical_details" : "/admin/create_vehical"}
                                                    className="btn btn-2 btn-transparent btn-round-12 btn-border"
                                                >
                                                    Vehicle details
                                                </Link>
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
                {/* BLOCK AREA START ( Benefits ) */}
                <div className="ltnd__block-area pb-60 mt-40">
                    <div className="row">
                        <div className="col-lg-12">
                            <h4>Benefits </h4>

                            <div className="benifits-list">

                                {/* benifits-list-item */}
                                {/* {[].map((item, index) => ( */}
                                <div className="benifits-list-item">
                                    <div className="benifits-brief">
                                        <i className="fas fa-circle" />
                                        <span>
                                            {/* {item?.BenefitDetails} */}
                                            hellow
                                        </span>
                                    </div>

                                </div>
                                {/* ))} */}


                            </div>
                        </div>
                    </div>
                </div>
                {/* BLOCK AREA END */}
            </div>
            {/* Body Content Area Inner End */}
            <footer className="ltnd__footer-1 fixed-footer-1">
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
                                        <Link to="/products">
                                            <i className="ti-angle-left" /> Back
                                        </Link>
                                        <span onClick={params?.id ? updatProduct : SendForm} className="btn theme-btn-1 btn-round-12">
                                            Save
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Body Content Area End */}
            {/* BLOCK AREA END */}

            {/* Body Content Area Inner End */}
        </React.Fragment >
    )
}

export default PoliciesDetail
