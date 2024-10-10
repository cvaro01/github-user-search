import React, { useState } from "react";
import UserForm from "./userform";
import UserDetails from "./userdetails";
import "./App.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  const fetchGitHubUser = async (username) => {
    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      if (!userResponse.ok) {
        throw new Error("User not found");
      }
      const userData = await userResponse.json();
      setUserData(userData);

      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      const reposData = await reposResponse.json();
      setRepos(reposData);
    } catch (error) {
      console.error("Error fetching data from GitHub:", error);
    }
  };

  const handleReset = () => {
    setUsername("");
    setUserData(null);
    setRepos([]);
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">GitHub User Search</h1>
      {!userData ? (
        <UserForm username={username} setUsername={setUsername} fetchGitHubUser={fetchGitHubUser} />
      ) : (
        <UserDetails userData={userData} repos={repos} handleReset={handleReset} />
      )}
    </div>
  );
};

export default App;
