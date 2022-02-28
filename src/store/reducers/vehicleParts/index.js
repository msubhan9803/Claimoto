import instance from "config/axios/instance";
import { SweetAlert } from "functions";
import {
  LOAD_VEHICLE_PARTS_LIST,
  LOAD_VEHICLE_PART,
  UPDATE_VEHICLE_PART,
  DELETE_VEHICLE_PART,
  CLEAR_VEHICLE_PART_VALUES_CHANGE,
  HANDLE_VEHICLE_PART_VALUES_CHANGE,
  ADD_VEHICLE_PART,
  VEHICLE_PARTS_LIST_TABLE_FILTERING,
  VEHICLE_PARTS_LIST_TABLE_DATA_CHANGE,
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
      "https://upload.wikimedia.org/wikipedia/commons/b/b1/Beautiful-landscape.png",
      "https://w0.peakpx.com/wallpaper/300/1023/HD-wallpaper-starry-sky-dreamscape-night-purple-sky-starry.jpg",
      "https://st.depositphotos.com/1637787/2927/i/950/depositphotos_29272913-stock-photo-brake-repair.jpg",
      "https://st.depositphotos.com/1765561/1966/i/950/depositphotos_19668591-stock-photo-brake-disc.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/b/b1/Beautiful-landscape.png",
      "https://w0.peakpx.com/wallpaper/300/1023/HD-wallpaper-starry-sky-dreamscape-night-purple-sky-starry.jpg",
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

const initialState = {
  vehiclePartList: vehiclePartListDummy,
  filteredVehiclePartList: vehiclePartListDummy,
  vehiclePartListTableFilterData: {
    search_option: "partName",
    search_text: "",
    sort_type: "asc",
    sort_name: "partName",
  },
  vehiclePartValues: {
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
  },
  parts_per_page: 10,
  parts_page_index: 1,
  parts_count: 0,
  search_options: [
    {
      label: "Part Name",
      value: "partName",
    },
    {
      label: "ID",
      value: "id",
    },
    {
      label: "Make",
      value: "make",
    },
    {
      label: "Model",
      value: "model",
    },
    {
      label: "Brand",
      value: "brand",
    },
    {
      label: "Year",
      value: "year",
    },
    {
      label: "OEM number",
      value: "oemNumber",
    },
    {
      label: "Artificial number",
      value: "artificialNumber",
    },
  ],
};

const vehiclePartsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_VEHICLE_PARTS_LIST: {
      return { ...state, vehiclePartList: action.payload };
    }

    case ADD_VEHICLE_PART: {
      let temp = [...state.vehiclePartList];
      temp.push(action.payload);
      return {
        ...state,
        vehiclePartList: temp,
      };
    }

    case VEHICLE_PARTS_LIST_TABLE_FILTERING: {
      return {
        ...state,
        filteredVehiclePartList: action.payload,
      };
    }

    case VEHICLE_PARTS_LIST_TABLE_DATA_CHANGE: {
      return {
        ...state,
        vehiclePartListTableFilterData: {
          ...state.vehiclePartListTableFilterData,
          [action.payload.name]: action.payload.value,
        },
      };
    }

    case LOAD_VEHICLE_PART: {
      return {
        ...state,
        vehiclePartValues: getVehiclePartById(state, action.payload),
      };
    }

    case UPDATE_VEHICLE_PART: {
      return {
        ...state,
        vehiclePartList: upadateVehiclePart(state, action.payload),
      };
    }

    case DELETE_VEHICLE_PART: {
      return { ...state, vehiclePartList: deleteVehiclePart(action.payload) };
    }

    case HANDLE_VEHICLE_PART_VALUES_CHANGE: {
      const { name, value } = action.payload;
      return {
        ...state,
        vehiclePartValues: {
          ...state.vehiclePartValues,
          [name]: value,
        },
      };
    }

    case CLEAR_VEHICLE_PART_VALUES_CHANGE: {
      return {
        ...state,
        vehiclePartValues: {
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
        },
      };
    }

    default:
      return { ...state };
  }
};

const getVehiclePartById = (state, vehicleId) => {
  return state.vehiclePartList.find((vehicle) => {
    if (vehicle._id == vehicleId) {
      return vehicle;
    }
  });
};

const upadateVehiclePart = (state, vehicleObj) => {
  let index = state.vehiclePartList.findIndex((v) => v._id === vehicleObj._id);
  let list = state.vehiclePartList;
  list[index] = vehicleObj;
  console.log("list: ", list);

  return list;
};

const deleteVehiclePart = (state, vehiclePartId) => {
  return state.vehiclePartList.filter(
    (vehicle) => vehicle._id !== vehiclePartId
  );
};

export default vehiclePartsReducer;
