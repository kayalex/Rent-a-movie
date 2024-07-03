"use client";
import React from "react";
import { useEffect, useState } from "react";

function SendEmail({ params }) {
  const { id } = params;
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    if (id) {
      // Fetch movies from an API endpoint
      fetch(`http://localhost:3000/customers/${id}`)
        .then((response) => response.json())
        .then((data) => setCustomer(data[0]));
    }
  }, [id]);
  const formAction = ``;
  return (
    <div
      id='landing'
      className='flex flex-col min-h-screen items-center justify-center content-center'
    >
      <h1 className='text-3xl text-white m-3'>
        Send email to {customer.FirstName}
      </h1>
      <form
        className='text-3xl text-white m-3'
        action={`mailto:${customer.Email}`}
      >
        <label htmlFor='name'></label>
        <label htmlFor='message'>Message:</label>
        <textarea className='block' name='message' id=''></textarea>
        <button
          className='bg-red-600 text-black block mx-auto m-3 w-44 text-center h-full rounded-full content-center font-extrabold text-xl hover:bg-white'
          type='submit'
        >
          Send Email
        </button>
      </form>
    </div>
  );
}

export default SendEmail;
