import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    lang: 'eng',
    curr:'usd'
}

export const pageSlice = createSlice({
    name: 'pageSettings',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.lang=action.payload.lang
        },
        setCurrency: (state, action) => {
            state.curr=action.payload.curr
        }
    },
})


export const { setLanguage ,setCurrency} = pageSlice.actions

export default pageSlice.reducer