import React, { useState, useEffect } from "react";
import Template from "../components/Template";
import UserDetailCard from "../components/UserDetailCard";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((user) => setUsers(user));
  }, []);

  return (
    <Template>
      <h1 className="col-12 text-center">Users</h1>
      {users.map((user) => (
        <UserDetailCard key={`user-card-${user.id}`} user={user} />
      ))}
    </Template>
  );
};

export default Users;
