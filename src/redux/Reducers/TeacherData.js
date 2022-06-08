import { createSlice } from "@reduxjs/toolkit";
const teacherReducer=createSlice({
    name:"admin",
    initialState:{
        data:[],
        error:""
    },
    reducers:{
        addTeacher:(state,action)=>{
            
        
            let previousData=state.data
           
            state.data=[...previousData,action.payload]

        },
        deleteTeacher:(state,action)=>{
          
            let previousData=state.data
            let newState=previousData.filter((ele,index)=>{
return action.payload!==index

            })
            state.data=newState
        }
    }
})
export const {addTeacher,deleteTeacher}=teacherReducer.actions
export default teacherReducer.reducer
