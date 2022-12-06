import { configureStore,   } from '@reduxjs/toolkit'
import pageSlice from './slices/pageSlice';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import cartSlice from './slices/cartSlice';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, pageSlice)
const persistedReducerCart = persistReducer(persistConfig, cartSlice)


export const store = configureStore({
    reducer: {
        pageSettings: persistedReducer,
        cart:persistedReducerCart
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
    
})
export const persistor = persistStore(store)
