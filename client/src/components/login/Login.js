import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <>
       <div className="background-1">
      <div>
      <div className="md:w-[700px] p-[60px]  bg-[#fff] rounded ">
          <h2 className="text-center text-[36px] text-blue-600 font-bold mb-2">Get started with Us</h2>
          <span className="text-center block mb-6  text-[17px] font-bold" >Sign in to continue to WebkitX.</span>
          <form className="w-[100%] mb-6">

          <div className="flex items-center mb-6 ">
          <i className="fa-regular fa-user border  border-[#86a4c3]  p-4 rounded rounded-r-none  "></i>
          <input type="text" placeholder="Username" className="border  border-[#86a4c3]  w-[100%] p-3 border-l-0 rounded rounded-l-none outline-none"/>
          </div>
         
          <div className="flex items-center mb-6 ">
          <i className="fa-solid fa-lock border border  border-[#86a4c3]  p-4 rounded rounded-r-none  "></i>
          <input type="text" placeholder="Password" className="border  border-[#86a4c3]  w-[100%] p-3 border-l-0 rounded rounded-l-none outline-none"/>
          </div>
          
        
           <div className='flex items-center justify-between '>
           <div className="flex items-start  mb-[40px] gap-[40px] ">
            <input type="checkbox" className="h-6 w-6 text-indigo-600"/>
            <label className="text-[17px] "> Remember Me <span className="text-[#D97706] font-bold">Terms</span></label>
           
            </div>
            <div className='flex gap-[4px] items-center'> 
            <i className="fa-solid fa-lock  "></i>
                <a href='/'>Forget Password</a></div>
           </div>
          <div className="flex justify-center ">
          <button className="bg-[#00abea] text-white font-semibold py-4 px-6 rounded">LOG IN</button></div>
          </form>
          <div className="flex justify-center">
          <label className="text-[17px] "> Don't have an account?<span className="text-[#D97706] font-bold">Sign Up</span></label>
          </div>
        
      </div>
      </div>
   
    </div>
 
  </>
  )
}

export default Login