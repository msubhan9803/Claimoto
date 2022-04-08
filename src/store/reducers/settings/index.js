import instance from "config/axios/instance";
import { SweetAlert } from "functions";
import {
  GET_ALL_TIMEZONES,
  GET_SMTP_CONFIG,
  HANDLE_SMTP_VALUES,
  NAVIGATE_SMTP_BACK,
  GET_EMAIL_CONFIG,
  NAVIGATE_EMAIL_BACK,
  HANDLE_EMAIL_VALUES,
  GET_ACCOUNT_CONFIG,
  HANDLE_ACCOUNT_VALUES,
  GET_ALL_COUNTRIES,
  HANDLE_ACCOUNT_VALUES_OUTER,
  NAVIGATE_ACCOUNT_BACK,
  RESET_ACCOUNT_STATE,
  GET_ALL_ACTIVITY_LOGS,
  GET_ALL_ACTIVITY_BY_ID,
  SET_LOGS_PAGE_INDEX
} from "../../types/settings.js";

const initialState = {
  // For SMTP
  smptValues: {
    CreatedBy: "",
    CreatedDate: "",
    Email: "",
    HostName: "",
    IsActive: "",
    IsDeleted: "",
    Password: "",
    PortNo: "",
    SMTPConfig_ID: "",
    SSL_Enabled: false,
    TenantId: "",
    TimeZone_ID: "",
    UpdatedBy: "",
    UpdatedDate: "",
    UserName: "",
    test_email:""
  },
  timezoneList: [],
  smtpNavigate: false,

  // For Email
  emailSigValues: {
    GlobalEmail_ID: 0,
    EmailCC: ["temp"],
    EmailBCC: ["temp"],
    Email_Signature: "",
  },
  emailValuesLoaded: false,
  navigateEmailSig: false,

  // For Account
  accountValues: {
    TenantLogoPath: "",
    TenantPrimaryPersonName: "",
    TenantPrimaryPersonCountry: "",
    TenantPrimaryPersonEmail: "",
    TenantPrimaryPersonPhone: "",
    TenantPrimaryPersonPassword: "",
    TenantPrimaryPersonTwoFactorPhone: "",
  },
  CurrentPassword: "",
  NewPassword: "",
  ConfirmNewPassword: "",
  UploadedImage: "",
  ImageName: "",
  fileExt: "",
  IsEditImage: false,
  countryList: [],
  navigateAccount: false,

  // For Activites
  activitesList: {
    ActivityLogs: [],
    TotalRecords: 0
  },
  currentActivityDetails: [],
  search_option: "",
  search_text: "",
  sort_type: "",
  sort_name: "",
  logs_per_page: 10,
  logs_page_index: 1,
  logs_count: 0,
  to_date: new Date(),
  from_date: new Date(),
  activity_type: "",
  search_options: [
    {
      label: "User",
      value: "user",
    },
    {
      label: "Activity",
      value: "activity",
    },
    {
      label: "Entity",
      value: "entity",
    },
  ],
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    // For SMTP & Timezone
    case GET_ALL_TIMEZONES: {
      return { ...state, timezoneList: action.payload };
    }

    case GET_SMTP_CONFIG: {
      return { ...state, smptValues: action.payload };
    }

    case NAVIGATE_SMTP_BACK: {
      return { ...state, smtpNavigate: action.payload };
    }

    case HANDLE_SMTP_VALUES: {
      return {
        ...state,
        smptValues: {
          ...state.smptValues,
          [action.payload.name]: action.payload.value,
        },
      };
    }

    // For Email Signature
    case GET_EMAIL_CONFIG: {
      return {
        ...state,
        emailSigValues: action.payload,
        emailValuesLoaded: true,
      };
    }

    case NAVIGATE_EMAIL_BACK: {
      return {
        ...state,
        navigateEmailSig: action.payload,
        emailValuesLoaded: false,
      };
    }

    case HANDLE_EMAIL_VALUES: {
      return {
        ...state,
        emailSigValues: {
          ...state.emailSigValues,
          [action.payload.name]: action.payload.value,
        },
      };
    }

    // For Account
    case GET_ACCOUNT_CONFIG: {
      let userData = action.payload.data[0];
      return {
        ...state,
        accountValues: {
          TenantLogoPath: userData?.ImageUrl || "",
          TenantPrimaryPersonName: `${userData?.UserName || ""}`,
          TenantPrimaryPersonCountry: "",
          TenantPrimaryPersonEmail: userData?.Email || "",
          TenantPrimaryPersonPhone: userData?.MobileNo || "",
          TenantPrimaryPersonPassword: "",
          TenantPrimaryPersonTwoFactorPhone: userData?.MobileNo || "",
        }
      };
    }

    case GET_ALL_COUNTRIES: {
      return { ...state, countryList: action.payload };
    }

    case HANDLE_ACCOUNT_VALUES: {
      return {
        ...state,
        accountValues: {
          ...state.accountValues,
          [action.payload.name]: action.payload.value,
        },
      };
    }

    case HANDLE_ACCOUNT_VALUES_OUTER: {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }

    case NAVIGATE_ACCOUNT_BACK: {
      return { ...state, navigateAccount: action.payload };
    }

    case RESET_ACCOUNT_STATE: {
      return {
        ...state,
        accountValues: {
          TenantLogoPath: "",
          TenantPrimaryPersonName: "",
          TenantPrimaryPersonCountry: "",
          TenantPrimaryPersonEmail: "",
          TenantPrimaryPersonPhone: "",
          TenantPrimaryPersonPassword: "",
          TenantPrimaryPersonTwoFactorPhone: "",
        },
        CurrentPassword: "",
        NewPassword: "",
        ConfirmNewPassword: "",
        UploadedImage: "",
        ImageName: "",
        fileExt: "",
        IsEditImage: false,
        countryList: [],
        navigateAccount: false,
      };
    }

    // For Activity Logs
    case GET_ALL_ACTIVITY_LOGS: {
      return { ...state, activitesList: action.payload };
    }

    case GET_ALL_ACTIVITY_BY_ID: {
      return { ...state, currentActivityDetails: action.payload };
    }

    case SET_LOGS_PAGE_INDEX: {
      return { ...state, logs_page_index: action.payload };
    }

    default:
      return { ...state };
  }
};

export default settingsReducer;
