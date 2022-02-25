
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
} from 'store/types/types'
const initialState = {
    isSuccess: false,

    policy: {
        Id: '',
        TenantId: '',
        CarNumber: "",
        PolicyType: "",
        productName: "",
        PolicyHolderName: '',
        MakeId: '',
        ModelId: '',
        PolicyNo: "",
        AnnualPremium: "",
        DOB: '',
        ModelName: '',
        StartDate: '',
        EndDate: '',
        Address: '',
        RegistrationNumber: '',
        ChassisNumber: '',
        DrivingLicenseValidity: '',
        IdentityNo: '',
        PlateNumber: '',
        Year: '',
        ColourId: '',
        Capacity: '',
        CoPayPercentage: '',
        Deductibles: '',
        IsAgencyRepair: '',
        ProductId: '',
        Benefits: '',
        Image1: '',
        Image2: '',
        Image3: '',
        Image4: '',
        Image5: '',
        isLoading : true  ,



    },
    productBenft: {},
    allPolicies: [],
    color: [],
    make: [],
    model: [],
    prouctNames: [],
    Editproduct: {},
    EidtDat: '',



};


const policyReducer = (state = initialState, action) => {
    switch (action.type) {

        case REGISTER_POLICIES: {
            return {
                ...state,
                allProducts: [action.payload],
                policy : initialState.policy
            }
        }

        case GET_POLICIES: {
            return {
                ...state,
                policy: initialState.policy,
                isSuccess: false,
                allPolicies: action.payload,
            };
        }

        case "LOADING":{
            return {
                ...state , 
                isLoading : action.payload
            }
        }


        case GET_POLICIES_INPUTS: {
            
            return {
                ...state,
                policy: {
                    ...state.policy,
                    [action.payload.name]: action.payload.value,
                }

            }
        }
        case GET_SINGLE_POLICIES: {
            return {
                ...state,
                policy: {
                    ...state.policy,
                    ...action.payload,
                    isLoading : false

                }
            };
        }

        case GET_CAR_COLORS: {
            return {
                ...state,
                color: action.payload
            };
        }

        
        
        case GET_POLICY_MAKE: {
            return {
                ...state,
                make: action.payload
            };
        }

          
        case "GET_POLICY_MAKE_MODEL": {
            return {
                ...state,
                model: action.payload
            };
        }

        case GET_PRODUCT_NAMES: {
            return {
                ...state,
                prouctNames: action.payload
            };
        }

        case GET_PRODUCT_BENEFIT_COV: {
            
            return {
                ...state,
                policy: {
                    ...state.policy,
                    ...action.payload
                }
            };
        }

        case DELETE_POLICIES: {
            return {
                ...state,
              ...state.isSuccess = true ,
                allPolicies: state.allPolicies.filter((data, index) => index !== action.payload)
            }
        }

        case UPDATE_POLICIES: {
            return Object.assign({}, state, {
                ...state.allPolicies = state.allPolicies.map((item) => {
                    if (item.id === action.payload.Id)
                        item = action.payload
                    return item
                }),
              ...state.isSuccess = true 
                
            })
        }



        default:
            return { ...state };
    }
}

export default policyReducer;
