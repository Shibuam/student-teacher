import {createSlice} from '@reduxjs/toolkit'
const userReducer =createSlice({
    name:"admin",
    initialState:{
        data:{},
        error:""
    },
    reducers:{
        loginAuthentication:(state,action)=>{
         let data  =action.payload;
    
         if(data.username==="admin"  && data.password==='password'){
             state.data=data
             state.error=""
         }
         else{
             state.error="invalid credentials"
         }

         
        }
    },
    extraReducers:{
        logout:(state,action)=>{
            state.data={}
        }
    }


})

export const {loginAuthentication}=userReducer.actions
export default userReducer.reducer 

