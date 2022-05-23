import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { _productDetailDotDot } from "functions";
import { useSelector } from "react-redux";
import { getAllowActions } from "functions";

function PoliciesList({ policies }) {
  //Permissions Controlling
  const { permissions } = useSelector((state) => state.authReducer);
  let policy_actions = getAllowActions({ permissions, module_name: "APO" });

  return (
    <React.Fragment>
      {/* SELECT AVAILABILITY AREA START */}

      <div className="select-availability-area pb-4">
        <div className="row">
          <div className="col-lg-12">
            {/* ltnd__policies-table start */}
            <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap">
              <div className="ltn__select-availability-table  d-none d-md-block">
                <ul className="ltn__select-availability-table-head">
                  <li className="table-data-2">Policy no.</li>
                  <li className="table-data-2">Claim no.</li>
                  <li className="table-data-2 ltn__color-1">Car no.</li>
                  <li className="table-data-2">Claim type</li>
                  <li className="table-data-2">Incident date</li>
                  <li className="table-data-2">Submission date</li>
                  <li className="table-data-1"></li>
                </ul>
                {policies?.map((p) => {
                  return (
                    <ul className="ltn__select-availability-table-row">
                      <li className="table-data-2">
                        <strong>{p.PolicyNo}</strong>
                      </li>
                      <li className="table-data-2">
                        <strong>{p.PolicyNo}</strong>
                      </li>
                      <li className="table-data-2">
                        <strong>{p.PolicyNo}</strong>
                      </li>
                      <li className="table-data-2">{p.ProductName}</li>
                      <li className="table-data-2">
                        {moment(p.StartDate).format("LL")}
                      </li>
                      <li className="table-data-2">
                        {moment(p.EndDate).format("LL")}
                      </li>
                      <li className="table-data-1">
                        <Link
                          className="ltn__secondary-color"
                          to={`/claim/claim_list/${p.Id}`}
                        >
                          <strong>Claim Details</strong>
                        </Link>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PoliciesList;
