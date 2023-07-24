import { createSlice } from '@reduxjs/toolkit'

const Auth = createSlice({
    name : "Auth" , 
    initialState : [
       {
        isAuthenticated : false  , 
       }
    ]
})
