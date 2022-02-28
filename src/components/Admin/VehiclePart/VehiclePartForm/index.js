import React from "react";
import VehiclePartImageManage from "../VehiclePartImageManage";
import ImageGrid from "../VehiclePartImageManage/ImageGrid.js";
import { ErrorMessage } from "@hookform/error-message";

const VehiclePartForm = ({
  editable,
  vehiclePartValues,
  register,
  _changeValue,
  errors,
  _handleImagesPushChange,
  _handleImagesDeleteChange,
}) => {
  const {
    _id,
    partName,
    make,
    model,
    brand,
    year,
    oemNumber,
    artificialNumber,
    description,
    imagesArray,
  } = vehiclePartValues;

  return (
    <>
      <div className="body-content-area-inner">
        {/* <!-- BLOCK AREA START ( Vehicle Details section - 1 ) --> */}
        <div className="ltnd__block-area">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltnd__block-item mt-30">
                <div className="ltn__block-item-info ltnd__policies-details-info">
                  <div className="row">
                    <div className="col-md-6 p-2">
                      {editable ? (
                        <VehiclePartImageManage
                          imagesListLength={imagesArray.length}
                          imagesList={imagesArray}
                          editable={editable}
                          _handleImagesPushChange={_handleImagesPushChange}
                          _handleImagesDeleteChange={_handleImagesDeleteChange}
                        />
                      ) : (
                        <ImageGrid
                          imagesListLength={imagesArray.length}
                          imagesList={imagesArray}
                          editable={editable}
                          _handleImagesPushChange={_handleImagesPushChange}
                          _handleImagesDeleteChange={_handleImagesDeleteChange}
                        />
                      )}
                    </div>
                    <div className="col-md-6">
                      <div className="ltnd__title ltnd__title-2---">
                        {editable ? (
                          <>
                            <h6 className="ltnd__title-3">Part Name</h6>
                            <input
                              type="text"
                              name="partName"
                              value={partName}
                              {...register("partName")}
                              onChange={_changeValue}
                              placeholder="Enter Part Name"
                            />
                            <ErrorMessage
                              errors={errors}
                              name="partName"
                              render={({ message }) => (
                                <p style={{ color: "red", paddingTop: "20px" }}>
                                  {message}
                                </p>
                              )}
                            />
                          </>
                        ) : (
                          <h1>{partName}</h1>
                        )}

                        {!editable && <h6 className="ltnd__title-4">{_id}</h6>}
                      </div>

                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="policies-details-single-info">
                            <h6 className="ltnd__title-4">Make</h6>
                            {editable ? (
                              <>
                                <input
                                  type="text"
                                  name="make"
                                  value={make}
                                  {...register("make")}
                                  onChange={_changeValue}
                                  placeholder="Enter Make"
                                />
                                <ErrorMessage
                                  errors={errors}
                                  name="make"
                                  render={({ message }) => (
                                    <p
                                      style={{
                                        color: "red",
                                        paddingTop: "20px",
                                      }}
                                    >
                                      {message}
                                    </p>
                                  )}
                                />
                              </>
                            ) : (
                              <h6>{make}</h6>
                            )}
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="policies-details-single-info">
                            <h6 className="ltnd__title-4">Year</h6>
                            {editable ? (
                              <>
                                <input
                                  type="text"
                                  name="year"
                                  value={year}
                                  {...register("year")}
                                  onChange={_changeValue}
                                  placeholder="Enter Year"
                                />
                                <ErrorMessage
                                  errors={errors}
                                  name="year"
                                  render={({ message }) => (
                                    <p
                                      style={{
                                        color: "red",
                                        paddingTop: "20px",
                                      }}
                                    >
                                      {message}
                                    </p>
                                  )}
                                />
                              </>
                            ) : (
                              <h6>{year}</h6>
                            )}
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="policies-details-single-info">
                            <h6 className="ltnd__title-4">Model</h6>
                            {editable ? (
                              <>
                                <input
                                  type="text"
                                  name="model"
                                  value={model}
                                  {...register("model")}
                                  onChange={_changeValue}
                                  placeholder="Enter Model"
                                />
                                <ErrorMessage
                                  errors={errors}
                                  name="model"
                                  render={({ message }) => (
                                    <p
                                      style={{
                                        color: "red",
                                        paddingTop: "20px",
                                      }}
                                    >
                                      {message}
                                    </p>
                                  )}
                                />
                              </>
                            ) : (
                              <h6>{model}</h6>
                            )}
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="policies-details-single-info">
                            <h6 className="ltnd__title-4">OEM number</h6>
                            {editable ? (
                              <>
                                <input
                                  type="text"
                                  name="oemNumber"
                                  value={oemNumber}
                                  {...register("oemNumber")}
                                  onChange={_changeValue}
                                  placeholder="Enter OEM number"
                                />
                                <ErrorMessage
                                  errors={errors}
                                  name="oemNumber"
                                  render={({ message }) => (
                                    <p
                                      style={{
                                        color: "red",
                                        paddingTop: "20px",
                                      }}
                                    >
                                      {message}
                                    </p>
                                  )}
                                />
                              </>
                            ) : (
                              <h6>{oemNumber}</h6>
                            )}
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="policies-details-single-info">
                            <h6 className="ltnd__title-4">Artificial number</h6>
                            {editable ? (
                              <>
                                <input
                                  type="text"
                                  name="artificialNumber"
                                  value={artificialNumber}
                                  {...register("artificialNumber")}
                                  onChange={_changeValue}
                                  placeholder="Enter Artificial number"
                                />
                                <ErrorMessage
                                  errors={errors}
                                  name="artificialNumber"
                                  render={({ message }) => (
                                    <p
                                      style={{
                                        color: "red",
                                        paddingTop: "20px",
                                      }}
                                    >
                                      {message}
                                    </p>
                                  )}
                                />
                              </>
                            ) : (
                              <h6>{artificialNumber}</h6>
                            )}
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="policies-details-single-info">
                            <h6 className="ltnd__title-4">Brand</h6>
                            {editable ? (
                              <>
                                <input
                                  type="text"
                                  name="brand"
                                  value={brand}
                                  {...register("brand")}
                                  onChange={_changeValue}
                                  placeholder="Enter Brand"
                                />
                                <ErrorMessage
                                  errors={errors}
                                  name="brand"
                                  render={({ message }) => (
                                    <p
                                      style={{
                                        color: "red",
                                        paddingTop: "20px",
                                      }}
                                    >
                                      {message}
                                    </p>
                                  )}
                                />
                              </>
                            ) : (
                              <h6>{brand}</h6>
                            )}
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
                        {editable ? (
                          <>
                            <textarea
                              id="txtid"
                              name="description"
                              value={description}
                              {...register("description")}
                              placeholder="Description"
                              onChange={_changeValue}
                              rows="2"
                              cols="50"
                            />
                            <ErrorMessage
                              errors={errors}
                              name="description"
                              render={({ message }) => (
                                <p
                                  style={{
                                    color: "red",
                                    paddingTop: "20px",
                                  }}
                                >
                                  {message}
                                </p>
                              )}
                            />
                          </>
                        ) : (
                          <p>{description}</p>
                        )}
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

export default VehiclePartForm;
