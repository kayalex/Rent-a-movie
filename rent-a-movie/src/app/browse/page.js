// pages/browse.js
"use client";
import moviesArr from "../api/movies";
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
    <div>
      <h1 className='text-2xl'>Browse Movies</h1>
      <div className='bg-red-100'>
        {movies.map((movie) => (
          <div className='border-2 border-teal-300' key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
            <Link href={`/movies/${movie.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
