import {
  GET_CLAIMS,
  CLAIMS_LIST_TABLE_DATA_CHANGE,
  CLAIMS_LIST_TABLE_FILTERING,
  SET_USERS_LIST,
  SET_POLICIES_LIST,
  SET_CLAIMS_LIST,
  SET_CLAIMS_DETAILS,
  SET_ACTION_PERMISSIONS,
  RESET_CLAIMS_DETAILS,
  HANDLE_FIELD_CHANGE,
  RESET_CLAIMS_LIST_AND_PAGINATION,

  //Claim Actions
  SET_REJECTION_REASONS,
  HANDLE_CHANGE_INPUT_STATUS,
  HANDLE_CHANGE_INPUT_SCHEDULE_CALL,
  HANDLE_CHANGE_INPUT_LEAVE_MESSAGE,
  SET_USER_PROFILES_LIST,
  SET_DAY_SLOTS,
  SET_HOUR_SLOTS
} from "store/types/claims.js";

const initialState = {
  isSuccess: false,
  allClaims: [],
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
      label: "Car number",
      value: "CarNo",
    },
    {
      label: "Claim Type",
      value: "ClaimTypeName",
    },
    // {
    //   label: "Date of birth",
    //   value: "DOB",
    // },
    // {
    //   label: "Driving license validity",
    //   value: "DrivingLicenseValidity",
    // },
  ],
  claimDetails: {
    ClaimId: 0,
    ClaimTypeId: 0,
    CivilId: 0,
    Region: 0,
    Area: 0,
    PolicyId: 0,
    PolicyNo: 0,
    IdentityNo: "",
    PolicyType: null,
    PolicyValidity: null,
    MakeId: 0,
    ModeIld: 0,
    RepairOption: 0,
    IncidentDate: new Date(),
    AddedByType: "",
    AddedById: "",
    InitialComments: "",
    ClaimStatusId: 0,
    CarNo: "",
    SubmissionDate: "",
    Location: "",
    Latitude: 29.378586,
    Longitude: 47.9903414,
    LocationUrl: "",
    TenantId: 0,
    CreatedBy: 0,
    CreatedDate: "",
    UpdatedBy: 0,
    UpdatedDate: "",
    IsDeleted: true,
    IsActive: true,
    ClaimAccidentCarPhotos: [],
    ClaimDocuments: [],
    StatusName: "",
    Email: "",
    FirstName: "",
    LastName: "",
    MobileNo: ""

  },
  usersList: [],
  policiesList: [],
  claimsList: [],
  claimActionPermissions: {},



  //Claim Actions
  rejection_reasons: [],
  status_change_input_values: {
    rejection_reason: "",
    internal_comments: "",
    external_comments: "",
    loading: false
  },
  schedule_call_input_values: {
    selectedDay: "",
    selectedHourSlot:"",
    selectedSlot: "",
    loading: false
  },
  leave_message_input_values: {
    claim_message: "",
    loading: false
  },
  userProfileList: [],
  day_slots: [],
  hour_slots:[]
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

    case SET_USERS_LIST: {
      return {
        ...state,
        usersList: action.payload,
      };
    }

    case SET_POLICIES_LIST: {
      return {
        ...state,
        policiesList: action.payload,
      };
    }

    case SET_CLAIMS_LIST: {
      return {
        ...state,
        claimsList: action.payload,
      };
    }

    case SET_USER_PROFILES_LIST: {
      return {
        ...state,
        userProfileList: action.payload,
      };
    }

    case SET_CLAIMS_DETAILS: {
      return {
        ...state,
        claimDetails: action.payload
      };
    }

    case SET_ACTION_PERMISSIONS: {
      return {
        ...state,
        claimActionPermissions: action.payload
      };
    }

    case HANDLE_FIELD_CHANGE: {
      return {
        ...state,
        claimDetails: {
          ...state.claimDetails,
          [action.payload.name]: action.payload.value
        }
      };
    }

    case "LOADING": {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case RESET_CLAIMS_DETAILS: {
      return {
        ...state,
        claimDetails: initialState.claimDetails
      };
    }

    case RESET_CLAIMS_LIST_AND_PAGINATION: {
      return {
        ...state,
        allClaims: initialState.allClaims,
        filteredClaimsList: initialState.filteredClaimsList,
        claimsListTableFilterData: initialState.claimsListTableFilterData,
        claimsList: initialState.claimsList,
      };
    }




    //Claim Actions 
    case SET_REJECTION_REASONS: {
      return {
        ...state,
        rejection_reasons: action.payload
      };
    }

    case HANDLE_CHANGE_INPUT_STATUS: {
      let { name, value } = action.payload
      return {
        ...state,
        status_change_input_values: {
          ...state.status_change_input_values,
          [name]: value
        }
      };
    }


    case HANDLE_CHANGE_INPUT_SCHEDULE_CALL: {
      let { name, value } = action.payload
      return {
        ...state,
        schedule_call_input_values: {
          ...state.schedule_call_input_values,
          [name]: value
        }
      };
    }

    case HANDLE_CHANGE_INPUT_LEAVE_MESSAGE: {
      let { name, value } = action.payload
      return {
        ...state,
        leave_message_input_values: {
          ...state.leave_message_input_values,
          [name]: value
        }
      };
    }

    case SET_DAY_SLOTS: {
      return {
        ...state,
        day_slots: action.payload,
      }
    }

    case SET_HOUR_SLOTS: {
      return {
        ...state,
        hour_slots: action.payload,
      }
    }

    default:
      return { ...state };
  }
};

export default policyReducer;
