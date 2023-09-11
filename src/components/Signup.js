import React, { useState } from 'react'
import { ENDPOINT } from '../utils/constant';
import axios from "axios";
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    uname: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const changeEventHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      return toast.error("Password didn't match!")
    }
    try {
      const res = await axios.post(`${ENDPOINT}/register`, user);
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
      navigate("/login");
    } catch (error) {
      console.log(error);
    }

    setUser({
      uname: "",
      email: "",
      password: "",
      confirmPassword: ""
    })

  }

  return (
    // <div className='w-[100vw] h-[80vh] flex items-center justify-center'>
    //     <div className=''>
    //         <h1 className='font-bold text-xl'>SIGN UP</h1>
    //         <form onSubmit={submitHandler} className='flex flex-col justify-between h-[45vh] mt-4'>
    //             <div>
    //                 <input onChange={changeEventHandler} value={user.firstName} name="firstName" className='border-b-2 w-72 border-gray-300 pl-2 pr-2 pt-1 pb-1 outline-none mt-1' type='text' placeholder='Firstname' />
    //             </div>
    //             <div>
    //                 <input onChange={changeEventHandler} value={user.lastName} name="lastName" className='border-b-2 w-72 border-gray-300 pl-2 pr-2 pt-1 pb-1 outline-none mt-1' type='text' placeholder='Lastname' />
    //             </div>
    //             <div>
    //                 <input onChange={changeEventHandler} value={user.email} name="email" className='border-b-2 w-72 border-gray-300 pl-2 pr-2 pt-1 pb-1 outline-none mt-1' type='email' placeholder='Email' />
    //             </div>
    //             <div>
    //                 <input onChange={changeEventHandler} value={user.password} name="password" className='border-b-2 w-72 border-gray-300 pl-2 pr-2 pt-1 pb-1 outline-none mt-1' type='password' placeholder='Password' />
    //             </div>
    //             <div>
    //                 <input onChange={changeEventHandler} value={user.confirmPassword} name="confirmPassword" className='border-b-2 w-72 border-gray-300 pl-2 pr-2 pt-1 pb-1 outline-none mt-1' type='password' placeholder='Confirm Password' />
    //             </div>
    //             <div className='mt-5'>
    //                 <p className='text-center'>You already have account ?<Link to={"/login"} className='text-[#604E9E]'> Login</Link></p>  
    //                 <button className='bg-[#ff7d00] text-white w-72 mt-2 pl-2 pr-2 pt-2 pb-2 rounded-md'>Signup</button>
    //             </div>
    //         </form>
    //     </div>
    // </div>
    <div className="flex justify-center items-center h-[100vh] w-[100vw] bg-gradient-to-r from-blue-400 to-teal-400">
      <div className="bg-white p-2 pl-8 pr-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-semibold text-center text-teal-500 mb-6">Sign Up</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label for="name" className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              value={user.uname} name="uname" onChange={changeEventHandler}
              type="text"
              id="text"
              className="w-full bg-gray-100 border-2 border-teal-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent placeholder-gray-500"
              placeholder="John"
            />
          </div>

          <div className="mb-4">
            <label for="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              value={user.email} name="email" onChange={changeEventHandler}
              type="email"
              id="email"
              className="w-full bg-gray-100 border-2 border-teal-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent placeholder-gray-500"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-6">
            <label for="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              value={user.password} name="password" onChange={changeEventHandler}
              type="password"
              id="password"
              className="w-full bg-gray-100 border-2 border-teal-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent placeholder-gray-500"
              placeholder="********"
            />
          </div>
          <div className="mb-6">
            <label for="password" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
            <input
              value={user.confirmPassword} name="confirmPassword" onChange={changeEventHandler}
              type="password"
              id="password"
              className="w-full bg-gray-100 border-2 border-teal-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent placeholder-gray-500"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">Already have an account? <Link to={"/login"} className="text-teal-500 hover:underline">Sign In</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Signup