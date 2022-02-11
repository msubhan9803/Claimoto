import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
    RegisterProduct,
    GetInputs,
    RegisterBenft,
    GetProducType,
    GetSingleProduct,
    DeleteProduct,
    UpdateProduct
} from 'store/actions/product'
function ProductDetail() {

    //  Get id from Url  
    let params = useParams();

    // states 
    const [benifit, setBenifit] = useState(false)
    const [editbenifit, setEditBenifit] = useState(false)
    const [addBenfit, setAddBenfit] = useState('')

    // Get ProductTypes from Server

    useEffect(() => {
        if (params.id) {
            dispatch(GetSingleProduct(params.id))
        }
        dispatch(GetProducType())
    }, [])


    // dispatch hook 

    const dispatch = useDispatch()

    // selector state from redux 

    const product = useSelector(state => state.productReducer.product)
    const productTyps = useSelector(state => state.productReducer.product_Types)
    const singleProduct = useSelector(state => state.productReducer.singlProduct)



    // destructre  input value from reducer 

    const {
        ProductName,
        ProductType,
        ProductDetails,
        AnnualPremium,
        Status,
        CoPayPercentage,
        Deductibles,
        IsAgencyRepair,
        Benefit,
        BenefitDetails,
    } = product

    // Change value 

    const changeValue = (e) => {
        e.persist();
        if (e.target.name === "Status") {
            let value = e.target.checked;
            let name = e.target.name;
            dispatch(GetInputs(name, value))

        }
        else {
            const { name, value } = e.target;
            dispatch(GetInputs(name, value))
        }

    }

    const SavaBenift = (e) => {
        dispatch(RegisterBenft(addBenfit))
        setTimeout(() => {
            setAddBenfit("")
        }, 500)
        setBenifit(false)


    }


    // Send Form data 

    const SendForm = (e) => {
        let value = {
            "Id": 0,
            "ProductName": "string",
            "ProductType": 1,
            "ProductDetails": "string",
            "AnnualPremium": 0,
            "Status": true,
            "CreatedBy": 0,
            "CreatedDate": "2022-02-11T02:39:18.577Z",
            "UpdatedBy": 0,
            "UpdatedDate": "2022-02-11T02:39:18.577Z",
            "IsDeleted": true,
            "IsActive": true,
            "Coverage": {
                "Id": 0,
                "CoverageName": "string",
                "CoPayPercentage": 0,
                "Deductibles": 0,
                "Ceiling": true,
                "IsAgencyRepair": true,
                "ProductId": 0,
                "CreatedBy": 0,
                "CreatedDate": "2022-02-11T02:39:18.578Z",
                "UpdatedBy": 0,
                "UpdatedDate": "2022-02-11T02:39:18.578Z",
                "IsDeleted": true,
                "IsActive": true
            },
            "Benefit": [
                {
                    "Id": 0,
                    "BenefitName": "string",
                    "BenefitDetails": "string",
                    "Status": true,
                    "CreatedBy": 0,
                    "CreatedDate": "2022-02-11T02:39:18.578Z",
                    "UpdatedBy": 0,
                    "UpdatedDate": "2022-02-11T02:39:18.578Z",
                    "IsDeleted": true,
                    "IsActive": true
                }
            ],
            "tempProID": 0
        }
        let js = JSON.stringify(value)
        console.log("data", value)
        dispatch(RegisterProduct(js))
    }



    // delete form data 

    const delProduct = (id) => {
        dispatch(DeleteProduct(id))
    }

    // update form data 

    const updatProduct = (data) => {
        dispatch(UpdateProduct(data))
    }





    return (
        <React.Fragment>
            <div className="ltnd__header-area ltnd__header-area-2 section-bg-2---">

                {/* header-middle-area start */}
                <div className="ltnd__header-middle-area mt-30">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="ltnd__page-title-area">
                                <p className="page-back-btn">
                                    <Link to="/admin/products">
                                        <i className="icon-left-arrow-1" /> Back
                                    </Link>
                                </p>
                                <h2>Liability coverage</h2>
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

            {/* Body Content Area Inner Start */}
            <div className="body-content-area-inner">
                {/* BLOCK AREA START ( Product Details section - 1 ) */}
                <div className="ltnd__block-area">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltnd__block-item mt-30">
                                <div className="ltnd__title ltnd__title-2">
                                    <h4>Product information</h4>
                                </div>
                                <div className="ltn__block-item-info">
                                    {/* form */}
                                    <form className="ltnd__form-1">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="input-item">
                                                    <h6 className="ltnd__title-3">Product name</h6>
                                                    <input
                                                        type="text"
                                                        name="ProductName"
                                                        value={product?.ProductName || singleProduct?.ProductName}
                                                        onChange={changeValue}
                                                        placeholder="Liability coverage"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="input-item">
                                                    <h6 className="ltnd__title-3">Product type</h6>
                                                    <select className="nice-select" value={product?.ProductType || singleProduct?.ProductName} name="ProductType" onChange={changeValue}>
                                                        {productTyps.map((i) => (
                                                            <option value={i.Id} key={i.Id}>{i.ProductTypeName}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="input-item">
                                                    <h6 className="ltnd__title-3">Annual premium</h6>
                                                    <input type="text" name="AnnualPremium" value={product?.AnnualPremium || singleProduct?.AnnualPremium} onChange={changeValue} placeholder="1000 KWD" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    {/* excerpt */}
                                    <div className="ltnd__product-details-excerpt">
                                        <h6 className="ltnd__title-3"> Product information</h6>

                                        <div className="benifits-brief" style={{ width: '100%' }}>
                                            <input type="text" className='form-control' onChange={changeValue} value={product?.ProductDetails || singleProduct?.ProductDetails} placeholder='Type Here....' name="ProductDetail" />
                                        </div>


                                    </div>
                                    <hr />
                                    {/* status */}
                                    <div className="ltnd__product-status mt-30">
                                        <h6 className="ltnd__title-3 ">Status</h6>
                                        <div className="ltn__checkbox-radio-group inline">
                                            <label className="ltn__switch-2">
                                                <input type="checkbox" name="Status" checked={product?.Status || singleProduct?.Status} onChange={changeValue} />
                                                <i className="lever" /> <span className="text">{Status === true ? "active" : "Inactive"}</span>
                                            </label>
                                        </div>
                                    </div>
                                    {/*  */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* BLOCK AREA END */}
                {/* BLOCK AREA START ( Product Details section - 2 ) */}
                <div className="ltnd__block-area">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltnd__block-item mt-30">
                                <div className="ltnd__title ltnd__title-2">
                                    <h4>Coverage</h4>
                                </div>
                                <div className="ltn__block-item-info">
                                    {/* form */}
                                    <form className="ltnd__form-1">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="input-item">
                                                    <h6 className="ltnd__title-3">Copay</h6>
                                                    <input
                                                        type="text"
                                                        name="Copay"
                                                        value={product?.CoPayPercentage || singleProduct?.CoPayPercentage}
                                                        onChange={changeValue}
                                                        placeholder="$0 after deductible"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="input-item">
                                                    <h6 className="ltnd__title-3">Deductibles</h6>
                                                    <input type="text" value={product?.Deductibles || singleProduct?.Deductibles} onChange={changeValue} name="Deductibles" placeholder="$2,5000" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="input-item">
                                                    <h6 className="ltnd__title-3">Gragage/ Agency repair</h6>
                                                    <select className="nice-select" value={product?.IsAgencyRepair || singleProduct?.IsAgencyRepair} name="Gragage_Agency" onChange={changeValue}>
                                                        <option value="hellow">Repair body shop</option>
                                                        <option value={1}>Option 1 </option>
                                                        <option value={2}>Option 2 </option>
                                                        <option value={3}>Option 3 </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    {/*  */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* BLOCK AREA END */}
                {/* BLOCK AREA START ( Benefits ) */}
                <div className="ltnd__block-area pb-60">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="benifits-header mt-30">
                                <h4>Benefits (5)</h4>
                                <div className="btn-normal">
                                    <span style={{ fontWeight: 'bold', cursor: 'pointer' }} onClick={() => setBenifit(true)} className="ltn__secondary-color">
                                        Add benefit+
                                    </span>
                                </div>
                            </div>
                            <div className="benifits-list">

                                {/* benifits-list-item */}
                                {Benefit?.map((item) => (
                                    <div className="benifits-list-item">
                                        {editbenifit ?
                                            <>
                                                <div className="benifits-brief" style={{ width: '70%' }}>
                                                    <input type="text" className='form-control' value={""} placeholder='Type Here....' name="Benifits" />
                                                </div>
                                            </>
                                            :
                                            <div className="benifits-brief">
                                                <i className="fas fa-circle" />
                                                <span>
                                                    {item.BenefitDetails}
                                                </span>
                                            </div>
                                        }
                                        <div className="benifits-btn btn-normal" style={editbenifit ? { marginTop: '20px' } : null}>
                                            <span className="ltn__color-1 cancel_btn">
                                                {editbenifit ? "Cancel" : "Delete"}
                                            </span>
                                            <span onClick={() => setEditBenifit(true)} className="ltn__secondary-color add_btn">

                                                {editbenifit ? "Save" : "Edit"}

                                            </span>
                                        </div>
                                    </div>
                                ))}
                                {benifit &&
                                    (
                                        <div div className="benifits-list-item">
                                            <div className="benifits-brief" style={{ width: '70%' }}>
                                                <input type="text" value={BenefitDetails} className='form-control' onChange={changeValue} name="BenefitDetails" placeholder='Enter benifits here...' />
                                            </div>
                                            <div className="benifits-btn btn-normal mt-3 ">
                                                <span className="ltn__color-1 cancel_btn" onClick={() => setBenifit(false)}>
                                                    Cancel
                                                </span>
                                                <span onClick={() => SavaBenift()} className="ltn__secondary-color add_btn">
                                                    Add
                                                </span>
                                            </div>
                                        </div>

                                    )
                                }

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
                                    {params.id &&
                                        <span onClick={() => delProduct("1")}
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
                                        <span onClick={() => SendForm()} className="btn theme-btn-1 btn-round-12">
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



        </React.Fragment >
    )
}

export default ProductDetail
