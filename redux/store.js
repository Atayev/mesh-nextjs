import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./slices/pageSlice";
import cartSlice from "./slices/cartSlice";
import storage from "redux-persist/lib/storage";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, pageSlice);
const persistedReducerCart = persistReducer(persistConfig, cartSlice);

export const store = configureStore({
  reducer: {
    pageSettings: persistedReducer,
    cart: persistedReducerCart,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
