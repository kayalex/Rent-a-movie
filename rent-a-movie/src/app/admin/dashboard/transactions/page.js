"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function DashboardTransactions() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    // Fetch movies from an API endpoint
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  return (
    <>
      <div
        id='nav'
        className='float-start fixed h-20 bg-none w-full flex text-white items-center justify-end'
      >
        <Link
          href={"/admin/dashboard/movies"}
          className='block w-44 text-center h-full content-center font-extrabold text-xl hover:bg-red-600'
        >
          Movies
        </Link>
        <Link
          href={"/admin/dashboard/customers"}
          className='block w-44 text-center h-full content-center font-extrabold text-xl hover:bg-red-600'
        >
          Customers
        </Link>
        <Link
          href={"/admin/dashboard/transactions"}
          className='block w-44 text-center h-full content-center font-extrabold text-xl hover:bg-red-600'
        >
          Transactions
        </Link>
      </div>
      <div className='text-white bg-slate-900 pt-20'>
        <div className='flex items-center justify-between w-2/3 mx-auto'>
          <h2 className='text-xl text-center font-semibold mx-auto my-4'>
            Transactions
          </h2>
        </div>
        <table className='w-full mb-8 bg-slate-900 rounded-lg'>
          <thead>
            <tr>
              <th className='px-4 py-2'>Customer Name</th>

              <th className='px-4 py-2'>Date</th>
              <th className='px-4 py-2'>Movie Name(s)</th>
              <th className='px-4 py-2'>Total Price</th>
              <th className='px-4 py-2'>Daily Total Spend</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.CustomerName}>
                <td className='border px-4 py-2'>{transaction.CustomerName}</td>

                <td className='border px-4 py-2'>{transaction.Date}</td>
                <td className='border px-4 py-2'>{transaction.VideoName}</td>
                <td className='border px-4 py-2'>{transaction.TotalPrice}</td>
                <td className='border px-4 py-2'>
                  K{transaction.CumulativeTotalSpent}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
