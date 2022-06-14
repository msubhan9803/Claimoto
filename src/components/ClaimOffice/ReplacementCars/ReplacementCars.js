import React, { useEffect } from "react";
import carImg1 from "assets/img/icons/mc/png/11.png";
import carImg2 from "assets/img/icons/mc/png/12.png";
import carImg3 from "assets/img/icons/mc/png/13.png";
import Pagination from "components/Pagination/Pagination";
import Loader from "components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllowActions } from "functions";
import LoaderAnimation from "components/Loader/AnimatedLoaded";

const ReplacementCars = ({ loading, allProviders }) => {
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
                    <li className="table-data-1">Make</li>
                    <li className="table-data-2">Model</li>
                    <li className="table-data-2">Year</li>
                    <li className="table-data-2">Car no.</li>
                    <li className="table-data-2">Location</li>
                    <li className="table-data-2">Vehicle category</li>
                    <li className="table-data-2">Services</li>
                  </ul>
                  {/* {allProviders.map((record) => {
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
                        <li className="table-data-2 dot_pending">
                          <span class="dot_assign_provider"></span>
                          <b>{record?.AssignedClaims}</b>
                        </li>
                        <li className="table-data-2 dot_pending">
                          <span class="dot_assign_provider"></span>
                          <b>{record?.Pending}</b>
                        </li>
                        <li className="table-data-2 dot_under_assesment">
                            <span class="dot_assign_provider "></span>
                            <b>{record?.Under_Repair}</b>
                        </li>
                        <li className="table-data-2 dot_close">
                          <span class="dot_assign_provider "></span>
                          <b>{record?.Closed}</b>
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
                  })} */}
                <ul class="ltn__select-availability-table-row">
                    <li class="table-data-10"><img src={carImg1} alt="#" />BMW</li>
                    <li class="table-data-10">BMW X3</li>
                    <li class="table-data-2">2021</li>
                    <li class="table-data-2">AB-123</li>
                    <li class="table-data-6  ltn__secondary-color---">Amman, Jordan</li>
                    <li class="table-data-2  ltn__secondary-color---">Luxury</li>
                    <li class="table-data-2 text-primary">services</li>
                </ul>
                <ul class="ltn__select-availability-table-row">
                    <li class="table-data-10"><img src={carImg2} alt="#" />BMW</li>
                    <li class="table-data-10">BMW X3</li>
                    <li class="table-data-2">2021</li>
                    <li class="table-data-2">AB-123</li>
                    <li class="table-data-6  ltn__secondary-color---">Amman, Jordan</li>
                    <li class="table-data-2  ltn__secondary-color---">Luxury</li>
                    <li class="table-data-2 text-primary">services</li>
                </ul>
                <ul class="ltn__select-availability-table-row">
                    <li class="table-data-10"><img src={carImg3} alt="#" />BMW</li>
                    <li class="table-data-10">BMW X3</li>
                    <li class="table-data-2">2021</li>
                    <li class="table-data-2">AB-123</li>
                    <li class="table-data-6  ltn__secondary-color---">Amman, Jordan</li>
                    <li class="table-data-2  ltn__secondary-color---">Luxury</li>
                    <li class="table-data-2 text-primary">services</li>
                </ul>
                <ul class="ltn__select-availability-table-row">
                    <li class="table-data-10"><img src={carImg2} alt="#" />BMW</li>
                    <li class="table-data-10">BMW X3</li>
                    <li class="table-data-2">2021</li>
                    <li class="table-data-2">AB-123</li>
                    <li class="table-data-6  ltn__secondary-color---">Amman, Jordan</li>
                    <li class="table-data-2  ltn__secondary-color---">Luxury</li>
                    <li class="table-data-2 text-primary">services</li>
                </ul>
                <ul class="ltn__select-availability-table-row">
                    <li class="table-data-10"><img src={carImg1} alt="#" />BMW</li>
                    <li class="table-data-10">BMW X3</li>
                    <li class="table-data-2">2021</li>
                    <li class="table-data-2">AB-123</li>
                    <li class="table-data-6  ltn__secondary-color---">Amman, Jordan</li>
                    <li class="table-data-2  ltn__secondary-color---">Luxury</li>
                    <li class="table-data-2 text-primary">services</li>
                </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReplacementCars;