
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from "redux";
import userReducer from "store/reducers/auth";
import usersScreenReducer from "store/reducers/users";
import productReducer from 'store/reducers/product'


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
  usersScreenReducer:usersScreenReducer
  productReducer: productReducer,
})
 
export default persistReducer(rootPersistConfig, rootReducer)