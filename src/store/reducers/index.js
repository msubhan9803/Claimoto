
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
import rulesScreenReducer from './rules';

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
  usersScreenReducer: usersScreenReducer,
  providersScreenReducer: providersScreenReducer,
  addProviderScreenReducer: addProviderScreenReducer,
  productReducer: productReducer,
  policyReducer: policyReducer,
  vehiclePartsReducer: vehiclePartsReducer,
  settingsReducer: settingsReducer,
  rulesScreenReducer:rulesScreenReducer
})

export default persistReducer(rootPersistConfig, rootReducer)