import React, { useEffect } from "react";
import carImg from "assets/img/icons/mc/png/3.png";
import Pagination from "components/Pagination/Pagination";
import Loader from "components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllowActions } from "functions";
import LoaderAnimation from "components/Loader/AnimatedLoaded";
import { claimStatusIdByProfider } from "utils/constants";

const SurveyorList = ({ loading, allProviders }) => {
  //Permissions Controlling
  const { permissions } = useSelector((state) => state.authReducer);

  return (
    <React.Fragment>
      <div className="ltn__product-tab-content-inner">
        <div className="row">
          {loading ? (
            <LoaderAnimation />
          ) : (
            <div className="col-lg-12">
              <div className="ltn__select-availability-table-wrap ltnd__policies-table-wrap ltnd__agencies-table-wrap">
                <div className="ltn__select-availability-table  d-none d-md-block">
                  <ul className="ltn__select-availability-table-head">
                    <li className="table-data-1">Surveyor</li>
                    {/* <li className="table-data-3">Location</li> */}
                    <li className="table-data-2">Assigned Claims</li>
                    <li className="table-data-2">Pending</li>
                    <li className="table-data-2">Under assesment</li>
                    <li className="table-data-2">Closed</li>
                    <li className="table-data-2">Details</li>
                  </ul>
                  {allProviders.map((record) => {
                    return (
                      <ul className="ltn__select-availability-table-row">
                        <li className="table-data-1">
                          <strong>
                            <img
                              src={
                                record.Image &&
                                `${process.env.REACT_APP_API_ENVIRONMENT}/${record.Image}`
                              }
                              alt=""
                            />
                            {record.Name}
                          </strong>
                        </li>
                        {/* <li className="table-data-3">
                          {record?.POCName || ""}
                        </li> */}
                        <li className="table-data-2 dot_pending">
                          <Link
                            className="ltn__secondary-color"
                            to={`/claim/claims/surveyor/${record.AgencyGarageId}/${claimStatusIdByProfider.assignedClaims}/${record.Name}`}
                          >
                            <span class="dot_assign_provider"></span>
                            <b>{record?.AssignedClaims}</b>
                          </Link>
                        </li>
                        <li className="table-data-2 dot_pending">
                          <Link
                            className="ltn__secondary-color"
                            to={`/claim/claims/surveyor/${record.AgencyGarageId}/${claimStatusIdByProfider.pending}/${record.Name}`}
                          >
                            <span class="dot_assign_provider"></span>
                            <b>{record?.Pending}</b>
                          </Link>
                        </li>
                        <li className="table-data-2 dot_under_assesment">
                          <Link
                            className="ltn__secondary-color"
                            to={`/claim/claims/surveyor/${record.AgencyGarageId}/${claimStatusIdByProfider.underAssesment}/${record.Name}`}
                          >
                            <span class="dot_assign_provider "></span>
                            <b>{record?.Under_Repair}</b>
                          </Link>
                        </li>
                        <li className="table-data-2 dot_close">
                          <Link
                            className="ltn__secondary-color"
                            to={`/claim/claims/surveyor/${record.AgencyGarageId}/${claimStatusIdByProfider.closed}/${record.Name}`}
                          >
                            <span class="dot_assign_provider "></span>
                            <b>{record?.Closed}</b>
                          </Link>
                        </li>
                        
                        <li className="table-data-2">
                          <strong>
                            <Link
                              className="ltn__secondary-color"
                              to={`/claim/agencies/agency_detail/${record.AgencyGarageId}`}
                            >
                              View details
                            </Link>
                          </strong>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SurveyorList;