import {
  SET_PAGINATED_REQUEST,
  CHANGE_HANDLER_PROVIDER,
  PROVIDERS_LIST_TABLE_DATA_CHANGE,
  CLEAR_PROVIDER_LIST_DATA
} from "store/types/claimAgencies";

const initialState = {
  isSuccess: false,
  isLoading: true,
  allProviders: [],
  providerListTableFilterData: {
    search_option: "",
    search_text: "",
    sort_type: "asc",
    sort_name: "",
    download: "",
    importAs: "",
    providers_per_page: 10,
    providers_page_index: 1,
    providers_count: 0
  },
  search_options: [
    {
      label: "Name",
      value: "Name",
    },
    // {
    //   label: "Agency",
    //   value: "Agency",
    // },
    {
      label: "Pending",
      value: "Pending",
    },
    {
      label: "Under Assesment",
      value: "Under_Repair",
    },
    {
      label: "Closed",
      value: "Closed",
    },
  ]
};

const claimAgencies = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGINATED_REQUEST: {
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        allProviders: action.payload.list,
        providerListTableFilterData: {
          ...state.providerListTableFilterData,
          providers_count: action.payload.count
        }
      };
    }

    case PROVIDERS_LIST_TABLE_DATA_CHANGE: {
      return {
        ...state,
        providerListTableFilterData: {
          ...state.providerListTableFilterData,
          [action.payload.name]: action.payload.value,
        },
      };
    }

    case CLEAR_PROVIDER_LIST_DATA: {
      return {
        ...state,
        providerListTableFilterData: initialState.providerListTableFilterData
      };
    }

    case "LOADING": {
      return {
        ...state,
        isLoading: action.payload,
      };
    }

    default:
      return { ...state };
  }
};

export default claimAgencies;