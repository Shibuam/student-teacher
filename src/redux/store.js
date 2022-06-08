import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Reducers/UserAuth'
import TeacherData from "./Reducers/TeacherData";
import StudentData from "./Reducers/StudentData";
const store=configureStore({reducer:{
    userReducer,
    teacherReducer:TeacherData,
    studentReducer:StudentData
}})
export default store