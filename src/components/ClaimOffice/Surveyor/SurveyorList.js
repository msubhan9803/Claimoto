import React, { useEffect } from "react";
import carImg from "assets/img/icons/mc/png/3.png";
import Pagination from "components/Pagination/Pagination";
import Loader from "components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllowActions } from "functions";
import LoaderAnimation from "components/Loader/AnimatedLoaded";

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
                    <li className="table-data-3">Location</li>
                    <li className="table-data-6">Assigned Claims</li>
                    <li className="table-data-6">Pending</li>
                    <li className="table-data-7">Under assesment</li>
                    <li className="table-data-7">Closed</li>
                    <li className="table-data-8">Details</li>
                  </ul>
                  {allProviders.map((record) => {
                    return (
                      <ul className="ltn__select-availability-table-row">
                        <li className="table-data-1">
                          <strong>
                            <img
                              src={
                                record.Image &&
                                `${process.env.REACT_APP_API_ENVIROMENT}/${record.Image}`
                              }
                              alt=""
                            />
                            {record.Name}
                          </strong>
                        </li>
                        <li className="table-data-3">
                          {record?.POCName || ""}
                        </li>
                        <li className="table-data-4">
                          {record?.AssignedClaims || ""}
                        </li>
                        <li className="table-data-4">
                          {record?.Pending || ""}
                        </li>
                        <li className="table-data-6">
                          {record?.Under_Repair || ""}
                        </li>
                        <li className="table-data-6">
                          {record?.Closed || ""}
                        </li>
                        <li className="table-data-7">
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