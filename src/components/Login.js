import React, { useState } from 'react'
import { ENDPOINT } from '../utils/constant';
import axios from "axios";
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken } from '../utils/appSlice';
import { getUser } from '../utils/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const changeEventHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post(`${ENDPOINT}/login`, user, {
      headers: {
        'Content-type': "application/json",
      },
      withCredentials: true,
    }).then(res => {
      const {user} = res.data;
      dispatch(getUser(user));
      if (res.data.success) {
        toast.success(res?.data?.message);
      }
      navigate("/");
    }).catch(error => {
      console.log(error);
      toast.error(error?.response?.data?.message);
    })

    setUser({
      email: "",
      password: "",
    })
  }

  return (
    <div className="flex justify-center items-center h-[100vh] w-[100vw] bg-gradient-to-r from-blue-400 to-teal-400">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-semibold text-center text-teal-500 mb-6">Sign In</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label for="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              value={user.email} name="email" onChange={changeEventHandler}
              type="email"
              id="email"
              className="w-full bg-gray-100 text-teal-500 border-2 border-teal-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent placeholder-gray-500"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-6">
            <label for="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              value={user.password} name="password" onChange={changeEventHandler}
              type="password"
              id="password"
              className="w-full bg-gray-100 text-teal-500 border-2 border-teal-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent placeholder-gray-500"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 shadow-lg shadow-teal-300 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out"
          >
            Sign In
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">Don't have an account? <Link to={"/signup"} className="text-teal-500 hover:underline">Sign Up</Link></p>
        </div>
      </div>
    </div>


  )
}

export default Login