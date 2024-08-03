import React, { useState } from 'react'
import Header from './Header';


const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);
  const handleSignIN = () => {
    setIsSignIn(!isSignIn);
  }

  return (
    <div>
      <Header />
      
      <div className='absolute w-3/12 top-[12rem] left-[35vw] p-12 bg-black bg-opacity-85'>
        <form action="" className='text-white flex flex-col justify-center gap-3 rounded-lg  '>
          <h1 className=' font-bold text-4xl py-4'>{isSignIn ? "Sign In" : "Sign up"}</h1>

          {
            isSignIn ? "" : <input type="name" placeholder='Full Name' className='p-4 w-full my-2  bg-gray-700 bg-opacity-70' />
          }
          <input type="email" placeholder='Email' className='p-4 w-full my-2  bg-gray-700 bg-opacity-70' />
          <input type="password" placeholder='Password' className='p-4 w-full my-2  bg-gray-700 bg-opacity-70' />

          <button className=' bg-red-600 p-4 my-6 rounded-lg'>{isSignIn ? "Sign In" : "Sign up"}</button>
          <div className='flex gap-1 text-lg'>
            <p className='text-gray-400'>{isSignIn ? "New to Netflix?" : "Already a user ?"}</p>
            <p className=' cursor-pointer font-bold' onClick={handleSignIN}>{isSignIn ? "Sign up now" : "Sign in"}</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;