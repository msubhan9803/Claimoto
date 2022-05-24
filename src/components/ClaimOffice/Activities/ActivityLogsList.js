import React, { useState } from "react";
import User_Icon from "assets/img/9.png";
import Garage_Icon from "assets/img/user-account.png";
import moment from "moment";
import { Link, useParams, useNavigate } from "react-router-dom";

const Activitylogslist = ({ activitesList, layout }) => {
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
                        {log.UserName}
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
                      //   onClick={() => _handleAccordian(index)}
                    >
                      <Link to={`/${layout}/settings/logs_activity/${log.Id}`}>
                        <span className="link cursor-pointer">Details</span>
                      </Link>
                    </li>
                  </ul>
                </>
              ))}
            </div>
            <div class="ltn__select-availability-table-responsive d-md-none">
              {activitesList.map((log, index) => (
                <ul class="ltn__select-availability-table-row-responsive-item">
                  <li>
                    <span>User</span>{" "}
                    <span class="tower-name">
                      <strong>{log.UserName}</strong>
                    </span>
                  </li>
                  <li>
                    <span>Activity</span> <span>{log.ActivityId}</span>
                  </li>
                  <li>
                    <span>Activity Time</span>{" "}
                    <span>
                      {" "}
                      {moment(log.ActivityTime).format(
                        "MMMM Do YYYY, h:mm:ss a"
                      )}
                    </span>
                  </li>
                  <li>
                    <span>Entity</span> <span>{log.EntityReference}</span>
                  </li>
                  <li>
                    <span>Details</span>{" "}
                    <Link to={`/${layout}/settings/logs_activity/${log.Id}`}>
                      <span className="link cursor-pointer">Details</span>
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activitylogslist;
