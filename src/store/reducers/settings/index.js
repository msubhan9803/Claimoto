import instance from "config/axios/instance";
import { SweetAlert } from "functions";
import {
  GET_ALL_TIMEZONES,
  GET_SMTP_CONFIG,
  HANDLE_SMTP_VALUES,
  NAVIGATE_SMTP_BACK,
  GET_EMAIL_CONFIG,
  NAVIGATE_EMAIL_BACK,
  HANDLE_EMAIL_VALUES
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
  navigateEmailSig: false
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
      return { ...state, emailSigValues: action.payload, emailValuesLoaded: true };
    }

    case NAVIGATE_EMAIL_BACK: {
      return { ...state, navigateEmailSig: action.payload, emailValuesLoaded: false };
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

    default:
      return { ...state };
  }
};

export default settingsReducer;
