"use client";
import React, { useEffect, useState } from "react";

export default function AddMovie({ params }) {
  const { id } = params;
  const movie_id = id;
  const [customerID, setCustomerID] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [zip, setZip] = useState("");
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    // Fetch movies from an API endpoint
    fetch("http://localhost:3000/customers")
      .then((response) => response.json())
      .then((data) => setCustomers(data));
  }, []);

  let city = "";
  let state = "";

  const handleAddCustomer = async (e) => {
    e.preventDefault();

    if (zip == "00001") {
      city = "Kitwe";
      state = "Copperbelt";
    } else if (zip == "00002") {
      city = "kabwe";
      state = "Central";
    } else if (zip == "00003") {
      city = "Chipata";
      state = "Eastern";
    } else if (zip == "00004") {
      city = "Lusaka";
      state = "Lusaka";
    } else if (zip == "00005") {
      city = "chinsali";
      state = "Muchinga";
    } else if (zip == "00006") {
      city = "Kasama";
      state = "Northen";
    } else if (zip == "00007") {
      city = "Mongu";
      state = "Western";
    } else if (zip == "00008") {
      city = "Solwezi";
      state = "North-western";
    } else if (zip == "00009") {
      city = "livingistone";
      state = "Southen";
    } else if (zip == "00010") {
      city = "mansa";
      state = "Luapula";
    } else {
      city = "kitwe";
      state = "copperbelt";
    }

    const res = await fetch("http://localhost:3000/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        FirstName: firstName,
        LastName: lastName,
        PhoneNumber: phoneNumber,
        Email: email,
        StreetAddress: streetAddress,
        City: city,
        State: state,
        Zip: zip,
      }),
    });

    if (res.ok) {
      alert("Customer added successfully!");
      // Reset form
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setStreetAddress("");
      setZip("");
    } else {
      alert("Failed to add customer");
    }
  };

  const handleAddTransaction = async (e) => {
    e.preventDefault();
    const date = new Date();
    const formattedDate = date.toISOString().slice(0, 19).replace("T", " ");

    const response = await fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        CustomerID: parseInt(customerID, 10),
        Date: formattedDate,
        MovieID: parseInt(movie_id, 10),
      }),
    });

    if (response.ok) {
      alert("successful!");
      window.location.href = "http://localhost:3001/browse";
    } else {
      // alert("failed");
      const errorData = await response.json();
      alert(
        "Transaction failed:",
        errorData.error || errorData.message || "Unknown error"
      );
      // window.location.reload();
    }
  };

  return (
    <>
      <div
        id='landing'
        className='min-h-screen items-center justify-center content-center'
      >
        <div className='w-full mx-auto flex flex-col items-center'>
          <h1 className='text-3xl text-white font-extrabold'>
            Are you already a customer?
          </h1>
          <div className='flex mt-5'>
            <a
              className='block text-center w-44 rounded-full bg-none border-2 text-white p-2 font-extrabold text-2xl mx-2 duration-500 hover:bg-white hover:text-red-600'
              href='#yes'
            >
              Yes
            </a>
            <a
              className='block text-center w-44 rounded-full bg-none border-2 text-white p-2 font-extrabold text-2xl mx-2 duration-500 hover:bg-white hover:text-red-600'
              href='#no'
            >
              No
            </a>
          </div>
        </div>
      </div>
      {/* IF CUSTOMER DOESN'T EXIST */}
      <div
        id='no'
        className='landing min-h-screen flex items-center justify-center'
      >
        <div className='bg-opacity-40 bg-black p-8 rounded-sm shadow-md w-full max-w-md'>
          <form onSubmit={handleAddCustomer}>
            <div>
              <label className='block text-white font-bold mb-2'>
                First Name:
              </label>
              <input
                type='text'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight '
              />
            </div>
            <div>
              <label className='block text-white font-bold mb-2'>
                Last Name:
              </label>
              <input
                type='text'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight '
              />
            </div>
            <div>
              <label className='block text-white font-bold mb-2'>
                Phone Number:
              </label>
              <input
                type='tel'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight '
              />
            </div>
            <div>
              <label className='block text-white font-bold mb-2'>Email:</label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight '
              />
            </div>
            <div>
              <label className='block text-white font-bold mb-2'>
                Street Address:
              </label>
              <input
                type='text'
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
                required
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight '
              />
            </div>

            <div>
              <label className='block text-white font-bold mb-2'>Zip:</label>
              <input
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                required
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight '
              />
            </div>
            <button
              type='submit'
              className='block text-center w-full rounded bg-none border-2 text-white p-2 font-extrabold text-2xl mt-8 mx-auto hover:bg-red-600 hover:border-none'
            >
              Add Customer
            </button>
          </form>
        </div>
      </div>
      {/* IF CUSTOMER EXISTS */}
      <div
        id='yes'
        className='landing min-h-screen flex items-center justify-center'
      >
        <div className='flex flex-col bg-opacity-40 bg-black p-8 rounded-sm shadow-md w-full max-w-md items-center justify-center'>
          <form className='w-full mb-3' onSubmit={handleAddTransaction}>
            <div>
              <label className='block text-white font-bold mb-2'>
                Enter Your customer ID
              </label>
              <input
                type='text'
                value={customerID}
                onChange={(e) => setCustomerID(e.target.value)}
                required
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight '
              />
            </div>
            <button
              type='submit'
              className='block text-center w-full rounded bg-none border-2 text-white p-2 font-extrabold text-2xl mt-8  mx-auto hover:bg-red-600 hover:border-none '
            >
              Rent Movie
            </button>
          </form>
          <table className='text-white'>
            <thead>
              <tr>
                <th className='border px-2 py-2'>ID</th>
                <th className='border px-2 py-2'>Name</th>
                <th className='border px-2 py-2'>Email</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.CustomerID}>
                  <td className='border px-2 py-2'>{customer.CustomerID}</td>
                  <td className='border px-2 py-2'>{customer.CustomerName}</td>
                  <td className='border px-2 py-2'>{customer.Email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
