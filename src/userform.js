import React from "react";

const UserForm = ({ username, setUsername, fetchGitHubUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      fetchGitHubUser(username);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline justify-content-center">
      <div className="form-group mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary mb-2 ml-2">
        Search
      </button>
    </form>
  );
};

export default UserForm;
