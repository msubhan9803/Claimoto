import {
  GET_CLAIM_LIST_SWITCHED,
  CLAIMS_LIST_SWITCHED_TABLE_DATA_CHANGE,
  CLAIMS_LIST_SWITCHED_TABLE_FILTERING,
} from "store/types/types";
const initialState = {
  isSuccess: false,
  allPolicies: [],
  prouctNames: [],
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
      label: "Car number",
      value: "CarNo",
    },
    {
      label: "Claim Type",
      value: "ClaimType",
    }
  ],
};

const claimListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLAIM_LIST_SWITCHED: {
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

    case CLAIMS_LIST_SWITCHED_TABLE_DATA_CHANGE: {
      return {
        ...state,
        policyListTableFilterData: {
          ...state.policyListTableFilterData,
          [action.payload.name]: action.payload.value,
        },
      };
    }

    case CLAIMS_LIST_SWITCHED_TABLE_FILTERING: {
      return {
        ...state,
        filteredPoliciesList: action.payload,
      };
    }

    default:
      return { ...state };
  }
};

export default claimListReducer;
