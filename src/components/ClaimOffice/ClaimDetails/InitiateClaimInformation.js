import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";

export default function InitiateClaimInformation({
  state,
  usersList,
  register,
  errors,
  handleFieldChange,
  policiesList,
  claimsList,
  control,
  HandleFieldChangeAction,
  cities,
  areas,
  repairOptions,
}) {

  console.log("repairOptions: ", repairOptions)
  const {
    AddedById,
    PolicyId,
    ClaimTypeId,
    RepairOption,
    IncidentDate,
    InitialComments,
    Region,
    Area,
  } = state;
  const dispatch = useDispatch();

  const handleDateChangeRaw = function (e) {
    e.preventDefault();
  };

  return (
    <div class="row">
      <div class="col-lg-12">
        <div class="ltnd__block-item mt-30">
          <div class="ltnd__title ltnd__title-2">
            <h4>Claim information</h4>
          </div>

          <div class="ltn__block-item-info">
            <form id="#" action="#" method="#" class="ltnd__form-1">
              <div class="row">
                <div class="col-md-4">
                  <div class="input-item">
                    <h6 class="ltnd__title-3">Claim Type *</h6>
                    <select
                      class="nice-select"
                      name="ClaimTypeId"
                      {...register("ClaimTypeId")}
                      value={ClaimTypeId}
                      onChange={handleFieldChange}
                    >
                      <option value="">--- Please Select --- </option>
                      {claimsList.map((item, index) => {
                        return (
                          <option value={item.CT_Id} key={index}>
                            {item.ClaimName}
                          </option>
                        );
                      })}
                    </select>
                    <ErrorMessage
                      errors={errors}
                      name="ClaimTypeId"
                      render={({ message }) => (
                        <p style={{ color: "red" }}>{message}</p>
                      )}
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-item">
                    <h6 class="ltnd__title-3">Repair option *</h6>
                    <select
                      class="nice-select"
                      value={RepairOption}
                      name="RepairOption"
                      {...register("RepairOption")}
                      onChange={handleFieldChange}
                    >
                      <option value="">--- Please Select ---</option>
                      {repairOptions?.map((option, index) => (
                        <option key={index} value={option.value}>
                          {option.title}
                        </option>
                      )) || []}
                    </select>
                    <ErrorMessage
                      errors={errors}
                      name="RepairOption"
                      render={({ message }) => (
                        <p style={{ color: "red" }}>{message}</p>
                      )}
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-item">
                    <h6 class="ltnd__title-3">Incident date *</h6>
                    <Controller
                      control={control}
                      name="IncidentDate"
                      value={IncidentDate}
                      render={({ field }) => (
                        <DatePicker
                          placeholderText="DD-MM-YYYY"
                          dateFormat="dd/MM/yyyy"
                          maxDate={new Date()}
                          onChangeRaw={handleDateChangeRaw}
                          onChange={(date) => {
                            return (
                              field.onChange(date),
                              dispatch(
                                HandleFieldChangeAction("IncidentDate", date)
                              )
                            );
                          }}
                          selected={IncidentDate}
                        />
                      )}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="IncidentDate"
                      render={({ message }) => (
                        <p style={{ color: "red" }}>{message}</p>
                      )}
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-item">
                    <h6 class="ltnd__title-3">Region *</h6>
                    <select
                      class="nice-select"
                      value={Region}
                      name="Region"
                      {...register("Region")}
                      onChange={handleFieldChange}
                    >
                      <option value="">Select Region</option>
                      {cities?.map((city) => (
                        <option key={city.Id} value={city.Id}>
                          {city.Name}
                        </option>
                      )) || []}
                    </select>
                    <ErrorMessage
                      errors={errors}
                      name="Region"
                      render={({ message }) => (
                        <p style={{ color: "red" }}>{message}</p>
                      )}
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-item">
                    <h6 class="ltnd__title-3">Area *</h6>
                    <select
                      class="nice-select"
                      value={Area}
                      name="Area"
                      {...register("Area")}
                      onChange={handleFieldChange}
                    >
                      <option disabled="" value="">
                        Select Area
                      </option>
                      {areas?.map((area) => (
                        <option key={area.Id} value={area.Id}>
                          {area.Name}
                        </option>
                      )) || ""}
                    </select>
                    <ErrorMessage
                      errors={errors}
                      name="Area"
                      render={({ message }) => (
                        <p style={{ color: "red" }}>{message}</p>
                      )}
                    />
                  </div>
                </div>
                <div class="col-md-12 mt-4">
                  <div class="input-item">
                    <h6 class="ltnd__title-3">How it happened *</h6>
                    <textarea
                      row="2"
                      type="text"
                      name="InitialComments"
                      value={InitialComments}
                      {...register("InitialComments")}
                      onChange={handleFieldChange}
                      placeholder="Type your comment..."
                    />
                    <ErrorMessage
                      errors={errors}
                      name="InitialComments"
                      render={({ message }) => (
                        <p style={{ color: "red" }}>{message}</p>
                      )}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
