import {
  REGISTER_POLICIES,
  GET_CLAIMS,
  GET_SINGLE_POLICIES,
  GET_POLICIES_INPUTS,
  DELETE_POLICIES,
  UPDATE_POLICIES,
  GET_CAR_COLORS,
  GET_POLICY_MAKE,
  GET_PRODUCT_NAMES,
  GET_PRODUCT_BENEFIT_COV,
  CLAIMS_LIST_TABLE_DATA_CHANGE,
  CLAIMS_LIST_TABLE_FILTERING,
} from "store/types/claims.js";
const initialState = {
  isSuccess: false,
  productBenft: {},
  allClaims: [],
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
  filteredClaimsList: [],
  claimsListTableFilterData: {
    search_option: "",
    search_text: "",
    sort_type: "",
    sort_name: "",
    download: "",
    importAs: "",
    claims_per_page: 10,
    claims_page_index: 0,
    claims_count: 0,
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
    case GET_CLAIMS: {
      return {
        ...state,
        policy: initialState.policy,
        model: [],
        prouctNames: [],
        isSuccess: false,
        isLoading: false,
        allClaims: action.payload,
      };
    }

    case CLAIMS_LIST_TABLE_DATA_CHANGE: {
      return {
        ...state,
        claimsListTableFilterData: {
          ...state.claimsListTableFilterData,
          [action.payload.name]: action.payload.value,
        },
      };
    }

    case CLAIMS_LIST_TABLE_FILTERING: {
      return {
        ...state,
        filteredClaimsList: action.payload,
      };
    }
    //  ***** //

    case REGISTER_POLICIES: {
      return {
        ...state,
        ...(state.isSuccess = true),
        allProducts: [action.payload],
        policy: initialState.policy,
      };
    }

    case "LOADING": {
      return {
        ...state,
        isLoading: action.payload,
      };
    }

    case GET_POLICIES_INPUTS: {
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

        allClaims: state.allClaims.filter(
          (data, index) => index !== action.payload
        ),
      };
    }

    case UPDATE_POLICIES: {
      return Object.assign({}, state, {
        ...(state.allClaims = state.allClaims.map((item) => {
          if (item.id === action.payload.Id) item = action.payload;
          return item;
        })),
        ...(state.isSuccess = true),
      });
    }

    default:
      return { ...state };
  }
};

export default policyReducer;
