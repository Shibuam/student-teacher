import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";
import { loginAuthentication } from '../redux/Reducers/UserAuth'
export const Login = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const navigate = useNavigate()
 let data= useSelector((state)=>state.userReducer)
let error=data.error

 useEffect(()=>{
  if(Object.keys(data.data).length>0){
    navigate('/dashboard')
  }
  else{
    console.log(data)
    
  }

 },[data])
 const [user,setUser]=useState('')
  const dispatch = useDispatch()
  const loginHandler = (e) => {
    
    dispatch(loginAuthentication(e))
   
   

  }

  return (
    <div>
   
      <form onSubmit={handleSubmit(loginHandler)}>
        <h1>Login Here</h1>
     {error && <p>error</p>}
      <input placeholder='username'
       {...register("username")}
       type='text'/><br/>
      <input placeholder='password'
      {...register("password")}
      type='password' /><br/>
      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
