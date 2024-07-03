"use client";
import React, { useState } from "react";
export default function AddMovie() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [zip, setZip] = useState("");
  let city = "";
  let state = "";

  const handleSubmit = async (e) => {
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

  return (
    <div id='landing' className='min-h-screen flex items-center justify-center'>
      <div className='bg-opacity-40 bg-black p-8 rounded-sm shadow-md w-full max-w-md'>
        <form onSubmit={handleSubmit}>
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
  );
}
