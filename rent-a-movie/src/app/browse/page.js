"use client";
import moviesArr from "../api/movies";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Browse() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from an API endpoint
    // fetch("/api/movies")
    //   .then((response) => response.json())
    //   .then((data) => setMovies(data));
    setMovies(moviesArr);
  }, []);

  return (
    <div id='landing' className='bg-slate-950'>
      <h1 className='text-6xl text-center font-extrabold text-white mb-2 pt-5'>
        Browse Movies
      </h1>
      <div className='h-1 w-1/4 bg-white mx-auto'></div>
      <div className=''>
        {movies.map((movie) => (
          <div className='flex items-center p-6 '>
            <div className='flex flex-row  rounded-lg overflow-hidden max-w-screen-md mx-auto my-7 bg-slate-950 border border-white  text-white'>
              <div className='w-52'>
                <Image
                  src={movie.image}
                  alt={movie.title}
                  width={300}
                  height={300}
                  objectFit='cover'
                />
              </div>
              <div className='flex flex-col w-1/2 p-4'>
                <div className='font-bold text-xl mb-2 uppercase'>
                  {movie.title}
                </div>
                <p className='mb-5'>{movie.genre}</p>

                <p className='text-slate-200 text-base'>
                  {movie.description.slice(0, 150)}...
                </p>
                <Link
                  href={`/movies/${movie.id}`}
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
  );
}
