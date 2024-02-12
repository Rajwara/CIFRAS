import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { clientSlice } from "./reducers/clientslice";
import { userReducer } from "./reducers/UserSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistUserConfig ={
  key:"user",
  storage,
}
const persistedUserReducer = persistReducer(persistUserConfig,userReducer);

export const Store = configureStore({
  reducer: combineReducers({
    // client: clientSlice,
    auth: persistedUserReducer, // <- Use userSlice for the auth key
  }),
});

export const persistor = persistStore(Store);