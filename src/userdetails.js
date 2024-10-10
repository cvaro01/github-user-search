import React from "react";

const UserDetails = ({ userData, repos, handleReset }) => {
  return (
    <div className="card mt-4">
      <div className="card-body">
        <img
          src={userData.avatar_url}
          alt="User Avatar"
          className="rounded-circle mb-3"
          style={{ width: "150px" }}
        />
        <h3 className="card-title">{userData.name}</h3>
        <p className="card-text">
          <strong>Location:</strong> {userData.location || "N/A"}
        </p>
        <p className="card-text">
          <strong>Bio:</strong> {userData.bio || "No bio available"}
        </p>

        <h4 className="mt-4">Repositories:</h4>
        <ul className="list-group list-group-flush">
          {repos.length > 0 ? (
            repos.map((repo) => (
              <li key={repo.id} className="list-group-item">
                {repo.name}
              </li>
            ))
          ) : (
            <li className="list-group-item">No repositories found</li>
          )}
        </ul>

        <button className="btn btn-danger mt-3" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
