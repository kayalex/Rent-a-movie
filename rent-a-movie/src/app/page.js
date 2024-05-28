// pages/index.js
import Link from "next/link";

export default function Home() {
  // This would be fetched from an API
  const featuredMovies = [
    { id: 1, title: "The Big Lebowski" },
    { id: 2, title: "Titanic" },
  ];

  return (
    <div>
      <h1>Welcome to Movie Rental Store</h1>
      <div>
        <h2>Featured Movies</h2>
        {featuredMovies.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <Link href={`/movies/${movie.id}`}>View Details</Link>
          </div>
        ))}
      </div>
      <div>
        <input type='text' placeholder='Search for movies...' />
        <button>Search</button>
      </div>
      <Link href='/pages/browse'>Browse Movies</Link>
    </div>
  );
}
