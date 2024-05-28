// pages/movies/[id].js
"use client";
import movies from "@/app/api/movies";
import { useEffect, useState } from "react";

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
    <div>
      <h1 className='text-xl font-semibold mb-2'>{movie.title}</h1>
      <p class='text-gray-600 '>{movie.genre}</p>
      <p class='text-gray-600 '>{movie.description}</p>
      <h3 className='text-l font-semibold mb-2'>Actors</h3>
      <ul className='flex justify-around w-3/12'>
        {movie.actors.map((actor, index) => (
          <li key={index}>{actor}</li>
        ))}
      </ul>
      <button>Rent this Movie</button>
    </div>
  );
}
