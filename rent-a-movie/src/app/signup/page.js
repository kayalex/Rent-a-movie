// pages/login.js

import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <div
      id='landing'
      className='min-h-screen flex items-center justify-center bg-gray-100'
    >
      <div className='bg-gray-100 p-8 rounded-sm shadow-md w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Sign up</h2>
        <form>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Email'
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Password'
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Sign up
            </button>
            <Link
              href='/login'
              className='inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800'
            >
              Already have an Account? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
