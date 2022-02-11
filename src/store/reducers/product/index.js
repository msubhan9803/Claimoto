
import {
    REGISTER_PRODUCT,
    REGISTER_BENEFIT,
    GET_PRODUCTS,
    GET_PRODUCT_TYPE,
    GET_SINGLE_PRODUCT,
    GET_PRODUCT_INPUTS,
    // EDIT_PRODUCT_TYPE,
    // EDIT_PRODUCT,
    DELETE_PRODUCT,
    DELETE_PRODUCT_TYPE,
    UPDATE_PRODUCT,
    UPDATE_PRODUCT_TYPE,
} from 'store/types/types'
const initialState = {
    product_Types: [],
    product: {
        ProductName: "",
        ProductType: "",
        ProductDetails: "",
        AnnualPremium: '',
        Status: false,
        CreateBy: "",
        UpdatedBy: "",
        IsDeleted: "",
        IsActive: false,
        CoPayPercentage: '',
        Deductibles: '',
        IsAgencyRepair: '',
        BenefitDetails: '',
        Benefit: []

    },
    singlProduct: [],
    allProducts: [],

};


const productReducer = (state = initialState, action) => {
    switch (action.type) {


        case REGISTER_BENEFIT: {
            return {
                ...state,
                ...state.product.Benefit = [...state.product.Benefit, {BenefitDetails : state.product.BenefitDetails  , Status : true }],
                ...state.product.BenefitDetails = ""
            }
        }
        case REGISTER_PRODUCT: {
            return {
                ...state,
                allProducts: [ action.payload]
            }
        }

        case GET_PRODUCTS: {
            return { ...state, allProducts: action.payload };
        }

        case GET_PRODUCT_TYPE: {
            return {
                ...state,
                product_Types: action.payload
            }
        }

        case GET_PRODUCT_INPUTS: {
            return {
                ...state,
                product: {
                    ...state.product,
                    [action.payload.name]: action.payload.value,
                }

            }
        }
        case GET_SINGLE_PRODUCT: {
            return { ...state,
                 singlProduct: action.payload 
                };
        }

        // case EDIT_PRODUCT: {
        //     return {
        //         ...state,
        //         product: state.product.filter((data) => data.id !== action.payload.id)
        //     }
        // }


        // case EDIT_PRODUCT_TYPE: {
        //     return {
        //         ...state,
        //         product: state.product.filter((data) => data.id !== action.payload.id)
        //     }
        // }

        case DELETE_PRODUCT: {
            return {
                ...state,
                product: state.singleProduct.Benifits.filter((data) => data.id !== action.payload.id)
            }
        }
        case DELETE_PRODUCT_TYPE: {
            return {
                ...state,
                product: state.singleProduct.Benifits.filter((data) => data.id !== action.payload.id)
            }
        }
        case UPDATE_PRODUCT: {
            return Object.assign({}, state, {
                ...state.product.Benifits = state.product.Benifits.map((item) => {
                    if (item === action.payload)
                        item = action.payload
                    return item
                })
            })
        }

        case UPDATE_PRODUCT_TYPE: {
            return {
                ...state,
                product: state.singleProduct.Benifits.filter((data) => {
                    if (data.id === action.payload.id) {

                    }
                })
            }
        }


        default:
            return { ...state };
    }
}

export default productReducer;
