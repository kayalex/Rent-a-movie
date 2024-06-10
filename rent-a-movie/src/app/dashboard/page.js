// pages/admin/dashboard.js
"use client";

import { useState } from "react";
import {
  getMovies,
  getCustomers,
  addMovie,
  deleteMovie,
  editMovie,
} from "../api/data";

const TABS = {
  MOVIES: "MOVIES",
  CUSTOMERS: "CUSTOMERS",
};

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState(TABS.MOVIES);
  const [movies, setMovies] = useState(getMovies());
  const [customers] = useState(getCustomers());
  const [form, setForm] = useState({
    title: "",
    genre: "",
    description: "",
    actors: "",
  });
  const [editId, setEditId] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddMovie = () => {
    const newMovie = {
      ...form,
      actors: form.actors.split(",").map((actor) => actor.trim()),
    };
    addMovie(newMovie);
    setMovies(getMovies());
    setForm({ title: "", genre: "", description: "", actors: "" });
  };

  const handleEditMovie = (movie) => {
    setEditId(movie.id);
    setForm(movie);
  };

  const handleUpdateMovie = () => {
    const updatedMovie = {
      ...form,
      actors: form.actors.split(",").map((actor) => actor.trim()),
    };
    editMovie(editId, updatedMovie);
    setMovies(getMovies());
    setForm({ title: "", genre: "", description: "", actors: "" });
    setEditId(null);
  };

  const handleDeleteMovie = (id) => {
    deleteMovie(id);
    setMovies(getMovies());
  };

  return (
    <div className='min-h-screen bg-slate-950 text-white'>
      <header className='bg-red-600 p-4'>
        <h1 className='text-2xl font-bold'>Admin Dashboard</h1>
      </header>
      <main className='p-4'>
        <div className='flex space-x-4 mb-8'>
          <button
            onClick={() => handleTabChange(TABS.MOVIES)}
            className={`px-4 py-2 rounded ${
              activeTab === TABS.MOVIES ? "bg-red-600" : "bg-slate-800"
            }`}
          >
            Movies
          </button>
          <button
            onClick={() => handleTabChange(TABS.CUSTOMERS)}
            className={`px-4 py-2 rounded ${
              activeTab === TABS.CUSTOMERS ? "bg-red-600" : "bg-slate-800"
            }`}
          >
            Customers
          </button>
        </div>

        {activeTab === TABS.MOVIES && (
          <>
            <h2 className='text-xl font-semibold mb-4'>Movies</h2>
            <table className='w-full mb-8 bg-slate-900 rounded-lg'>
              <thead>
                <tr>
                  <th className='px-4 py-2'>Title</th>
                  <th className='px-4 py-2'>Genre</th>
                  <th className='px-4 py-2'>Description</th>
                  <th className='px-4 py-2'>Actors</th>
                  <th className='px-4 py-2'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie) => (
                  <tr key={movie.id}>
                    <td className='border px-4 py-2'>{movie.title}</td>
                    <td className='border px-4 py-2'>{movie.genre}</td>
                    <td className='border px-4 py-2'>{movie.description}</td>
                    <td className='border px-4 py-2'>
                      {movie.actors.join(", ")}
                    </td>
                    <td className='border px-4 py-2'>
                      <button
                        onClick={() => handleEditMovie(movie)}
                        className='bg-yellow-600 px-2 py-1 rounded mr-2'
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteMovie(movie.id)}
                        className='bg-red-600 px-2 py-1 rounded'
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className='bg-slate-900 p-4 rounded-lg'>
              <h3 className='text-lg font-semibold mb-4'>
                {editId ? "Edit Movie" : "Add Movie"}
              </h3>
              <form className='space-y-4'>
                <div>
                  <label className='block text-sm font-medium'>Title</label>
                  <input
                    type='text'
                    name='title'
                    value={form.title}
                    onChange={handleFormChange}
                    required
                    className='mt-1 block w-full bg-slate-800 text-white border border-slate-700 rounded py-2 px-3'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium'>Genre</label>
                  <input
                    type='text'
                    name='genre'
                    value={form.genre}
                    onChange={handleFormChange}
                    required
                    className='mt-1 block w-full bg-slate-800 text-white border border-slate-700 rounded py-2 px-3'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium'>
                    Description
                  </label>
                  <textarea
                    name='description'
                    value={form.description}
                    onChange={handleFormChange}
                    required
                    className='mt-1 block w-full bg-slate-800 text-white border border-slate-700 rounded py-2 px-3'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium'>
                    Actors (comma separated)
                  </label>
                  <input
                    type='text'
                    name='actors'
                    value={form.actors}
                    onChange={handleFormChange}
                    required
                    className='mt-1 block w-full bg-slate-800 text-white border border-slate-700 rounded py-2 px-3'
                  />
                </div>
                <div>
                  {editId ? (
                    <button
                      type='button'
                      onClick={handleUpdateMovie}
                      className='bg-yellow-600 px-4 py-2 rounded'
                    >
                      Update Movie
                    </button>
                  ) : (
                    <button
                      type='button'
                      onClick={handleAddMovie}
                      className='bg-red-600 px-4 py-2 rounded'
                    >
                      Add Movie
                    </button>
                  )}
                </div>
              </form>
            </div>
          </>
        )}

        {activeTab === TABS.CUSTOMERS && (
          <>
            <h2 className='text-xl font-semibold mb-4'>Customers</h2>
            <table className='w-full bg-slate-900 rounded-lg'>
              <thead>
                <tr>
                  <th className='px-4 py-2'>Name</th>
                  <th className='px-4 py-2'>Email</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id}>
                    <td className='border px-4 py-2'>{customer.name}</td>
                    <td className='border px-4 py-2'>{customer.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </main>
    </div>
  );
}
