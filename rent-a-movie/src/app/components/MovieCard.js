import React from "react";

const MovieCard = ({ movie }) => {
  const { title, poster_path, overview } = movie;

  // Handle missing image scenario (optional)
  const posterUrl = `https://image.tmdb.org/t/p/w200${poster_path}`;
  const imagePlaceholder = "https://via.placeholder.com/200x280"; // Replace with a default image

  return (
    <div className='rounded overflow-hidden shadow-md'>
      <img
        className='w-full h-48 object-cover'
        src={poster_path ? posterUrl : imagePlaceholder}
        alt={title}
      />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{title}</div>
        <p className='text-gray-700 text-base'>{overview.slice(0, 100)}...</p>
      </div>
    </div>
  );
};

export default MovieCard;
