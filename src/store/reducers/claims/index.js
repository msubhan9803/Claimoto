import {
  GET_CLAIMS,
  CLAIMS_LIST_TABLE_DATA_CHANGE,
  CLAIMS_LIST_TABLE_FILTERING,
  SET_USERS_LIST,
  SET_POLICIES_LIST,
  SET_CLAIMS_LIST,
  SET_CLAIMS_DETAILS,
  RESET_CLAIMS_DETAILS,
  HANDLE_FIELD_CHANGE
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
  claimDetails: {
    ClaimId: 0,
    ClaimTypeId: 0,
    PolicyId: 0,
    PolicyNo: null,
    PolicyType: null,
    PolicyValidity: null,
    MakeId: 0,
    ModeIld: 0,
    RepairOption: null,
    IncidentDate: new Date("2022-03-29T19:00:00.000Z"),
    AddedByType: "",
    AddedById: null,
    InitialComments: "",
    ClaimStatusId: 0,
    CarNo: "",
    SubmissionDate: "",
    Location: "",
    Latitude: "",
    Longitude: "",
    LocationUrl: "",
    TenantId: 0,
    CreatedBy: 0,
    CreatedDate: "",
    UpdatedBy: 0,
    UpdatedDate: "",
    IsDeleted: true,
    IsActive: true,
    ClaimAccidentCarPhotos: [
      {
        CACP_Id: 0,
        ClaimId: 0,
        PolicyId: 0,
        MakeId: 0,
        ModelId: 0,
        AccidentCarPhotoId: 0,
        Path: "",
        ClaimAttachmentId: 0,
        ClaimPhotoTypeId: 0,
        TenantId: 0,
        CreatedBy: 0,
        CreatedDate: "",
        UpdatedBy: 0,
        UpdatedDate: "",
        IsDeleted: 0,
        IsActive: 0
      }
    ],
    ClaimDocuments: [
      {
        CD_Id: 0,
        ClaimId: 0,
        PolicyId: 0,
        MakeId: 0,
        ModelId: 0,
        DocumentTypeId: 0,
        Path: "",
        ClaimAttachmentId: 0,
        TenantId: 0,
        CreatedBy: 0,
        CreatedDate: "",
        UpdatedBy: 0,
        UpdatedDate: "",
        IsDeleted: 0,
        IsActive: 0
      }
    ]
  },
  usersList: [],
  policiesList: [],
  claimsList: [],
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

    case SET_CLAIMS_DETAILS: {
      return {
        ...state,
        claimDetails: action.payload
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

    default:
      return { ...state };
  }
};

export default policyReducer;
