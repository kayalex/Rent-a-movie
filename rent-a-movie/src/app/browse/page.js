"use client";
// import moviesArr from "../api/movies";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Browse() {
  const [query, setQuery] = useState("");

  const [movies, setMovies] = useState([]);
  const handleSearchMovie = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:3000/search?q=${query}`);
    const data = await res.json();
    setMovies(data);
  };
  useEffect(() => {
    // Fetch movies from an API endpoint
    fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <>
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
      <div id='landing' className='pt-20 bg-slate-950 min-h-screen'>
        <h1 className='text-6xl text-center font-extrabold text-white mb-2 pt-5'>
          Browse Movies
          <div className='m-3 h-1 w-1/4 bg-white mx-auto'></div>
        </h1>
        <div className='w-80 mx-auto'>
          <form
            onSubmit={handleSearchMovie}
            className='flex items-center contents-center justify-center'
          >
            <input
              type='text'
              onChange={(e) => setQuery(e.target.value)}
              name=''
              id=''
              placeholder='search for a movie'
              className='p-2 rounded-full  border-2 border-white'
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
        <div className=''>
          {movies.map((movie) => (
            <div key={movie.MovieID} className='flex items-center p-6 '>
              <div className='flex flex-row  rounded-lg overflow-hidden h-96 max-w-screen-md mx-auto my-7 bg-slate-950 border border-white  text-white'>
                <div className='w-50 h-full'>
                  <Image
                    src={movie.image_link}
                    alt={movie.Title}
                    width={300}
                    height={500}
                    objectFit='fit'
                  />
                </div>
                <div className='flex flex-col w-1/2 p-4'>
                  <div className='font-bold text-xl mb-2 uppercase'>
                    {movie.Title}
                  </div>
                  <p className='mb-5'>Genre: {movie.Type}</p>
                  <p className='mb-5 capitalize'>Stars: {movie.Actors}</p>

                  <p className='text-slate-200 text-base'>
                    {movie.description.slice(0, 100)}...
                  </p>
                  <p className='mb-5 capitalize'>Price: K{movie.TotalPrice}</p>
                  <Link
                    href={`/movies/${movie.MovieID}`}
                    className='text-center w-2/5 bg-red-600 text-white font-bold p-1 mt-2 rounded'
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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
    </>
  );
}
