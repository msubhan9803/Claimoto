import React from 'react'
import carImg from 'assets/img/motor/vehicle/1.png'
import carImg2 from 'assets/img/motor/vehicle/12.png'
import carImg3 from 'assets/img/motor/vehicle/14.png'
import carImg4 from 'assets/img/motor/vehicle/11.png'
import carIcon from 'assets/img/icons/mc/png/2.png'
function VehicalDetail() {
    return (
        <React.Fragment>
            <div className="ltnd__header-area ltnd__header-area-2 section-bg-2---">
                <div className="ltnd__header-middle-area mt-30">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="ltnd__page-title-area">
                                <p className="page-back-btn">
                                    <a href="policies.html">
                                        <i className="icon-left-arrow-1" /> Back
                                    </a>
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
                                                    <input type="text"/>
                                                </div>
                                                <div className="policies-details-single-info">
                                                    <h6 className="ltnd__title-4">Year</h6>
                                                    <input type="text"/>
                                                
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="policies-details-single-info">
                                                    <h6 className="ltnd__title-4">License number</h6>
                                                    <input type="text"/>
                                                    
                                                </div>
                                                <div className="policies-details-single-info">
                                                    <h6 className="ltnd__title-4">Color</h6>
                                                    <input type="text"/>
                                                    
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="policies-details-single-info">
                                                    <h6 className="ltnd__title-4">Driving license validity</h6>
                                                    <input type="date" className='form-control'/>
                                                    
                                                </div>
                                                <div className="policies-details-single" style={{marginTop:'4rem'}}>
                                                    <h6 className="ltnd__title-4">Capacity</h6>
                                                    <input type="text"/>
                                                    
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="policies-details-single-info">
                                                    <h6 className="ltnd__title-4">Identification number</h6>
                                                    <input type="text"/>
                                                    
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
                                    <a href="" data-rel="lightcase:myCollection">
                                        <img src={carImg} alt="Image" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="row ltn__custom-gutter">
                                    <div className="col-lg-6">
                                        <div className="ltnd__img-gallery mt-15">
                                            <a
                                                href="img/motor/vehicle/11.png"
                                                data-rel="lightcase:myCollection"
                                            >
                                                <img src={carImg2} alt="Image" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="ltnd__img-gallery mt-15">
                                            <a
                                                href="img/motor/vehicle/12.png"
                                                data-rel="lightcase:myCollection"
                                            >
                                                <img src={carImg3} alt="Image" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="ltnd__img-gallery mt-15">
                                            <a
                                                href="img/motor/vehicle/14.png"
                                                data-rel="lightcase:myCollection"
                                            >
                                                <img src={carImg4} alt="Image" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="ltnd__img-gallery mt-15">
                                            <a
                                                href="img/motor/vehicle/14.png"
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


            </div>
        </React.Fragment>
    )
}

export default VehicalDetail