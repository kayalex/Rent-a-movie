// pages/movies/[id].js
"use client";
import movies from "@/app/api/movies";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MovieDetails({ params }) {
  const { id } = params;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch movie details from an API using the id
      // fetch(`/api/movies/${id}`)
      //   .then((response) => response.json())
      //   .then((data) => setMovie(data));

      for (let i = 0; i < movies.length; i++) {
        if (movies[i].id == id) {
          setMovie(movies[i]);
        }
      }
    }
  }, [id]);
  // let id = 2;
  //
  // let movie = setMovie(id);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex flex-row  rounded-lg overflow-hidden max-w-screen-md mx-auto h-4/5  my-7 bg-slate-950 border border-white  text-white'>
      <div className='w-1/2'>
        <Image
          src={movie.image}
          alt={movie.title}
          width={3000}
          height={3000}
          objectFit='cover'
        />
      </div>
      <div className='flex flex-col w-1/2 p-4'>
        <div className='font-bold text-xl mb-2 uppercase'>{movie.title}</div>
        <p className='mb-5'>{movie.genre}</p>

        <p className='text-slate-200 text-base'>{movie.description}</p>
        <h3 className='text-l font-semibold mb-2'>Actors</h3>
        <ul className='flex justify-around w-3/12'>
          {movie.actors.map((actor, index) => (
            <li key={index}>{actor}</li>
          ))}
        </ul>
        <Link
          href={`/cart`}
          className='text-center w-2/5 bg-red-600 text-white font-bold p-1 mt-2 rounded'
        >
          Rent this movie
        </Link>
      </div>
    </div>
  );
}
