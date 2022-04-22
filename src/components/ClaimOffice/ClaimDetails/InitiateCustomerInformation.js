import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import Select from "react-select";
import AsyncSelect from "react-select/async";

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
  handleUserIdSearch,
  selectedUserValue,
  handleCivilChange,
  handleCivilInputChange,
  handlePolicyIdChange,
  selectedPolicyValue
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
                    <AsyncSelect
                      cacheOptions
                      defaultOptions
                      value={selectedUserValue}
                      loadOptions={handleUserIdSearch}
                      onInputChange={handleCivilInputChange}
                      onChange={handleCivilChange}
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
                    {/* <select
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
                    </select> */}
                    <Select
                      class="nice-select"
                      name="PolicyId"
                      value={selectedPolicyValue}
                      {...register("PolicyId")}
                      onChange={handlePolicyIdChange}
                      options={policiesList.map((item) => ({
                        value: item.Id,
                        label: item.PolicyNo,
                      }))}
                    />
                    {policiesList && policiesList.length > 0 && (
                      <ErrorMessage
                        errors={errors}
                        name="PolicyId"
                        render={({ message }) => (
                          <p style={{ color: "red" }}>{message}</p>
                        )}
                      />
                    )}
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
