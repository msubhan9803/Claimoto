import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import Select from "react-select";

export default function InitiateCustomerInformation({
  state,
  usersList,
  register,
  errors,
  handleFieldChange,
  policiesList,
  claimsList,
  control,
  HandleFieldChangeAction,
  userProfileList,
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
            <h4>Customer information</h4>
          </div>

          <div class="ltn__block-item-info">
            <form id="#" action="#" method="#" class="ltnd__form-1">
              <div class="row">
                <div class="col-md-4">
                  <div class="input-item">
                    <h6 class="ltnd__title-3">Civil ID *</h6>
                    {/* <select
                      class="nice-select"
                      name="AddedById"
                      {...register("AddedById")}
                      value={AddedById}
                      onChange={handleFieldChange}
                    >
                      <option value="">--- Please Select --- </option>
                      {userProfileList.map((item, index) => {
                        return (
                          <option value={item.UserId} key={index}>
                            {item.UserId}
                          </option>
                        );
                      })}
                    </select> */}
                    <Select
                      class="nice-select"
                      name="AddedById"
                      value={AddedById}
                      {...register("AddedById")}
                      onChange={handleFieldChange}
                      options={userProfileList.map((item) => ({
                        value: item.UserId,
                        label: item.UserId,
                      }))}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="AddedById"
                      render={({ message }) => (
                        <p style={{ color: "red" }}>{message}</p>
                      )}
                    />
                  </div>
                </div>
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
