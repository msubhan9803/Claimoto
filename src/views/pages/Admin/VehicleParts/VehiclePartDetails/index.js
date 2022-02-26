import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import VehicleDetailImages from "../../../../../components/Admin/VehiclePart/VehicleDetailImages";

const Index = (props) => {
  let { vehicleId } = useParams();
  const dispatch = useDispatch();
  const { vehiclePartList } = useSelector((state) => state.vehiclePartsReducer);

  const [state, setState] = useState({
    _id: "",
    partName: "",
    make: "",
    model: "",
    brand: "",
    year: "",
    oemNumber: "",
    artificialNumber: "",
    description: "",
    imagesArray: [],
  });

  useEffect(() => {
    if (vehicleId) {
      let currenctVehicle = vehiclePartList.find((v) => v._id == vehicleId);
      setState(currenctVehicle);
    }
  }, [vehicleId]);

  return (
    <>
      <div className="ltnd__header-area ltnd__header-area-2 section-bg-2---">
        <div className="ltnd__header-middle-area mt-30">
          <div className="row">
            <div className="col-lg-9">
              <div className="ltnd__page-title-area">
                <p className="page-back-btn">
                  <Link to={"../vehicle_parts"}>
                    <i className="icon-left-arrow-1"></i> Back
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="body-content-area-inner">
        {/* <!-- BLOCK AREA START ( Vehicle Details section - 1 ) --> */}
        <div className="ltnd__block-area">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltnd__block-item mt-30">
                <div className="ltn__block-item-info ltnd__policies-details-info">
                  <div className="row">
                    <div className="col-lg-6">
                      <VehicleDetailImages
                        imagesListLength={state.imagesArray.length}
                        imagesList={state.imagesArray}
                      />
                    </div>
                    <div className="col-lg-6">
                      <div className="ltnd__title ltnd__title-2---">
                        <h1>{state.partName}</h1>
                        <h6 className="ltnd__title-4">{state._id}</h6>
                      </div>
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="policies-details-single-info">
                            <h6 className="ltnd__title-4">Make</h6>
                            <h6>{state.make}</h6>
                          </div>
                          <div className="policies-details-single-info">
                            <h6 className="ltnd__title-4">Year</h6>
                            <h6>{state.year}</h6>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="policies-details-single-info">
                            <h6 className="ltnd__title-4">Model</h6>
                            <h6>{state.model}</h6>
                          </div>
                          <div className="policies-details-single-info">
                            <h6 className="ltnd__title-4">OEM number</h6>
                            <h6>{state.oemNumber}</h6>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="policies-details-single-info">
                            <h6 className="ltnd__title-4">Artificial number</h6>
                            <h6>{state.artificialNumber}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--  --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- BLOCK AREA END --> */}

        {/* <!-- BLOCK AREA START ( Product Details section - 2 ) --> */}
        <div className="ltnd__block-area">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltnd__block-item mt-30">
                <div className="ltnd__title ltnd__title-2">
                  <h4>Description</h4>
                </div>
                <div className="ltn__block-item-info">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="garage-details-single-item mb-40">
                        <p>{state.description}</p>
                      </div>
                    </div>
                  </div>
                  {/* <!--  --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- BLOCK AREA END --> */}
      </div>
    </>
  );
};

export default Index;
