import {
  REGISTER_PRODUCT,
  REGISTER_BENEFIT,
  GET_PRODUCTS,
  GET_PRODUCT_TYPE,
  GET_SINGLE_PRODUCT,
  GET_PRODUCT_INPUTS,
  EDIT_PRODUCT_BENEFIT,
  CANCEL_PRODUCT_BENEFIT,
  DELETE_PRODUCT,
  DELETE_PRODUCT_BENEFIT,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_BENEFIT,
  CHECK_PRODUCT_ACTIVE,
  PRODUCT_SORT,
  FILTERS_DATA_CHANGE,
  HANDLE_PRODUCT_FILTERING,
  SET_PRODUCTS_PAGE_INDEX,
} from "store/types/types";
const initialState = {
  product_Types: [],
  isSuccess: false,
  product: {
    Id: "",
    TenantId: "",
    ProductName: "",
    ProductType: "",
    ProductDetails: "",
    AnnualPremium: "",
    status: "all",
    CreateBy: "",
    UpdatedBy: "",
    IsDeleted: "",
    IsActive: true,
    CoPayPercentage: "",
    Deductibles: "",
    IsAgencyRepair: "",
    BenefitDetails: "",
    Benefit: [],
    editBenft: "",
    sort: "",
    active: "",
    isLoading: true,
    download: "",
    import: "",
  },

  findType: {},
  findName: {},
  allProducts: [],
  filteredProducts: [],
  dummy: [],
  Editproduct: {},
  EidtDat: "",
  messages: "",
  search_option: "",
  search_text: "",
  sort_type: "",
  sort_name: "",
  search_options: [
    {
      label: "Annual Premium",
      value: "AnnualPremium",
    },
    {
      label: "Created Date",
      value: "CreatedDate",
    },
    {
      label: "Product Details",
      value: "ProductDetails",
    },
    {
      label: "Product Name",
      value: "ProductName",
    },
    {
      label: "Product Type",
      value: "ProductType",
    },
    {
      label: "Status",
      value: "Status",
    },
    {
      label: "Updated Date",
      value: "UpdatedDate",
    },
    {
      label: "id",
      value: "id",
    },
  ],
  products_per_page: 6,
  products_page_index: 0,
  products_count: 0
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_BENEFIT: {
      return {
        ...state,
        ...(state.product.Benefit = [
          ...state.product.Benefit,
          {
            BenefitDetails: state.product.BenefitDetails,
          },
        ]),
        ...(state.product.BenefitDetails = ""),
      };
    }

    case PRODUCT_SORT: {
      return {
        ...state,
        allProducts: action.payload,
      };
    }

    // case CHECK_PRODUCT_ACTIVE: {
    //   let productActive = state.dummy.filter(
    //     (item) => item.Status === action.payload
    //   );
    //   return {
    //     ...state,
    //     allProducts: productActive,
    //   };
    // }
    case REGISTER_PRODUCT: {
      return {
        ...state,
        allProducts: [...state.allProducts, action.payload],
        product: initialState.product,
        messages: "",
      };
    }

    case GET_PRODUCTS: {
      //   let activeFilter = action.payload.filter((item) => item.Status === true);
      return {
        ...state,
        product: initialState.product,
        isSuccess: false,
        checkType: null,
        allProducts: action.payload,
        dummy: action.payload.data,
        messages: action.payload.message,
      };
    }

    case "LOADING": {
      return {
        ...state,
        isLoading: action.payload,
      };
    }

    case "ALERT_ALREADY_EXIT": {
      return {
        ...state,
        messages: action.payload,
      };
    }

    case GET_PRODUCT_TYPE: {
      return {
        ...state,
        product_Types: action.payload,
      };
    }

    case GET_PRODUCT_INPUTS: {
      return {
        ...state,
        product: {
          ...state.product,
          [action.payload.name]: action.payload.value,
        },
      };
    }

    case GET_SINGLE_PRODUCT: {
      // let filup = state.allProducts.find((item , index) => index == action.payload)
      return {
        ...state,
        product: {
          ...state.product,
          // ...filup
          ...action.payload,
          isLoading: false,
        },
      };
    }

    case HANDLE_PRODUCT_FILTERING: {
      return {
        ...state,
        filteredProducts: action.payload,
      };
    }

    case EDIT_PRODUCT_BENEFIT: {
      let Editproduct = state.product.Benefit.find(
        (data, index) => index == action.payload
      );
      return {
        ...state,
        product: {
          ...state.product,
          BenefitDetails: Editproduct?.BenefitDetails,
        },
      };
    }
    case DELETE_PRODUCT: {
      return {
        ...state,
        isSuccess: true,
        allProducts: state.allProducts.filter(
          (data, index) => index != action.payload
        ),
      };
    }
    case DELETE_PRODUCT_BENEFIT: {
      let benefit = state.product.Benefit;
      let new_benefit = benefit.filter(
        (data, index) => index !== action.payload
      );
      return {
        ...state,
        product: {
          ...state.product,
          Benefit: new_benefit,
        },
      };
    }
    case UPDATE_PRODUCT: {
      return Object.assign({}, state, {
        ...(state.allProducts = state.allProducts.map((item) => {
          if (item.id === action.payload.Id) item = action.payload;
          return item;
        })),
        ...(state.isSuccess = true),
      });
    }

    case UPDATE_PRODUCT_BENEFIT: {
      return Object.assign({}, state, {
        ...(state.product.Benefit = state.product.Benefit.map((item, index) =>
          index === action.payload
            ? {
                ...item,
                BenefitDetails: state.product.BenefitDetails,
              }
            : item
        )),
        product: {
          ...state.product,
          BenefitDetails: "",
        },
      });
    }

    case CANCEL_PRODUCT_BENEFIT: {
      return {
        product: {
          ...state.product,
          BenefitDetails: "",
        },
      };
    }

    case FILTERS_DATA_CHANGE: {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }

    case SET_PRODUCTS_PAGE_INDEX: {
      return {
        ...state,
        parts_page_index: action.payload,
      };
    }

    default:
      return { ...state };
  }
};

export default productReducer;