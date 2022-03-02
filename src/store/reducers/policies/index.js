import {
  REGISTER_POLICIES,
  GET_POLICIES,
  GET_SINGLE_POLICIES,
  GET_POLICIES_INPUTS,
  DELETE_POLICIES,
  UPDATE_POLICIES,
  GET_CAR_COLORS,
  GET_POLICY_MAKE,
  GET_PRODUCT_NAMES,
  GET_PRODUCT_BENEFIT_COV,
  POLICIES_LIST_TABLE_DATA_CHANGE,
  POLICIES_LIST_TABLE_FILTERING,
} from "store/types/types";
const initialState = {
  isSuccess: false,
  productBenft: {},
  allPolicies: [],
  color: [],
  make: [],
  model: [],
  policy: {
    Id: "",
    TenantId: 2,
    CarNumber: "",
    PolicyType: "",
    productName: "",
    PolicyHolderName: "",
    MakeId: "",
    ModelId: "",
    PolicyNo: "",
    // AnnualPremium: "",
    DOB: "",
    ModelName: "",
    StartDate: "",
    EndDate: "",
    Address: "",
    RegistrationNumber: "",
    ChassisNumber: "",
    DrivingLicenseValidity: "",
    IdentityNo: "",
    PlateNumber: "",
    Year: "",
    ColourId: "",
    Capacity: "",
    CoPayPercentage: "",
    Deductibles: "",
    IsAgencyRepair: "",
    ProductId: "",
    Benefits: "",
    Image1: "",
    Image2: "",
    Image3: "",
    Image4: "",
    Image5: "",
    isLoading: true,
  },
  prouctNames: [],
  Editproduct: {},
  EidtDat: "",
  filteredPoliciesList: [],
  policyListTableFilterData: {
    search_option: "",
    search_text: "",
    sort_type: "",
    sort_name: "",
    download: "",
    importAs: "",
    policies_per_page: 10,
    policies_page_index: 0,
    policies_count: 0
  },
  search_options: [
    {
      label: "Policy number",
      value: "PolicyNo",
    },
    {
      label: "Policy holder",
      value: "PolicyHolderName",
    },
    {
      label: "Identity",
      value: "IdentityNo",
    },
    // {
    //   label: "Date of birth",
    //   value: "DOB",
    // },
    // {
    //   label: "Driving license validity",
    //   value: "DrivingLicenseValidity",
    // },
    {
      label: "Address",
      value: "Address",
    },
  ],
};

const policyReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_POLICIES: {
      return {
        ...state,
        ...(state.isSuccess = true),
        allProducts: [action.payload],
        policy: initialState.policy,
      };
    }

    case GET_POLICIES: {
      return {
        ...state,
        policy: initialState.policy,
        model: [],
        prouctNames: [],
        isSuccess: false,
        isLoading: false,
        allPolicies: action.payload,
      };
    }

    case "LOADING": {
      return {
        ...state,
        isLoading: action.payload,
      };
    }

    case GET_POLICIES_INPUTS: {
      // debugger
      return {
        ...state,
        policy: {
          ...state.policy,
          [action.payload.name]: action.payload.value,
        },
      };
    }
    case GET_SINGLE_POLICIES: {
      return {
        ...state,
        policy: {
          ...state.policy,
          ...action.payload,
          isLoading: false,
        },
      };
    }

    case GET_CAR_COLORS: {
      return {
        ...state,
        color: action.payload,
      };
    }

    case GET_POLICY_MAKE: {
      return {
        ...state,
        make: action.payload,
      };
    }

    case "GET_POLICY_MAKE_MODEL": {
      return {
        ...state,
        model: action.payload,
      };
    }

    case GET_PRODUCT_NAMES: {
      return {
        ...state,
        prouctNames: action.payload,
      };
    }

    case GET_PRODUCT_BENEFIT_COV: {
      return {
        ...state,
        policy: {
          ...state.policy,
          ...action.payload,
        },
      };
    }

    case DELETE_POLICIES: {
      return {
        ...state,
        isSuccess: true,

        allPolicies: state.allPolicies.filter(
          (data, index) => index !== action.payload
        ),
      };
    }

    case UPDATE_POLICIES: {
      return Object.assign({}, state, {
        ...(state.allPolicies = state.allPolicies.map((item) => {
          if (item.id === action.payload.Id) item = action.payload;
          return item;
        })),
        ...(state.isSuccess = true),
      });
    }

    case POLICIES_LIST_TABLE_DATA_CHANGE: {
      return {
        ...state,
        policyListTableFilterData: {
          ...state.policyListTableFilterData,
          [action.payload.name]: action.payload.value,
        },
      };
    }

    case POLICIES_LIST_TABLE_FILTERING: {
      return {
        ...state,
        filteredPoliciesList: action.payload,
      };
    }

    default:
      return { ...state };
  }
};

export default policyReducer;
