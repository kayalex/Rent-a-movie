// lib/data.js
import moviesArr from "./movies";
let movies = moviesArr;

let customers = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

export function getMovies() {
  return movies;
}

export function getCustomers() {
  return customers;
}

export function addMovie(movie) {
  movie.id = movies.length ? movies[movies.length - 1].id + 1 : 1;
  movies.push(movie);
}

export function editMovie(id, updatedMovie) {
  const index = movies.findIndex((movie) => movie.id === id);
  if (index !== -1) {
    movies[index] = { ...updatedMovie, id };
  }
}

export function deleteMovie(id) {
  movies = movies.filter((movie) => movie.id !== id);
}
