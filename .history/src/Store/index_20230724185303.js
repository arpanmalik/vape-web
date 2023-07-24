/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { Auth } from "../Slice/AuthSlice";

const Store = configureStore({
    reducer :{
        users : Auth.reducer
    }
})

export default Store

