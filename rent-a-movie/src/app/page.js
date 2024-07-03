"use client";
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import homeImage from "./../../public/home.jpg";
import Slideshow from "./components/slideshow";

export default function Home() {
  // This would be fetched from an API
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from an API endpoint
    fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className='bg-slate-950'>
      <div
        id='nav'
        className='float-start fixed h-20 bg-none w-full flex text-white items-center justify-end'
      >
        <Link
          href={"/"}
          className='block w-44 text-center h-full content-center font-extrabold text-xl hover:bg-red-600'
        >
          Home
        </Link>
        <Link
          href={"/browse"}
          className='block w-44 text-center h-full content-center font-extrabold text-xl hover:bg-red-600'
        >
          Browse Movies
        </Link>
      </div>
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
        </div>
      </div>
      <div className='items-center flex flex-wrap bg-slate-800'></div>
      <div className='h-40 bg-slate-950 flex items-center justify-around'>
        <div>
          <h1 className='text-red-500'>
            &#169; Movie Mania Movie reental store
          </h1>
        </div>
        <div>
          <h1 className='text-red-500 text-center'>Admin Login</h1>
          <div className='flex items-center justify-center content-center'>
            <Link
              href={"/login"}
              className='block mx-5 mt-2 w-44 text-center bg-white text-red-600 font-extrabold p-2 rounded-full'
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
