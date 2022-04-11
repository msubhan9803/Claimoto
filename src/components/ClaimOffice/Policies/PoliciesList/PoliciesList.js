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
                  <li className="table-data-1">Policy no.</li>
                  <li className="table-data-2">Product Name</li>
                  <li className="table-data-3 ltn__color-1">Policy type</li>
                  <li className="table-data-4">Policy start</li>
                  <li className="table-data-5">Policy end</li>
                  <li className="table-data-6"></li>
                  <li className="table-data-7"></li>
                  <li className="table-data-8"></li>
                </ul>
                {policies?.map((p) => {
                  return (
                    <ul className="ltn__select-availability-table-row">
                      <li className="table-data-1">
                        <strong>{p.PolicyNo}</strong>
                      </li>
                      <li className="table-data-2"></li>
                      <li className="table-data-3 ltn__color-1"></li>
                      <li className="table-data-4">
                        {moment(p.StartDate).format("LL")}
                      </li>
                      <li className="table-data-5">
                        {moment(p.EndDate).format("LL")}
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
                          to={`/claim/policy_detail/${p.Id}`}
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
