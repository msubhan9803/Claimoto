import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import VehiclePartForm from "../../../../../components/Admin/VehiclePart/VehiclePartForm";
import {
  LoadVehiclePartValues,
  HandleVehiclePartValuesChange,
  ClearVehiclePartValuesChange,
  UpdateVehiclePart,
  AddVehiclePartValues,
} from "../../../../../store/actions/vehicleParts";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { ErrorMessage } from "@hookform/error-message";

const customStyles = {
  cancelBtn: {
    cursor: "pointer",
  },
};

const schema = Yup.object().shape({
  partName: Yup.string().required("Part Name is required"),
  make: Yup.string().required("Make is required"),
  model: Yup.string().required("Model is required"),
  brand: Yup.string().required("Brand is required"),
  year: Yup.string().required("Year is required"),
  oemNumber: Yup.string().required("Oemnumber is required"),
  artificialNumber: Yup.string().required("Artificial Number is required"),
  // description: Yup.string(),
  // imagesArray: Yup.array().min(1).required("Atleast 1 image is required"),
});

const defaultValues = {
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
};

const VehiclePartManage = (props) => {
  const initialState = {
    editable: false,
    canEdit: false,
  };
  let { vehicleId } = useParams();
  const dispatch = useDispatch();
  const { vehiclePartList, vehiclePartValues } = useSelector(
    (state) => state.vehiclePartsReducer
  );
  const [state, setState] = useState(initialState);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    setValue,
  } = useForm({
    mode: "all", 
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

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

  useEffect(() => {
    if (vehicleId) {
      dispatch(LoadVehiclePartValues(vehicleId));
      if (state.canEdit) {
        setState({
          ...state,
          editable: true,
        });
      } else {
        setState({
          ...state,
          editable: false,
        });
      }
    } else {
      dispatch(ClearVehiclePartValuesChange());
      setState({
        ...state,
        editable: true,
      });
    }
  }, [vehicleId, state.canEdit]);

  useEffect(() => {
    return () => {
      _clearState();
      // reset({});
    };
  }, []);

  const _clearState = () => {
    setState(initialState);
    dispatch(ClearVehiclePartValuesChange());
    reset();
  };

  const _handleEditable = () => setState({ ...state, canEdit: !state.canEdit });

  const _changeValue = (e) => {
    e.persist();
    let name = e.target.name;
    let value = e.target.value;
    dispatch(HandleVehiclePartValuesChange(name, value));
  };

  const _handleCancel = () => {
    if (!vehicleId) {
      navigate("/admin/vehicle_parts");
    } else {
      setState({ ...state, canEdit: !state.canEdit });
    }
  };

  const _handleImagesPushChange = (value) => {
    let list = imagesArray;
    list.push(value);
    dispatch(HandleVehiclePartValuesChange("imagesArray", list));
  };

  const _handleImagesDeleteChange = (index) => {
    let list = imagesArray.filter((item, i) => i !== index);
    dispatch(HandleVehiclePartValuesChange("imagesArray", list));
  };

  const _onSubmit = (data) => {
    if (vehicleId) {
      dispatch(UpdateVehiclePart(vehiclePartValues));
      setState(initialState)
    } else {
      dispatch(AddVehiclePartValues(vehiclePartValues));
      navigate("/admin/vehicle_parts");
    }
  };

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
            {vehicleId && !state.canEdit && (
              <div className="col-lg-3">
                <div className="ltnd__page-title-area d-flex flex-row justify-content-end">
                  <button
                    className="btn theme-btn-1 btn-round-12 mt-2"
                    onClick={_handleEditable}
                  >
                    Edit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(_onSubmit)}>
        <VehiclePartForm
          editable={state.editable}
          vehiclePartValues={vehiclePartValues}
          register={register}
          _changeValue={_changeValue}
          errors={errors}
          _handleImagesPushChange={_handleImagesPushChange}
          _handleImagesDeleteChange={_handleImagesDeleteChange}
        />

        {!vehicleId && <Footer _handleCancel={_handleCancel} />}
        {state.canEdit && <Footer _handleCancel={_handleCancel} />}
      </form>
    </>
  );
};

function Footer({ _handleCancel }) {
  return (
    <footer className="ltnd__footer-1 fixed-footer-1 mt-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltnd__footer-1-inner bg-white">
              <div className="ltnd__left btn-normal"></div>

              <div className="ltnd__right btn-normal">
                <div className="btn-wrapper">
                  <a style={customStyles.cancelBtn} onClick={_handleCancel}>
                    Cancel
                  </a>
                  <button
                    type="submit"
                    className="btn theme-btn-1 btn-round-12"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default VehiclePartManage;
