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
}) {
  const {
    AddedById,
    PolicyId,
    ClaimTypeId,
    RepairOption,
    IncidentDate,
    InitialComments,
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
                {/* <div class="col-md-4">
                  <div class="input-item">
                    <h6 class="ltnd__title-3">User *</h6>
                    <select
                      class="nice-select"
                      name="AddedById"
                      {...register("AddedById")}
                      value={AddedById}
                      onChange={handleFieldChange}
                    >
                      <option value="">--- Please Select --- </option>
                      {usersList.map((item, index) => {
                        return (
                          <option value={item.UserId} key={index}>
                            {item.FirstName + " " + item.LastName}
                          </option>
                        );
                      })}
                    </select>
                    <ErrorMessage
                      errors={errors}
                      name="AddedById"
                      render={({ message }) => (
                        <p style={{ color: "red" }}>{message}</p>
                      )}
                    />
                  </div>
                </div> */}
                <div class="col-md-4">
                  <div class="input-item">
                    <h6 class="ltnd__title-3">Policy number *</h6>
                    <select
                      class="nice-select"
                      name="PolicyId"
                      {...register("PolicyId")}
                      value={PolicyId}
                      onChange={handleFieldChange}
                    >
                      <option value="">--- Please Select --- </option>
                      {policiesList.map((item, index) => {
                        return (
                          <option value={item.Id} key={index}>
                            {item.PolicyNo}
                          </option>
                        );
                      })}
                    </select>
                    <ErrorMessage
                      errors={errors}
                      name="PolicyId"
                      render={({ message }) => (
                        <p style={{ color: "red" }}>{message}</p>
                      )}
                    />
                  </div>
                </div>
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
                      <option value={1}>Repair By Agency </option>
                      <option value={2}>Repair By Garage </option>
                      <option value={3}>Repair By Agency/Garage </option>
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
                <div class="col-md-12">
                  <div class="input-item">
                    <h6 class="ltnd__title-3">Comments *</h6>
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
