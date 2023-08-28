import React, { useState } from 'react';
import InputFields from '../login/InputFields';
import { useCreateUserMutation } from '../../redux/apiCalls/apiSlice';
import { AdminToken } from '../../redux/utils/adminAuth';

const CreateUsers = () => {
    const [createUser] =useCreateUserMutation();
    const token = AdminToken();
  
    const [user,setUser]=useState({
        userName:'',
        password:'',
        role:''
    })

    const handleChange =(e)=>{
        setUser({...user,[e.target.name]: e.target.value})
        console.log(user);
    }

    const submitHandler=async(e)=>{
       e.preventDefault();
       const response = await createUser(user,token);
       console.log("user",response);
       console.log("tokn",token)
    }

  return (
    <>
<div className=" w-[100%] h-screen flex justify-center items-center">
<form className="className= md:w-[600px] p-[60px]  bg-[#125680] rounded " onSubmit={submitHandler}>
<InputFields type="text"
     placeholder ="name"
     required
     name="userName"
     value={user.userName}
     className="border  border-[#86a4c3]  w-[100%] p-3 rounded  outline-none"
     onChange={handleChange}
    />


     <InputFields type="password"
     placeholder ="password"
     className="border  border-[#86a4c3]  w-[100%] p-3 rounded  outline-none"
     name="password"
     value={user.password}
     onChange={handleChange}
    />

   <InputFields type="text"
     placeholder ="role"
     className="border  border-[#86a4c3]  w-[100%] p-3 rounded  outline-none"
     name="role"
     value={user.role}
     onChange={handleChange}
    />
<button>sumit</button>
</form>
   
    </div>
   
    </>
  )
}

export default CreateUsers