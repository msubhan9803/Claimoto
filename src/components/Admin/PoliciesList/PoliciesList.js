import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { _productDetailDotDot } from "functions";
import { useSelector } from "react-redux";
import { getAllowActions } from "functions";

function PoliciesList({ policies }) {

  //Permissions Controlling
  const { permissions } = useSelector(state => state.authReducer);
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
                  <li className="table-data-1">Policy number</li>
                  <li className="table-data-2">Policy holder</li>
                  <li className="table-data-3 ltn__color-1">Identity</li>
                  <li className="table-data-4">Date of birth</li>
                  <li className="table-data-5">Driving license validity</li>
                  <li className="table-data-6">Address</li>
                  <li className="table-data-7">Vehicle </li>
                  <li className="table-data-8">Details</li>
                  <li className="table-data-8">Edit</li>
                </ul>
                {policies?.map((p) => {
                  return (
                    <ul className="ltn__select-availability-table-row">
                      <li className="table-data-1">
                        <strong>{p.PolicyNo}</strong>
                      </li>
                      <li className="table-data-2">{p.PolicyHolderName}</li>
                      <li className="table-data-3 ltn__color-1">
                        {p.IdentityNo}
                      </li>
                      <li className="table-data-4">
                        {moment(p.DOB).format("LL")}
                      </li>
                      <li className="table-data-5">
                        {moment(p.DrivingLicenseValidity).format("LL")}
                      </li>
                      <li className="table-data-6">
                        {_productDetailDotDot(p.Address, 26)}
                      </li>
                      <li className="table-data-7">
                        <strong>
                          <Link to={`/admin/vehical_detail_view/${p.Id}`}>
                            Vehicle
                          </Link>
                        </strong>
                      </li>
                      <li className="table-data-8">
                        <Link
                          className="ltn__secondary-color"
                          to={`/admin/policy_detail/${p.Id}`}
                        >
                          <strong>Details</strong>
                        </Link>
                      </li>
                      <li className="table-data-8">
                        {policy_actions?.includes("UPDATE") &&
                          <Link
                            className="ltn__secondary-color"
                            to={`/admin/policy_detail_edit/${p.Id}`}
                          >
                            <strong>Edit</strong>
                          </Link>
                        }
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
