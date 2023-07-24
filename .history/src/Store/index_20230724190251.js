/** @format */

import { configureStore } from "@reduxjs/toolkit";
import Auth

const Store = configureStore({
    reducer :{
        users : Auth
    }
})

export default Store

