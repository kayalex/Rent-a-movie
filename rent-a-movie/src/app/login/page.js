// pages/login.js
"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function signIn(e) {
    e.preventDefault();
    if (email == "kayalex404@gmail.com" && password == "432") {
      window.location.href = "http://localhost:3001/admin/dashboard";
    }
  }

  return (
    <div
      id='landing'
      className='min-h-screen flex items-center justify-center bg-gray-100'
    >
      <div className='bg-gray-100 p-8 rounded-sm shadow-md w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
        <form onSubmit={signIn}>
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
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Password'
            />
          </div>
          <div className='flex justify-center items-center'>
            <button
              type='submit'
              className='block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
