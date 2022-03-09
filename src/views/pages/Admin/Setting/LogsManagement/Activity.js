import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GetAllActivityLogs } from "../../../../../store/actions/settings/index.js";
import ActivityLogsList from '../../../../../components/Admin/Activities/ActivityLogsList.js';

const Activity = () => {
  let dispatch = useDispatch();
  const { activitesList } = useSelector((state) => state.settingsReducer);
  const { ActivityLogs } = activitesList;

  useEffect(() => {
    dispatch(GetAllActivityLogs());
  }, []);

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
                      <ActivityLogsList activitesList={ActivityLogs} />
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
