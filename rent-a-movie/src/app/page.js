import React from "react";
import Link from "next/link";
export default function Login() {
  return (
    <div
      id='landing'
      className='min-h-screen flex items-center justify-center content-center bg-slate-950 font-sans'
    >
      <div>
        <h1 className='text-9xl text-center font-extrabold text-white mb-2'>
          Movie Mania
        </h1>
        <div className='h-1 w-2/4 bg-white mx-auto'></div>
        <p className='text-white text-center text-3xl mt-2'>
          The movie rental store
        </p>
        <div className='flex items-center justify-center content-center'>
          <Link
            href={"/login"}
            className='mx-5 mt-2 w-28 text-center bg-white text-red-600 font-extrabold p-2 rounded-full'
          >
            Login
          </Link>
          <Link
            href={"/signup"}
            className='text-center mx-5 mt-2 w-28 bg-red-600 text-white font-extrabold p-2 rounded-full'
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
