import React from "react";
import { Link } from "react-router-dom";

const UserDetailCard = ({ user }) => {
  return (
    <div className="col-md-4">
      <div className="card my-2 shadow">
        <img src="https://via.placeholder.com/200" alt="card-img-top" />
        <div className="card-body text-center">
          <h4 className="card-title">{user.name}</h4>
          <p className="card-text text-muted">
            <i>{user.email}</i>
          </p>
          <Link
            className="btn btn-outline-info btn-sm btn-block w-75 mx-auto mt-3"
            to={`/users/${user.id}`}
          >
            Get Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDetailCard;
