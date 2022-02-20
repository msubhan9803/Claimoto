
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from "redux";
import userReducer from "store/reducers/auth";
import usersScreenReducer from "store/reducers/users";
import providersScreenReducer from "store/reducers/providers";
import productReducer from 'store/reducers/product'
import policyReducer from 'store/reducers/policies'

const rootPersistConfig = {
  key: 'root',
  storage: storage,
}
 
const authPersistConfig = {
  key: 'user_reducer',
  storage: storage,
}
 
const rootReducer = combineReducers({
  userReducer: persistReducer(authPersistConfig, userReducer),
  usersScreenReducer:usersScreenReducer,
  providersScreenReducer:providersScreenReducer,
  productReducer: productReducer,
  policyReducer: policyReducer,
})
 
export default persistReducer(rootPersistConfig, rootReducer)