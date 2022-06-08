import { createSlice } from "@reduxjs/toolkit";
const studentReducer=createSlice({
    name:"admin",
    initialState:{
        data:[],
        error:""
    },
    reducers:{
        addStudent:(state,action)=>{
            
        
            let previousData=state.data
           
            state.data=[...previousData,action.payload]

        },
        deleteStudent:(state,action)=>{
          
            let previousData=state.data
            let newState=previousData.filter((ele,index)=>{
return action.payload!==index

            })
            state.data=newState
        }
    }
})
export const {addStudent,deleteStudent}=studentReducer.actions
export default studentReducer.reducer
