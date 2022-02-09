import { GET_PRODUCT_INPUTS } from 'store/types/types';
import { REGISTER_PRODUCT, GET_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from 'store/types/types'
const initialState = {
    product: {
        ProductName: "",
        ProductType: "",
        ProductDetail: "",
        AnnualPremium: '',
        Status: false,
        CreateBy: "",
        UpdatedBy: "",
        IsDeleted: "",
        IsActive: false,
        Copay: '',
        Deductibles: '',
        Gragage_Agency: '',
        Benifits: []

    },
    Products: []
};


const productReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_PRODUCT_INPUTS: {
            return {
                ...state,
                product: {
                    ...state.product,
                    [action.payload.name]: action.payload.value,
                    ...action.payload.name === "Benifits" ? action.payload.value : ""
                }

            }
        }
        case REGISTER_PRODUCT: {
            return {
                ...state,
                product: action.payload
            }
        }
        case GET_PRODUCT: {
            return { ...state, product: action.payload };
        }

        case DELETE_PRODUCT: {
            return {
                ...state,
                product: state.product.filter((data) => data.id === action.payload.id)
            }
        }
        case UPDATE_PRODUCT: {
            return Object.assign({}, state, {
                Products: state.products.map((item) => {
                    if (item.id === action.payload.id)
                        item = action.payload
                    return item
                })
            })
        }
        default:
            return { ...state };
    }
}

export default productReducer;
