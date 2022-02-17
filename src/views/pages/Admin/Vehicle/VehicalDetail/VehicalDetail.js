import React from 'react'
import carImg from 'assets/img/motor/vehicle/1.png'
import carImg2 from 'assets/img/motor/vehicle/12.png'
import carImg3 from 'assets/img/motor/vehicle/14.png'
import carImg4 from 'assets/img/motor/vehicle/11.png'
import carIcon from 'assets/img/icons/mc/png/2.png'
import {Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
function VehicalDetail() {

    const params = useParams()

    return (
        <React.Fragment>
            <div className="ltnd__header-area ltnd__header-area-2 section-bg-2---">
                <div className="ltnd__header-middle-area mt-30">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="ltnd__page-title-area">
                                <p className="page-back-btn">
                                    <Link to="/admin/policies">
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
                <div className="body-content-area-inner">
                    {/* BLOCK AREA START ( Vehicle Details section - 1 ) */}
                    <div className="ltnd__block-area">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ltnd__block-item mt-30">
                                    <div className="ltnd__title ltnd__title-2---">
                                        <h1>
                                            <img src={carIcon} alt="#" /> {"Honda"}
                                        </h1>
                                    </div>
                                    <div className="ltn__block-item-info ltnd__policies-details-info">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-6">
                                                <div className="policies-details-single-info">
                                                    <h6 className="ltnd__title-4">Registration number</h6>
                                                    <input type="text" placeholder='Reg number' />
                                                </div>
                                                <div className="policies-details-single-info">
                                                    <h6 className="ltnd__title-4">Year</h6>
                                                    <input type="text" placeholder='Year' />

                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="policies-details-single-info">
                                                    <h6 className="ltnd__title-4">License number</h6>
                                                    <input type="text" placeholder='licns Number' />

                                                </div>
                                                <div className="policies-details-single-info">
                                                    <h6 className="ltnd__title-4">Color</h6>
                                                    <select className='nice-select'>
                                                        <option>--- Please Select ---</option>
                                                        <option>Red</option>
                                                        <option>Blue</option>
                                                        <option>Blue</option>
                                                    </select>

                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="policies-details-single-info">
                                                    <h6 className="ltnd__title-4">Driving license validity</h6>
                                                    <input type="date" className='form-control'  />

                                                </div>
                                                <div className="policies-details-single" style={{ marginTop: '4rem' }}>
                                                    <h6 className="ltnd__title-4">Capacity</h6>
                                                    <input type="text" placeholder='Capacity' />

                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="policies-details-single-info">
                                                    <h6 className="ltnd__title-4">Identification number</h6>
                                                    <input type="text" placeholder='Id Card' />

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
                                <div className="ltnd__img-gallery mt-15">
                                    <span data-img-src={carImg} data-rel="lightcase:myCollection">
                                        <img src={carImg} alt="Image" />
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="row ltn__custom-gutter">
                                    <div className="col-lg-6">
                                        <div className="ltnd__img-gallery mt-15">
                                            <a
                                                href={carImg2}
                                                data-rel="lightcase:myCollection"
                                            >
                                                <img src={carImg2} alt="Image" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="ltnd__img-gallery mt-15">
                                            <a
                                                href={carImg3}
                                                data-rel="lightcase:myCollection"
                                            >
                                                <img src={carImg3} alt="Image" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="ltnd__img-gallery mt-15">
                                            <a
                                                href={carImg4}
                                                data-rel="lightcase:myCollection"
                                            >
                                                <img src={carImg4} alt="Image" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="ltnd__img-gallery mt-15">
                                            <a
                                                href={carImg4}
                                                data-rel="lightcase:myCollection"
                                            >
                                                <img src={carImg4} alt="Image" />
                                            </a>
                                        </div>
                                    </div>
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
                                        {/* <span onClick={params?.id ? updatProduct : SendForm} className="btn theme-btn-1 btn-round-12">
                                            Save
                                        </span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


            </div>
        </React.Fragment>
    )
}

export default VehicalDetail