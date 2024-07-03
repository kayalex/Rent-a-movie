"use client";
import React, { useState } from "react";
export default function AddMovie() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [description, setDescription] = useState("");
  const [actors, setActors] = useState([""]);

  const handleAddActor = () => {
    setActors([...actors, ""]);
  };

  const handleActorChange = (index, value) => {
    const newActors = [...actors];
    newActors[index] = value;
    setActors(newActors);
  };
  const handleRemoveActor = (index) => {
    const newActors = actors.filter((_, i) => i !== index);
    setActors(newActors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Title: title,
        Type: type,
        Price: parseFloat(price),
        Quantity: parseInt(quantity, 10),
        image_link: imageLink,
        description: description,
        actors: actors.split(",").map((actor) => actor.trim()),
      }),
    });

    if (res.ok) {
      alert("Movie added successfully!");
      // Reset form
      setTitle("");
      setType("");
      setPrice("");
      setQuantity("");
      setImageLink("");
      setDescription("");
      setActors([""]);
    } else {
      alert("Failed to add movie");
    }
  };

  return (
    <div id='landing' className='min-h-screen flex items-center justify-center'>
      <div className='bg-opacity-40 bg-black p-8 rounded-sm shadow-md w-full max-w-md'>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='block text-white font-bold mb-2'>Title:</label>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='e.g. moana'
              required
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight '
            />
          </div>
          <div>
            <label className='block text-white font-bold mb-2'>Type:</label>
            <input
              type='text'
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight '
            />
          </div>
          <div>
            <label className='block text-white font-bold mb-2'>Price:</label>
            <input
              type='number'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight '
            />
          </div>
          <div>
            <label className='block text-white font-bold mb-2'>Quantity:</label>
            <input
              type='number'
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight '
            />
          </div>
          <div>
            <label className='block text-white font-bold mb-2'>
              Image Link:
            </label>
            <input
              type='text'
              value={imageLink}
              onChange={(e) => setImageLink(e.target.value)}
              required
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight '
            />
          </div>
          <div>
            <label className='block text-white font-bold mb-2'>
              Description:
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight '
            ></textarea>
          </div>
          <div>
            <label className='block text-white font-bold mb-2'>Actors:</label>
            <input
              value={actors}
              onChange={(e) => setActors(e.target.value)}
              required
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight'
            ></input>
          </div>
          <button
            type='submit'
            className='block text-center w-full rounded bg-none border-2 text-white p-2 font-extrabold text-2xl mt-8 mx-auto hover:bg-red-600 hover:border-none'
          >
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
}
