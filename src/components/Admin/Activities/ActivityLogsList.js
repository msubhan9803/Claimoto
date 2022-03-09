import React, { useState } from "react";
import User_Icon from "assets/img/9.png";
import Garage_Icon from "assets/img/user-account.png";
import moment from "moment";

const Activitylogslist = ({ activitesList }) => {
  const [currentAccordian, setCurrentAccordian] = useState(null);

  const _handleAccordian = (index) => {
    if (index !== currentAccordian) {
      setCurrentAccordian(index);
    } else {
      setCurrentAccordian(null);
    }
  };

  //   Id
  //   User Id
  //   Activity Id
  //   Activity Time
  //   Entity Reference
  //   Created On
  //   Updated On

  return (
    <>
      <div class="row">
        <div class="col-lg-12">
          <div class="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__garage-table-wrap">
            <div class="ltn__select-availability-table  d-none d-md-block">
              <ul class="ltn__select-availability-table-head">
                <li class="table-data-1">User</li>
                <li class="table-data-3">Activity</li>
                <li class="table-data-6">Activity Time</li>
                <li class="table-data-6">Entity</li>
                <li class="table-data-7">.</li>
              </ul>
              {activitesList.map((log, index) => (
                <>
                  <ul class="ltn__select-availability-table-row">
                    <li class="table-data-1">
                      <strong>
                        {/* <img src={Garage_Icon} alt="#" /> */}
                        Yasmin Ali
                      </strong>
                    </li>
                    <li class="table-data-3">{log.ActivityId}</li>
                    <li class="table-data-6 ltn__color-1">
                      {moment(log.ActivityTime).format(
                        "MMMM Do YYYY, h:mm:ss a"
                      )}
                    </li>
                    <li class="table-data-6">{log.EntityReference}</li>
                    <li
                      class="table-data-7 cursor-pointer"
                      onClick={() => _handleAccordian(index)}
                    >
                      <i class="ti-angle-down"></i>
                    </li>
                  </ul>
                  <div
                    id="ltn__activity_item_1"
                    class={`collapse ltn__activity-single-content-info ${
                      index == currentAccordian && "show"
                    }`}
                  >
                    <div class="ltn_coupon-code-form ltn__form-box">
                      <form action="#">
                        <div class="row">
                          <div class="col-lg-2 col-md-4">
                            <div class="input-item">
                              <p class="ltn__color-1 mb-10">Edit field</p>
                              <p>
                                <strong>Updated by</strong>
                              </p>
                            </div>
                          </div>
                          <div class="col-lg-3 col-md-4">
                            <div class="input-item">
                              <p class="ltn__color-1 mb-10">Field old value</p>
                              <p>
                                <strong>yasminali@gmail.com</strong>
                              </p>
                            </div>
                          </div>
                          <div class="col-lg-2"></div>
                          <div class="col-lg-4 col-md-4">
                            <div class="input-item">
                              <p class="ltn__color-1 mb-10">Field new value</p>
                              <p>
                                <strong>yasminali@gmail.com</strong>
                              </p>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </>
              ))}
            </div>

            {/* Here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Activitylogslist;
