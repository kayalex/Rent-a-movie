// pages/index.js
import Link from "next/link";
import movies from "./api/movies";

export default function Home() {
  // This would be fetched from an API

  return (
    <div>
      <h1 className='text-center uppercase font-extrabold text-3xl'>
        Welcome to Movie Rental Store
      </h1>
      <h2 className='text-xl font-semibold m-3 text-center'>Featured Movies</h2>
      <div className='items-center flex flex-wrap'>
        {movies.map((movie) => (
          <div
            className='bg-white shadow-md rounded-lg overflow-hidden max-w-sm mx-auto my-4 m-1 p-5'
            key={movie.id}
          >
            <h2 className='text-xl font-semibold mb-2'>{movie.title}</h2>
            <p class='text-gray-600 mb-4'>{movie.description}</p>
            <Link
              className='text-red-600 hover:text-red-700 font-semibold transition-all '
              href={`/movies/${movie.id}`}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
      <div>
        <input type='text' placeholder='Search for movies...' />
        <button>Search</button>
      </div>
      <Link href='/browse'>Browse Movies</Link>
    </div>
  );
}
