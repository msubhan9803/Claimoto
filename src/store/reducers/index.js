
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from "redux";
import authReducer from "store/reducers/auth";
import usersScreenReducer from "store/reducers/users";
import providersScreenReducer from "store/reducers/providers";
import addProviderScreenReducer from "store/reducers/providers/add_provider";
import productReducer from 'store/reducers/product'
import policyReducer from 'store/reducers/policies'
import vehiclePartsReducer from 'store/reducers/vehicleParts'
import settingsReducer from 'store/reducers/settings'
import rulesScreenReducer from 'store/reducers/rules';
import addRuleScreenReducer from 'store/reducers/rules/add_rule';
import providerServicesScreenReducer from 'store/reducers/providers/provider_service';
import providerServicesPriceScreenReducer from 'store/reducers/providers/service_prices';
import taskListScreenReducer from 'store/reducers/taskList/index';
import claimsScreenReducer from 'store/reducers/claims/index';
import claimAgenciesScreenReducer from 'store/reducers/claimAgencies';
import claimGaragesScreenReducer from 'store/reducers/claimGarages';
import claimSurveyorsScreenReducer from 'store/reducers/claimSurveyors';
import claimReplacementCarScreenReducer from 'store/reducers/claimReplacementCar';
import claimListsScreenReducer from 'store/reducers/claimLists';
import scheduleCalls from 'store/reducers/scheduleCalls/schedule_calls';
import assignProviderScreenReducer from 'store/reducers/claims/assign';
import forgetPasswordReducer from 'store/reducers/auth/forget_password';
import invoiceScreenReducer from 'store/reducers/invoice';
import notificationsScreenReducer from 'store/reducers/notifications';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
}

const authPersistConfig = {
  key: 'user_reducer',
  storage: storage,
}

const rootReducer = combineReducers({
  authReducer: persistReducer(authPersistConfig, authReducer),
  forgetPasswordReducer:forgetPasswordReducer,
  usersScreenReducer: usersScreenReducer,
  providersScreenReducer: providersScreenReducer,
  addProviderScreenReducer: addProviderScreenReducer,
  productReducer: productReducer,
  policyReducer: policyReducer,
  vehiclePartsReducer: vehiclePartsReducer,
  settingsReducer: settingsReducer,
  rulesScreenReducer:rulesScreenReducer,
  addRuleScreenReducer:addRuleScreenReducer,
  providerServicesScreenReducer:providerServicesScreenReducer,
  providerServicesPriceScreenReducer:providerServicesPriceScreenReducer,
  taskListScreenReducer:taskListScreenReducer,
  claimsReducer: claimsScreenReducer,
  claimAgenciesReducer: claimAgenciesScreenReducer,
  claimGaragesReducer: claimGaragesScreenReducer,
  claimSurveyorsReducer: claimSurveyorsScreenReducer,
  claimReplacementCarReducer: claimReplacementCarScreenReducer,
  claimListsReducer: claimListsScreenReducer,
  assignProviderScreenReducer:assignProviderScreenReducer,
  scheduleCalls:scheduleCalls,
  invoiceScreenReducer: invoiceScreenReducer,
  notificationsScreenReducer:notificationsScreenReducer
})

export default persistReducer(rootPersistConfig, rootReducer)