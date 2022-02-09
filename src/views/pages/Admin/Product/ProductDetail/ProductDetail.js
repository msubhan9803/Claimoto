import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ProductDetail() {
    const [benifit, setBenifit] = useState(false)



    return (
        <React.Fragment>
            <div className="ltnd__header-area ltnd__header-area-2 section-bg-2---">

                {/* header-middle-area start */}
                <div className="ltnd__header-middle-area mt-30">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="ltnd__page-title-area">
                                <p className="page-back-btn">
                                    <Link to="/products">
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
                                                        name="name"
                                                        placeholder="Liability coverage"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="input-item">
                                                    <h6 className="ltnd__title-3">Product type</h6>
                                                    <select className="nice-select">
                                                        <option>TPL</option>
                                                        <option>Option 1 </option>
                                                        <option>Option 2 </option>
                                                        <option>Option 3 </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="input-item">
                                                    <h6 className="ltnd__title-3">Annual premium</h6>
                                                    <input type="text" name="name" placeholder="1000 KWD" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    {/* excerpt */}
                                    <div className="ltnd__product-details-excerpt">
                                        <h6 className="ltnd__title-3">Product information</h6>
                                        <p>
                                            Auto liability insurance is a type of car insurance coverage
                                            that's required by law in most states. If you cause a car
                                            accident — in other words, if you are liable for the accident
                                            — liability coverage helps pay for the other person's
                                            expenses. Auto liability coverage comes in two forms: bodily
                                            injury liability coverage and property damage liability
                                            coverage. Drivers in most states must have both types of
                                            coverage.
                                        </p>
                                    </div>
                                    <hr />
                                    {/* status */}
                                    <div className="ltnd__product-status mt-30">
                                        <h6 className="ltnd__title-3 ">Status</h6>
                                        <div className="ltn__checkbox-radio-group inline">
                                            <label className="ltn__switch-2">
                                                <input type="checkbox" defaultChecked="" />{" "}
                                                <i className="lever" /> <span className="text">Active</span>
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
                                                        name="name"
                                                        placeholder="$0 after deductible"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="input-item">
                                                    <h6 className="ltnd__title-3">Deductibles</h6>
                                                    <input type="text" name="name" placeholder="$2,5000" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="input-item">
                                                    <h6 className="ltnd__title-3">Gragage/ Agency repair</h6>
                                                    <select className="nice-select">
                                                        <option>Repair body shop</option>
                                                        <option>Option 1 </option>
                                                        <option>Option 2 </option>
                                                        <option>Option 3 </option>
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
                                <div className="benifits-list-item">
                                    <div className="benifits-brief">
                                        <i className="fas fa-circle" />
                                        <span>
                                            Liability insurance provides protection against claims
                                            resulting from injuries and damage to people and/or property.
                                        </span>
                                    </div>
                                    <div className="benifits-btn btn-normal">
                                        <Link to="/" className="ltn__color-1">
                                            Delete
                                        </Link>
                                        <Link to="/" className="ltn__secondary-color">
                                            Edit
                                        </Link>
                                    </div>
                                </div>
                                {benifit &&
                                    (
                                        <div div className="benifits-list-item">
                                            <div className="benifits-brief" style={{ width: '70%' }}>
                                                <input type="text" className='form-control'  placeholder='Enter benifits here...' name="addBenifit" />
                                            </div>
                                            <div className="benifits-btn btn-normal mt-3 ">
                                                <span className="ltn__color-1 cancel_btn" onClick={()=> setBenifit(false)}>
                                                    Cancel
                                                </span>
                                                <span  className="ltn__secondary-color add_btn">
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
                                <div className="ltnd__left btn-normal">
                                    <Link to="/">
                                        <i className="ti-trash" /> Delete
                                    </Link>
                                </div>
                                <div className="ltnd__right btn-normal">
                                    <div className="btn-wrapper">
                                        <Link to="/products">
                                            <i className="ti-angle-left" /> Back
                                        </Link>
                                        <a href="#" className="btn theme-btn-1 btn-round-12">
                                            Save
                                        </a>
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
