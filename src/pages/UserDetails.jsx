import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Template from "../components/Template";

const UserDetails = () => {
  const { userid } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
      .then((res) => res.json())
      .then((user) => {
      setUser(user)
      });
  }, []);

  return (
    <Template>
            <h1 className="col text-center">{user?.name}</h1>
            <h3 className="col text-center">{user?.username}</h3>
            <h3 className="col text-center">{user?.address.street}</h3>
            <h3 className="col text-center">{user?.address.city}</h3>
    </Template>
  );
};

export default UserDetails;
