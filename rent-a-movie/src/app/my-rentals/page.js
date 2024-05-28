// pages/my-rentals.js
"use client";
import { useState, useEffect } from "react";

export default function MyRentals() {
  const [currentRentals, setCurrentRentals] = useState([]);
  const [rentalHistory, setRentalHistory] = useState([]);

  useEffect(() => {
    // Fetch current rentals from an API endpoint
    fetch("/api/rentals/current")
      .then((response) => response.json())
      .then((data) => setCurrentRentals(data));

    // Fetch rental history from an API endpoint
    fetch("/api/rentals/history")
      .then((response) => response.json())
      .then((data) => setRentalHistory(data));
  }, []);

  return (
    <div>
      <h1>My Rentals</h1>
      <div>
        <h2>Current Rentals</h2>
        {currentRentals.map((rental) => (
          <div key={rental.id}>
            <h3>{rental.title}</h3>
            <p>Due Date: {rental.dueDate}</p>
          </div>
        ))}
      </div>
      <div>
        <h2>Rental History</h2>
        {rentalHistory.map((rental) => (
          <div key={rental.id}>
            <h3>{rental.title}</h3>
            <p>Returned Date: {rental.returnedDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
