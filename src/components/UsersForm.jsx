import axios from 'axios';
import React, { useEffect } from 'react';
import {useForm} from "react-hook-form"

const UsersForm = ({getUsers,userSelected,deselectUser}) => {

const {handleSubmit,register,reset}= useForm();

useEffect(()=>{
   if(userSelected){
    reset(userSelected)
   }else{
    reset({
        email:"",
        password:"",
        first_name:"",
        last_name:"",
        birthday:"",
    })
   }
},[userSelected])


const submit =(data)=>{
    if(userSelected){
        axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`,data)  
        .then(()=>{
            getUsers()
            deselectUser()
        })
        .catch((error)=>console.log(error.response?.data)) 
    }else{
        axios.post("https://users-crud1.herokuapp.com/users/",data)
          .then(()=>getUsers())
          .catch((error)=> console.log(error.response?.data))
          console.log(data);
    }
}
    return (
        <form action="" onSubmit={handleSubmit(submit)}>
            <h2>Create an User</h2>
            <div className='input-container'>
               <label htmlFor="email"><i class="fa-solid fa-envelope"></i></label>
               <input {...register("email")}type="email" id="email"
                placeholder='Email'/>
            </div>
            <div className='input-container'>
               <label htmlFor="password"><i class="fa-solid fa-lock"></i></label>
               <input {...register("password")}type="password" id="password"
               placeholder='Password'/>
            </div>
            <div className='user-container'>
              <div className='input-container'>
                <label htmlFor="first_name"><i class="fa-solid fa-user"></i></label>
                <input {...register("first_name")}type="text" id="first_name"
                placeholder='First Name'/>
              </div>
              <div className='input-container'>
                 <label htmlFor="last_name"></label>
                 <input {...register("last_name")}type="text" id="last_name"
                 placeholder='Last Name'/>
              </div>
            </div>
            <div className='input-container'>
               <label htmlFor="birthday"><i class="fa-sharp fa-solid fa-calendar-days"></i></label>
               <input {...register("birthday")}type="date" id="birthday"
               placeholder='Birthday'/>
            </div>
            <div className='button-container-form'>
              <button>Submit</button>
            </div>
        </form>
    );
};

export default UsersForm;