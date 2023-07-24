/** @format */

import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../Slice/AuthSlice";

const Store = configureStore({
    reducer :{
        users : Auth
    }
})

export default Store

