import React, { useState } from "react";
import User_Icon from "assets/img/9.png";
import Garage_Icon from "assets/img/user-account.png";
import moment from "moment";
import { Link, useParams, useNavigate } from "react-router-dom";

const ActivityLogsDetailsList = ({ activitesList }) => {
  return (
    <>
      <div class="row">
        <div class="col-lg-12">
          <div class="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__garage-table-wrap">
            <div class="ltn__select-availability-table  d-none d-md-block">
              <ul class="ltn__select-availability-table-head">
                <li class="table-data-1">Field Name</li>
                <li class="table-data-3">New Value</li>
                <li class="table-data-6">Old Value</li>
              </ul>
              {activitesList.map((log, index) => (
                <>
                  <ul class="ltn__select-availability-table-row">
                    <li class="table-data-1"><div className="activity-detail-text">{log.FieldName}</div></li>
                    <li class="table-data-3"><div className="activity-detail-text">{log.NewValue}</div></li>
                    <li class="table-data-3"><div className="activity-detail-text">{log.OldValue}</div></li>
                  </ul>
                </>
              ))}
            </div>
            <div class="ltn__select-availability-table-responsive d-md-none">
              {activitesList.map((log, index) => (
                <ul class="ltn__select-availability-table-row-responsive-item">
                  <li>
                    <span>Field Name</span> <div class="activity-detail-text">{log.FieldName}</div>
                  </li>
                  <li>
                    <span>New Value</span> <div class="activity-detail-text">{log.NewValue}</div>
                  </li>
                  <li>
                    <span>Old Value</span> <div class="activity-detail-text">{log.OldValue}</div>
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

export default ActivityLogsDetailsList;
