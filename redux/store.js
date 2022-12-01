import { configureStore,  } from '@reduxjs/toolkit'
import pageSlice from './slices/pageSlice';


const store = configureStore({
    reducer: {
        pageSettings:pageSlice,
    },
    
})

export default store;