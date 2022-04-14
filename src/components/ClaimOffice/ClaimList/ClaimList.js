import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { _productDetailDotDot } from "functions";
import { useSelector } from "react-redux";
import { getAllowActions } from "functions";

function ClaimList({ claims }) {
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
                  <li className="table-data-1">Policy no.</li>
                  {/* <li className="table-data-2">Claim no.</li> */}
                  <li className="table-data-3 ltn__color-1">Car no.</li>
                  <li className="table-data-3 ltn__color-1">Claim type</li>
                  <li className="table-data-4">Incident date</li>
                  <li className="table-data-5">Submission date</li>
                  <li className="table-data-6"></li>
                  <li className="table-data-7"></li>
                  <li className="table-data-8"></li>
                </ul>
                {claims?.map((p) => {
                  return (
                    <ul className="ltn__select-availability-table-row">
                      <li className="table-data-1">
                        <strong>{p.PolicyNo}</strong>
                      </li>
                      {/* <li className="table-data-2">{p.ClaimNo}</li> */}
                      <li className="table-data-3 ltn__color-1">{p.CarNo}</li>
                      <li className="table-data-3 ltn__color-1">{p.ClaimTypeName}</li>
                      <li className="table-data-4">
                        {moment(p.IncidentDate).format("LL")}
                      </li>
                      <li className="table-data-5">
                        {moment(p.SubmissionDate).format("LL")}
                      </li>
                      <li className="table-data-6">
                        <strong>
                          <Link
                            className="ltn__secondary-color"
                            to={`/claim/policy_detail/${p.Id}`}
                          >
                            Policy details
                          </Link>
                        </strong>
                      </li>
                      <li className="table-data-7">
                        <strong>
                          <Link
                            className="ltn__secondary-color"
                            to={`/claim/vehical_detail_view/${p.Id}`}
                          >
                            Vehicle details
                          </Link>
                        </strong>
                      </li>
                      <li className="table-data-8">
                        <Link
                          className="ltn__secondary-color"
                          to={`/claim/claim_detail/${p.ClaimId}`}
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

export default ClaimList;
