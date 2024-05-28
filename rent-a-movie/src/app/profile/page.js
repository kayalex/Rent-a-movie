// pages/profile.js
"use client";
import { useState, useEffect } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user profile from an API endpoint
    fetch("/api/profile")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <div>
        <p>
          Name: {user.firstName} {user.lastName}
        </p>
        <p>Email: {user.email}</p>
        <p>Phone Number: {user.phoneNumber}</p>
        <p>Address: {user.address}</p>
        <button>Edit Profile</button>
      </div>
    </div>
  );
}
