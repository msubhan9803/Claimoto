import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Garage_Icon from "assets/img/user-account.png";
import User_Icon from "assets/img/9.png";

const Activity = () => {
  return (
    <div class="body-bg-1 pb-80">
      <div class="ltnd__header-area ltnd__header-area-2 section-bg-2---">
        <div class="ltnd__header-middle-area mt-30">
          <div class="row">
            <div class="col-lg-9">
              <div class="ltnd__page-title-area">
                <h2>Activity</h2>
                <p class="page-back-btn">
                  <Link to="/admin/settings">
                    <i className="icon-left-arrow-1" /> Back
                  </Link>
                </p>
              </div>
            </div>
            <div class="col-lg-3 align-self-center text-end">
              <div class="btn-wrapper btn-inline text-center mt-0 d-none">
                <a
                  href="#"
                  class="btn theme-btn-1 btn-round-12 btn-2"
                  title="Quick View"
                  data-bs-toggle="modal"
                  data-bs-target="#adding_modal"
                >
                  Edit
                </a>
              </div>
              <div class="ltnd__date-area d-none">
                <div class="ltn__datepicker">
                  <div class="ltn_datepicker-title">
                    <span>Date</span>
                  </div>
                  <div class="input-group date" data-provide="datepicker">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Select Date"
                    />
                    <div class="input-group-addon">
                      <i class="far fa-calendar-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="body-content-area-inner pt-20">
        <div class="select-availability-area pb-120">
          <div class="row">
            <div class="col-lg-12">
              <div class="ltn__shop-details-tab-inner ltn__shop-details-tab-inner-2">
                <div class="ltn__shop-details-tab-menu mb-20">
                  <div class="nav">
                    <a
                      class="active show"
                      data-bs-toggle="tab"
                      href="#ltn__tab_3_1"
                    >
                      Activity Log
                    </a>
                    <a data-bs-toggle="tab" href="#ltn__tab_3_2">
                      Error Log
                    </a>
                  </div>
                </div>
                <div class="tab-content">
                  <div class="tab-pane fade active show" id="ltn__tab_3_1">
                    <div class="ltn__apartments-tab-content-inner">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__garage-table-wrap">
                            <div class="ltn__select-availability-table  d-none d-md-block">
                              <ul class="ltn__select-availability-table-head">
                                <li class="table-data-1">User</li>
                                <li class="table-data-3">Activity</li>
                                <li class="table-data-6">Date and time</li>
                                <li class="table-data-6">Entity</li>
                                <li class="table-data-7">. </li>
                              </ul>
                              <ul class="ltn__select-availability-table-row">
                                <li class="table-data-1">
                                  <strong>
                                    <img src={Garage_Icon} alt="#" />
                                    Yasmin Ali{" "}
                                  </strong>
                                </li>
                                <li class="table-data-3">Viewed claim 1234 </li>
                                <li class="table-data-6 ltn__color-1">
                                  November 12, 2021 10:00AM
                                </li>
                                <li class="table-data-6">
                                  Viewed claim to Re_master_claim
                                </li>
                                <li class="table-data-7">
                                  <a
                                    href="#ltn__activity_item_1"
                                    data-bs-toggle="collapse"
                                  >
                                    <i class="ti-angle-down"></i>
                                  </a>
                                </li>
                              </ul>
                              <div
                                id="ltn__activity_item_1"
                                class="collapse ltn__activity-single-content-info"
                              >
                                <div class="ltn_coupon-code-form ltn__form-box">
                                  <form action="#">
                                    <div class="row">
                                      <div class="col-lg-2 col-md-4">
                                        <div class="input-item">
                                          <p class="ltn__color-1 mb-10">
                                            Edit field
                                          </p>
                                          <p>
                                            <strong>Updated by</strong>
                                          </p>
                                        </div>
                                      </div>
                                      <div class="col-lg-3 col-md-4">
                                        <div class="input-item">
                                          <p class="ltn__color-1 mb-10">
                                            Field old value
                                          </p>
                                          <p>
                                            <strong>yasminali@gmail.com</strong>
                                          </p>
                                        </div>
                                      </div>
                                      <div class="col-lg-2"></div>
                                      <div class="col-lg-4 col-md-4">
                                        <div class="input-item">
                                          <p class="ltn__color-1 mb-10">
                                            Field new value
                                          </p>
                                          <p>
                                            <strong>yasminali@gmail.com</strong>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div class="ltn__select-availability-table-responsive d-md-none">
                              <ul class="ltn__select-availability-table-row-responsive-item">
                                <li>
                                  <span>Policy number</span>{" "}
                                  <span class="tower-name">
                                    <strong>10/tpl2020/001</strong>
                                  </span>
                                </li>
                                <li>
                                  <span>Policy holder</span>{" "}
                                  <span>Yasmin Ali</span>
                                </li>
                                <li>
                                  <span>Identity</span> <span>15869632423</span>
                                </li>
                                <li>
                                  <span>Date of birth</span>{" "}
                                  <span>May 19, 1992</span>
                                </li>
                                <li>
                                  <span>Driving license validity</span>{" "}
                                  <span>Dec 31, 2021</span>
                                </li>
                                <li>
                                  <span>Address</span>{" "}
                                  <span>Prince Nails' bent Asem St...</span>
                                </li>
                                <li>
                                  <span>Vehicle</span>
                                  <span>
                                    <strong>
                                      <a
                                        href="#"
                                        class=""
                                        title="Quick View"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit_table_item_modal"
                                      >
                                        Edit
                                      </a>
                                    </strong>
                                  </span>
                                </li>
                                <li>
                                  <span>Details</span>{" "}
                                  <span>
                                    <a
                                      class="ltn__secondary-color"
                                      href="garage-details.html"
                                    >
                                      <strong>Details</strong>
                                    </a>
                                  </span>
                                </li>
                              </ul>
                              <ul class="ltn__select-availability-table-row-responsive-item">
                                <li>
                                  <span>Policy number</span>{" "}
                                  <span class="tower-name">
                                    <strong>10/tpl2020/001</strong>
                                  </span>
                                </li>
                                <li>
                                  <span>Policy holder</span>{" "}
                                  <span>Yasmin Ali</span>
                                </li>
                                <li>
                                  <span>Identity</span> <span>15869632423</span>
                                </li>
                                <li>
                                  <span>Date of birth</span>{" "}
                                  <span>May 19, 1992</span>
                                </li>
                                <li>
                                  <span>Driving license validity</span>{" "}
                                  <span>Dec 31, 2021</span>
                                </li>
                                <li>
                                  <span>Address</span>{" "}
                                  <span>Prince Nails' bent Asem St...</span>
                                </li>
                                <li>
                                  <span>Vehicle</span>
                                  <span>
                                    <strong>
                                      <a
                                        href="#"
                                        class=""
                                        title="Quick View"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit_table_item_modal"
                                      >
                                        Edit
                                      </a>
                                    </strong>
                                  </span>
                                </li>
                                <li>
                                  <span>Details</span>{" "}
                                  <span>
                                    <a
                                      class="ltn__secondary-color"
                                      href="garage-details.html"
                                    >
                                      <strong>Details</strong>
                                    </a>
                                  </span>
                                </li>
                              </ul>
                              <ul class="ltn__select-availability-table-row-responsive-item">
                                <li>
                                  <span>Policy number</span>{" "}
                                  <span class="tower-name">
                                    <strong>10/tpl2020/001</strong>
                                  </span>
                                </li>
                                <li>
                                  <span>Policy holder</span>{" "}
                                  <span>Yasmin Ali</span>
                                </li>
                                <li>
                                  <span>Identity</span> <span>15869632423</span>
                                </li>
                                <li>
                                  <span>Date of birth</span>{" "}
                                  <span>May 19, 1992</span>
                                </li>
                                <li>
                                  <span>Driving license validity</span>{" "}
                                  <span>Dec 31, 2021</span>
                                </li>
                                <li>
                                  <span>Address</span>{" "}
                                  <span>Prince Nails' bent Asem St...</span>
                                </li>
                                <li>
                                  <span>Vehicle</span>
                                  <span>
                                    <strong>
                                      <a
                                        href="#"
                                        class=""
                                        title="Quick View"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit_table_item_modal"
                                      >
                                        Edit
                                      </a>
                                    </strong>
                                  </span>
                                </li>
                                <li>
                                  <span>Details</span>{" "}
                                  <span>
                                    <a
                                      class="ltn__secondary-color"
                                      href="garage-details.html"
                                    >
                                      <strong>Details</strong>
                                    </a>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="ltn__tab_3_2">
                    <div class="ltn__product-tab-content-inner">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__agencies-table-wrap">
                            <div class="ltn__select-availability-table  d-none d-md-block">
                              <ul class="ltn__select-availability-table-head">
                                <li class="table-data-1">Source</li>
                                <li class="table-data-3">Method</li>
                                <li class="table-data-6">Message</li>
                                <li class="table-data-6 ltn__color-1">
                                  Date and time
                                </li>
                                <li class="table-data-1">User</li>
                              </ul>
                              <ul class="ltn__select-availability-table-row">
                                <li class="table-data-1">ORA-200 F33</li>
                                <li class="table-data-3">Insert</li>
                                <li class="table-data-6">
                                  Claim failed to generate
                                </li>
                                <li class="table-data-6 ltn__color-1">
                                  November 12, 2021 10:00AM
                                </li>
                                <li class="table-data-1">
                                  <strong>
                                    <img src={User_Icon} alt="#" />
                                    Yasmin Ali{" "}
                                  </strong>
                                </li>
                              </ul>
                            </div>
                            <div class="ltn__select-availability-table-responsive d-md-none">
                              <ul class="ltn__select-availability-table-row-responsive-item">
                                <li>
                                  <span>Policy number</span>{" "}
                                  <span class="tower-name">
                                    <strong>10/tpl2020/001</strong>
                                  </span>
                                </li>
                                <li>
                                  <span>Policy holder</span>{" "}
                                  <span>Yasmin Ali</span>
                                </li>
                                <li>
                                  <span>Identity</span> <span>15869632423</span>
                                </li>
                                <li>
                                  <span>Date of birth</span>{" "}
                                  <span>May 19, 1992</span>
                                </li>
                                <li>
                                  <span>Driving license validity</span>{" "}
                                  <span>Dec 31, 2021</span>
                                </li>
                                <li>
                                  <span>Address</span>{" "}
                                  <span>Prince Nails' bent Asem St...</span>
                                </li>
                                <li>
                                  <span>Vehicle</span>
                                  <span>
                                    <strong>
                                      <a
                                        href="#"
                                        class=""
                                        title="Quick View"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit_table_item_modal_agency"
                                      >
                                        Edit
                                      </a>
                                    </strong>
                                  </span>
                                </li>
                                <li>
                                  <span>Details</span>{" "}
                                  <span>
                                    <a
                                      class="ltn__secondary-color"
                                      href="agency-details.html"
                                    >
                                      <strong>Details</strong>
                                    </a>
                                  </span>
                                </li>
                              </ul>
                              <ul class="ltn__select-availability-table-row-responsive-item">
                                <li>
                                  <span>Policy number</span>{" "}
                                  <span class="tower-name">
                                    <strong>10/tpl2020/001</strong>
                                  </span>
                                </li>
                                <li>
                                  <span>Policy holder</span>{" "}
                                  <span>Yasmin Ali</span>
                                </li>
                                <li>
                                  <span>Identity</span> <span>15869632423</span>
                                </li>
                                <li>
                                  <span>Date of birth</span>{" "}
                                  <span>May 19, 1992</span>
                                </li>
                                <li>
                                  <span>Driving license validity</span>{" "}
                                  <span>Dec 31, 2021</span>
                                </li>
                                <li>
                                  <span>Address</span>{" "}
                                  <span>Prince Nails' bent Asem St...</span>
                                </li>
                                <li>
                                  <span>Vehicle</span>
                                  <span>
                                    <strong>
                                      <a
                                        href="#"
                                        class=""
                                        title="Quick View"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit_table_item_modal_agency"
                                      >
                                        Edit
                                      </a>
                                    </strong>
                                  </span>
                                </li>
                                <li>
                                  <span>Details</span>{" "}
                                  <span>
                                    <a
                                      class="ltn__secondary-color"
                                      href="agency-details.html"
                                    >
                                      <strong>Details</strong>
                                    </a>
                                  </span>
                                </li>
                              </ul>
                              <ul class="ltn__select-availability-table-row-responsive-item">
                                <li>
                                  <span>Policy number</span>{" "}
                                  <span class="tower-name">
                                    <strong>10/tpl2020/001</strong>
                                  </span>
                                </li>
                                <li>
                                  <span>Policy holder</span>{" "}
                                  <span>Yasmin Ali</span>
                                </li>
                                <li>
                                  <span>Identity</span> <span>15869632423</span>
                                </li>
                                <li>
                                  <span>Date of birth</span>{" "}
                                  <span>May 19, 1992</span>
                                </li>
                                <li>
                                  <span>Driving license validity</span>{" "}
                                  <span>Dec 31, 2021</span>
                                </li>
                                <li>
                                  <span>Address</span>{" "}
                                  <span>Prince Nails' bent Asem St...</span>
                                </li>
                                <li>
                                  <span>Vehicle</span>
                                  <span>
                                    <strong>
                                      <a
                                        href="#"
                                        class=""
                                        title="Quick View"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit_table_item_modal_agency"
                                      >
                                        Edit
                                      </a>
                                    </strong>
                                  </span>
                                </li>
                                <li>
                                  <span>Details</span>{" "}
                                  <span>
                                    <a
                                      class="ltn__secondary-color"
                                      href="agency-details.html"
                                    >
                                      <strong>Details</strong>
                                    </a>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ltn__pagination-area text-center">
                  <div class="ltn__pagination">
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fas fa-chevron-left"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li class="active">
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">...</a>
                      </li>
                      <li>
                        <a href="#">10</a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fas fa-chevron-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
