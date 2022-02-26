import instance from 'config/axios/instance';
import { SweetAlert, successAlert } from 'functions';
import {
    LOAD_VEHICLE_PARTS_LIST,
    ADD_VEHICLE_PART,
    UPDATE_VEHICLE_PART,
    DELETE_VEHICLE_PART
} from '../../types/vehicleParts.js';

export const LoadVehiclePartsList = (vehicles) => dispatch => {
    try {
        dispatch({
            type: LOAD_VEHICLE_PARTS_LIST,
            payload: vehicles
        })
    }
    catch (err) {
        console.log("err", err)
    }
}

// Get Vehicle
// export const GetVehiclePartById = () => async dispatch => {
//     try {
//         let res = await instance.get('api/product')
//         dispatch({ type: GET_VEHICLE_PART, payload: res.data })
//     }
//     catch (err) {
//         console.log("err", err)
//     }
// }

export const AddVehiclePart = (vehicleObj) => dispatch => {
    try {
        dispatch({
            type: ADD_VEHICLE_PART,
            payload: vehicleObj
        })
        successAlert("Vehicle Part Added", "")
    }
    catch (err) {
        console.log("err", err)
    }
}

export const UpdateVehiclePart = (vehicleObj) => dispatch => {
    try {
        dispatch({
            type: UPDATE_VEHICLE_PART,
            payload: vehicleObj
        })
    }
    catch (err) {
        console.log("err", err)
    }
}

export const DeleteVehiclePart = (vehicleId) => dispatch => {
    try {
        dispatch({
            type: DELETE_VEHICLE_PART,
            payload: vehicleId
        })
    }
    catch (err) {
        console.log("err", err)
    }
}