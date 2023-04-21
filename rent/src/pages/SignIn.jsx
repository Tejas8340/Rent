import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { Link } from "react-router-dom";
 

const SignIn = () => {

  const [showPassword, setShowPassword] = useState(false);

   const [ formData, setFormData ] = useState({
      email:"",
      password: "",
   });

   const { email, password } = formData;
   function onChange(e){
      setFormData((prevState) =>({
         ...prevState,
         [e.target.id]: e.target.value,
      }));
   }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>

      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>

        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              type="email" id="email" value={email} onChange={onChange} placeholder="Email address" 
            />
            <div className="relative mb-6">
            <input
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              type={showPassword ? "text" : "password" } id="password" value={password} onChange={onChange} placeholder="password" 
            />
            {showPassword ? (
              <AiFillEyeInvisible className="absolute right-3 top-3 text-xl cursor-pointer"
              onClick={() =>setShowPassword((prevState) =>!prevState)} />
            ): (<AiFillEye className="absolute right-3 top-3 text-xl cursor-pointer"
            onClick={() =>setShowPassword((prevState) =>!prevState)}
             />)}
            </div>
            <div>
               <p>Don't have a account ?
               <Link to="/sign-up">Register</Link>
               </p>
               <p>
                 <Link to="/forgot-password">Forgot Password ?</Link>
               </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
