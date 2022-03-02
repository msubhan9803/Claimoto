import React from "react";
import { Link, useParams } from "react-router-dom";
import carImg from "assets/img/motor/vehicle/1.png";
import carImg2 from "assets/img/motor/vehicle/12.png";
import carImg3 from "assets/img/motor/vehicle/14.png";
function VehicalParts() {
  const params = useParams();
  let isLoading = false;
  return (
    <React.Fragment>
      <div className="ltnd__header-area ltnd__header-area-2 section-bg-2---">
        <div className="ltnd__header-middle-area mt-30">
          <div className="row">
            <div className="col-lg-9">
              <div className="ltnd__page-title-area">
                <p className="page-back-btn">
                  <Link
                    to={
                      params
                        ? `/admin/policy_detail/${params}`
                        : "/admin/create_policy"
                    }
                  >
                    <i className="icon-left-arrow-1" /> Back
                  </Link>
                </p>
                {/* <h2>Vehicle details</h2> */}
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
                      placeholder=""
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
      </div>

      {/* Body Content Area Inner Start */}
      <form>
        <div className="body-content-area-inner">
          {/* BLOCK AREA START ( Vehicle Details section - 1 ) */}

          {params && isLoading ? (
            <div className="spinner-grow" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <>
              <div className="ltnd__block-area">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="ltnd__block-item mt-30">
                      <div className="ltn__block-item-info ltnd__policies-details-info">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="row ltn__custom-gutter">
                              <div className="col-lg-7">
                                <div className="ltnd__img-gallery mt-15">
                                  <a
                                    href="img/motor/vehicle/1.png"
                                    data-rel="lightcase:myCollection"
                                  >
                                    <img src={carImg} alt="Image" />
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-5">
                                <div className="row ltn__custom-gutter">
                                  <div className="col-lg-12">
                                    <div className="ltnd__img-gallery mt-15">
                                      <a
                                        href="img/motor/vehicle/11.png"
                                        data-rel="lightcase:myCollection"
                                      >
                                        <img src={carImg2} alt="Image" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="ltnd__img-gallery mt-15">
                                      <a
                                        href="img/motor/vehicle/12.png"
                                        data-rel="lightcase:myCollection"
                                      >
                                        <img src={carImg3} alt="Image" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="ltnd__title ltnd__title-2---">
                              <h1>Break pads</h1>
                              <h6 className="ltnd__title-4">15869</h6>
                            </div>
                            <div className="row">
                              <div className="col-lg-4 col-md-6">
                                <div className="policies-details-single-info">
                                  <h6 className="ltnd__title-4">Make</h6>
                                  <h6>BMW</h6>
                                </div>
                                <div className="policies-details-single-info">
                                  <h6 className="ltnd__title-4">Year</h6>
                                  <h6>2021</h6>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6">
                                <div className="policies-details-single-info">
                                  <h6 className="ltnd__title-4">Model</h6>
                                  <h6>BMW X3</h6>
                                </div>
                                <div className="policies-details-single-info">
                                  <h6 className="ltnd__title-4">OEM number</h6>
                                  <h6>E00912</h6>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6">
                                <div className="policies-details-single-info">
                                  <h6 className="ltnd__title-4">Make</h6>
                                  <h6>BMW</h6>
                                </div>
                                <div className="policies-details-single-info">
                                  <h6 className="ltnd__title-4">
                                    Artificial number
                                  </h6>
                                  <h6>A276-0192</h6>
                                </div>
                              </div>
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
              {/* BLOCK AREA START ( Product Details section - 2 ) */}
              <div className="ltnd__block-area">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="ltnd__block-item mt-30">
                      <div className="ltnd__title ltnd__title-2">
                        <h4>Description</h4>
                      </div>
                      <div className="ltn__block-item-info">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="garage-details-single-item mb-40">
                              <p>
                                Brake pads are a vital component of every disc
                                brake braking system used on most of today’s
                                cars, commercial vehicles and other modes of
                                transportation. The brake pad is made of a
                                complex compound of materials, bonded to a steel
                                backing plate, designed to stop your vehicle
                                using friction. When you apply pressure to the
                                brake pedal you squeeze the pads against the
                                brake discs to slow your vehicle and ultimately
                                bring it to a complete stop. Read More
                              </p>
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
            </>
          )}
          <footer className="ltnd__footer-1 fixed-footer-1 mt-4">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="ltnd__footer-1-inner bg-white">
                    <div className="ltnd__left btn-normal">
                      {/* {params?.id &&
                                            <span
                                                style={{ fontWeight: '600', cursor: 'pointer' }}
                                            >
                                                <i className="ti-trash" /> Delete
                                            </span>
                                        } */}
                    </div>

                    <div className="ltnd__right btn-normal">
                      <div className="btn-wrapper">
                        <Link to="/admin/create_policy">
                          <i className="ti-angle-left" /> Back
                        </Link>
                        <button
                          type="submit"
                          className="btn theme-btn-1 btn-round-12"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </form>
    </React.Fragment>
  );
}

export default VehicalParts;