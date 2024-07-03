"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const handleDeleteMovie = async (id) => {
  const res = await fetch(`http://localhost:3000/movies/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    alert("Movie deleted successfully!");
  } else {
    alert("Failed to delete movie");
  }
};

export default function DashboardMovies() {
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
          <h2 className='text-xl font-semibold m-4'>Movies</h2>
          <div>
            <form
              className='flex content-center items-center'
              onSubmit={handleSearchMovie}
            >
              <input
                type='text'
                onChange={(e) => setQuery(e.target.value)}
                name=''
                id=''
                placeholder='search for a movie'
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
            href={"/admin/dashboard/movies/addmovie"}
          >
            Add Movie
          </Link>
        </div>
        <table className='w-full mb-8 bg-slate-900 rounded-lg'>
          <thead>
            <tr>
              <th className='px-4 py-2'>Title</th>
              <th className='px-4 py-2'>Genre</th>
              <th className='px-4 py-2'>Description</th>
              <th className='px-4 py-2'>Actors</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.MovieID}>
                <td className='border px-4 py-2'>{movie.Title}</td>
                <td className='border px-4 py-2'>{movie.Type}</td>
                <td className='border px-4 py-2'>{movie.description}</td>
                <td className='border px-4 py-2'>{movie.Actors}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
