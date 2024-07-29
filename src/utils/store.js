import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slice'

const appstore = configureStore({
    reducer:{
        cart:cartReducer
    }
})

export default appstore;