"use client";
import React, { useEffect, useState } from "react";

const UsersClient = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("http://localhost:3000/actors"); // Replace with your API endpoint
      const data = await res.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.ActorId}>{user.ActorName}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersClient;
