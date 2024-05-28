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
      <h1>{movie.title}</h1>
      <p>{movie.genre}</p>
      <p>{movie.description}</p>
      <h3>Actors</h3>
      <ul>
        {movie.actors.map((actor, index) => (
          <li key={index}>{actor}</li>
        ))}
      </ul>
      <button>Rent this Movie</button>
    </div>
  );
}
