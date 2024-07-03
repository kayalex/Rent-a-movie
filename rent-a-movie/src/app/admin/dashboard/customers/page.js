"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function DashboardMovies() {
  const [query, setQuery] = useState("");
  const [customers, setCustomers] = useState([]);
  const handleSearchCustomer = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:3000/searchcustomers?q=${query}`);
    const data = await res.json();
    setCustomers(data);
  };

  useEffect(() => {
    // Fetch movies from an API endpoint
    fetch("http://localhost:3000/customers")
      .then((response) => response.json())
      .then((data) => setCustomers(data));
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
          <h2 className='text-xl font-semibold m-4'>Customers</h2>
          <div>
            <form className='flex' onSubmit={handleSearchCustomer}>
              <input
                type='text'
                onChange={(e) => setQuery(e.target.value)}
                name=''
                id=''
                placeholder='search for a customer'
                className='p-2 rounded-full bg-slate-700 border-2 border-white'
              />
              <button
                className='block mx-1 hover:scale-125 duration-100'
                type='submit'
              >
                <FontAwesomeIcon
                  className='text-3xl text-white'
                  icon={faSearch}
                />
              </button>
            </form>
          </div>
          <Link
            className='block m-4 bg-red-600 p-3 rounded'
            href={"/admin/dashboard/customers/addcustomer"}
          >
            Add Customer
          </Link>
        </div>
        <table className='w-full mb-8 bg-slate-900 rounded-lg'>
          <thead>
            <tr>
              <th className='px-4 py-2'>Customer Name</th>

              <th className='px-4 py-2'>Phone Number</th>
              <th className='px-4 py-2'>Email</th>
              <th className='px-4 py-2'>Address</th>
              <th className='px-4 py-2'>Zipcode</th>
              <th className='px-4 py-2'>Send Email</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.CustomerID}>
                <td className='border px-4 py-2'>
                  {customer.CustomerName ||
                    `${customer.FirstName} ${customer.LastName} `}
                </td>

                <td className='border px-4 py-2'>{customer.PhoneNumber}</td>
                <td className='border px-4 py-2'>{customer.Email}</td>
                <td className='border px-4 py-2'>{`${customer.StreetAddress}, ${customer.City} ${customer.State}`}</td>
                <td className='border px-4 py-2'>{`${customer.StreetAddress}, ${customer.Zip} ${customer.State}`}</td>
                <td className='border px-4 py-2'>
                  <Link
                    href={`/admin/dashboard/customers/sendemail/${customer.CustomerID}`}
                    className='block bg-yellow-600 px-2 py-1 rounded mr-2'
                  >
                    Send Email
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
