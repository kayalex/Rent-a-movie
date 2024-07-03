import Link from "next/link";
import React from "react";

function Dashboard() {
  return (
    <div
      id='landing'
      className='min-h-screen flex flex-col items-center justify-center content-center bg-slate-950 font-sans'
    >
      <div>
        <h1 className='text-9xl text-center font-extrabold text-white mb-2'>
          Movie Mania
        </h1>
        <div className='h-1 w-2/4 bg-white mx-auto'></div>
        <p className='text-white text-center text-3xl mt-2'>Admin Dashboard</p>
      </div>
      <div className='h-6'></div>
      <div className='flex'>
        <Link
          className='block text-center w-44 rounded-full bg-none border-2 p-2 font-extrabold text-2xl mx-2 text-white duration-500 hover:bg-black'
          href={"/admin/dashboard/movies"}
        >
          Movies
        </Link>
        <Link
          href={"/admin/dashboard/customers"}
          className='block text-center w-44 rounded-full bg-none border-2 text-white p-2 font-extrabold text-2xl mx-2 duration-500 hover:bg-white hover:text-red-600'
        >
          Customers
        </Link>
        <Link
          href={"/admin/dashboard/transactions"}
          className='block text-center w-44 rounded-full bg-none border-2 text-white p-2 font-extrabold text-2xl mx-2 duration-500 hover:bg-red-600'
        >
          Transactions
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
