import instance from "config/axios/instance";
import { SweetAlert, successAlert } from "functions";
import {
  LOAD_VEHICLE_PARTS_LIST,
  LOAD_VEHICLE_PART,
  UPDATE_VEHICLE_PART,
  DELETE_VEHICLE_PART,
  HANDLE_VEHICLE_PART_VALUES_CHANGE,
  CLEAR_VEHICLE_PART_VALUES_CHANGE,
  ADD_VEHICLE_PART,
  VEHICLE_PARTS_LIST_LOADING
} from "../../types/vehicleParts.js";

let vehiclePartListDummy = [
  {
    _id: "15869",
    partName: "Break pads",
    make: "BMW",
    model: "BMW X3",
    brand: "BMW",
    year: "2021",
    oemNumber: "E00912",
    artificialNumber: "A276-0192",
    description:
      "Brake pads are a vital component of every disc brake braking system used on most of today’s cars, commercial vehicles and other modes of transportation. The brake pad is made of a complex compound of materials, bonded to a steel backing plate, designed to stop your vehicle using friction. When you apply pressure to the brake pedal you squeeze the pads against the brake discs to slow your vehicle and ultimately bring it to a complete stop. Read More",
    imagesArray: [
      "https://image.shutterstock.com/image-photo/car-brake-part-garage-260nw-577482634.jpg",
      "https://image.shutterstock.com/image-photo/car-brake-part-garage-260nw-577482634.jpg",
      "https://image.shutterstock.com/image-photo/car-brake-part-garage-260nw-577482634.jpg",
      "https://image.shutterstock.com/image-photo/car-brake-part-garage-260nw-577482634.jpg",
    ],
  },
  {
    _id: "15870",
    partName: "Headlight",
    make: "TOYOTA",
    model: "Toyota Altis",
    brand: "TOYOTA",
    year: "2022",
    oemNumber: "T00912",
    artificialNumber: "TY76-0111",
    description:
      "Brake pads are a vital component of every disc brake braking system used on most of today’s cars, commercial vehicles and other modes of transportation. The brake pad is made of a complex compound of materials, bonded to a steel backing plate, designed to stop your vehicle using friction. When you apply pressure to the brake pedal you squeeze the pads against the brake discs to slow your vehicle and ultimately bring it to a complete stop. Read More",
    imagesArray: [
      "https://image.shutterstock.com/image-photo/car-brake-part-garage-260nw-577482634.jpg",
      "https://image.shutterstock.com/image-photo/car-brake-part-garage-260nw-577482634.jpg",
      "https://image.shutterstock.com/image-photo/car-brake-part-garage-260nw-577482634.jpg",
    ],
  },
  {
    _id: "15871",
    partName: "Navigation System",
    make: "Honda",
    model: "Honda Accord",
    brand: "Honda",
    year: "2020",
    oemNumber: "B01912",
    artificialNumber: "BM76-0192",
    description:
      "Brake pads are a vital component of every disc brake braking system used on most of today’s cars, commercial vehicles and other modes of transportation. The brake pad is made of a complex compound of materials, bonded to a steel backing plate, designed to stop your vehicle using friction. When you apply pressure to the brake pedal you squeeze the pads against the brake discs to slow your vehicle and ultimately bring it to a complete stop. Read More",
    imagesArray: [
      "https://image.shutterstock.com/image-photo/car-brake-part-garage-260nw-577482634.jpg",
      "https://image.shutterstock.com/image-photo/car-brake-part-garage-260nw-577482634.jpg",
      "https://image.shutterstock.com/image-photo/car-brake-part-garage-260nw-577482634.jpg",
    ],
  },
];

export const LoadVehiclePartsList =
  ({
    parts_per_page,
    parts_page_index,
    search_text,
    search_option,
    sort_name,
    sort_type,
  }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: LOAD_VEHICLE_PARTS_LIST,
        payload: vehiclePartListDummy,
      });
      // dispatch({
      //   type: VEHICLE_PARTS_LIST_LOADING,
      //   payload: true,
      // });
      // let { data } = await instance.get(
      //   `api/UserProfile/Paging?PageIndex=${parts_page_index}&PageSize=${parts_per_page}&SearchText=${search_text}&SearchOption=${search_option}&SortType=${sort_type}&SortName=${sort_name}`
      // );
      // // let { data } = await instance.get(`api/UserProfile`);
      // dispatch({
      //   type: LOAD_VEHICLE_PARTS_LIST,
      //   payload: {
      //     users: data?.ModelUserProfileWithTotalRecords || [],
      //     counts: data?.TotalRecord || 0,
      //   },
      //   // payload: { users: data || [], counts: data?.lenght || 0 }
      // });
    } catch (err) {
      console.log("err", err);
    }
  };

export const AddVehiclePartValues = (vehicleObj) => (dispatch) => {
  try {
    let tmep = vehicleObj;
    tmep._id = parseInt(randomBetween(1, 100)).toString();
    dispatch({
      type: ADD_VEHICLE_PART,
      payload: tmep,
    });
    successAlert("Vehicle Part Added", "");
  } catch (err) {
    console.log("err", err);
  }
};

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

export const LoadVehiclePartValues = (vehicleId) => (dispatch) => {
  try {
    dispatch({
      type: LOAD_VEHICLE_PART,
      payload: vehicleId,
    });
    // successAlert("Vehicle Part Added", "");
  } catch (err) {
    console.log("err", err);
  }
};

export const HandleVehiclePartValuesChange = (name, value) => (dispatch) => {
  try {
    dispatch({
      type: HANDLE_VEHICLE_PART_VALUES_CHANGE,
      payload: { name, value },
    });
  } catch (err) {
    console.log("err", err);
  }
};

export const ClearVehiclePartValuesChange = () => (dispatch) => {
  try {
    dispatch({
      type: CLEAR_VEHICLE_PART_VALUES_CHANGE,
    });
  } catch (err) {
    console.log("err", err);
  }
};

export const UpdateVehiclePart = (vehicleObj) => (dispatch) => {
  try {
    dispatch({
      type: UPDATE_VEHICLE_PART,
      payload: vehicleObj,
    });
    successAlert("Vehicle Part Updated", "");
  } catch (err) {
    console.log("err", err);
  }
};

export const DeleteVehiclePart = (vehicleId) => (dispatch) => {
  try {
    dispatch({
      type: DELETE_VEHICLE_PART,
      payload: vehicleId,
    });
  } catch (err) {
    console.log("err", err);
  }
};

function randomBetween(min, max) {
  if (min < 0) {
    return min + Math.random() * (Math.abs(min) + max);
  } else {
    return min + Math.random() * max;
  }
}
