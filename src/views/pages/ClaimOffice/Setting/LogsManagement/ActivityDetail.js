import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GetAllActivityById } from "../../../../../store/actions/settings/index.js";
import ActivityLogsDetailsList from "../../../../../components/Admin/Activities/ActivityLogsDetailsList";

const Activitydetail = ({ layout }) => {
  let dispatch = useDispatch();
  const params = useParams();
  const { currentActivityDetails } = useSelector(
    (state) => state.settingsReducer
  );

  useEffect(() => {
    dispatch(GetAllActivityById(params.id));
  }, []);

  return (
    <div class="body-bg-1 pb-80">
      <div class="ltnd__header-area ltnd__header-area-2 section-bg-2---">
        <div class="ltnd__header-middle-area mt-30">
          <div class="row">
            <div class="col-lg-9">
              <div class="ltnd__page-title-area">
                <h2>Activity Details</h2>
                <p class="page-back-btn">
                  <Link to={`/${layout}/settings/logs_activity`}>
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
        <ActivityLogsDetailsList activitesList={currentActivityDetails} />
      </div>
    </div>
  );
};

export default Activitydetail;
