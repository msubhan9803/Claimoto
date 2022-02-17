
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
} from 'store/types/types'
const initialState = {
    policy: {
        Id: '',
        TenantId: '',
        carNumber: "",
        insuranceComp: "",
        policyType: "",
        productName:"",
        policyHolder: '',
        make: '',
        icon: "",
        policyNumber: "",
        annualPremium: "",
        dateofBirth: '',
        model: '',
        startDate: '',
        endDate: '',
        drivingLic: '',
        vehicalImg: [],
        address: '',
        rsgNumber :'',
        lisenceNumber:'',
        drivingLicValid:'',
        idCardNumber:'',
        year:'',
        color:'',
        capacity:''


    },
    findType: {},
    allPolicies: [],
    color:[],
    make:[],
    prouctNames:[],
    Editproduct: {},
    EidtDat: '',


};


const policyReducer = (state = initialState, action) => {
    switch (action.type) {

        case REGISTER_POLICIES: {
            return {
                ...state,
                allProducts: [action.payload]
            }
        }

        case GET_POLICIES: {
            return {
                ...state,
                policy: {
                    ...state.policy = null,
                    vehicalImg: []
                },
                allPolicies: action.payload,
            };
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
                    ...action.payload
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
                make:action.payload 
            };
        }

        case GET_PRODUCT_NAMES: {
            return {
                ...state,
                prouctNames:action.payload 
            };
        }

       
        case DELETE_POLICIES: {
            return {
                ...state,
                allPolicies: state.allPolicies.filter((data, index) => index !== action.payload)
            }
        }
        
        case UPDATE_POLICIES: {
            return Object.assign({}, state, {
                ...state.allPolicies = state.allPolicies.map((item) => {
                    if (item.id === action.payload.Id)
                        item = action.payload
                    return item
                })
            })
        }

        

        default:
            return { ...state };
    }
}

export default policyReducer;
