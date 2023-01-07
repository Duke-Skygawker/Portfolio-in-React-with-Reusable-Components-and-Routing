import { useState, useEffect } from "react";
import Link from "../components/Link";
import "./Profile.css";

function Profile({ userName }) {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});
  useEffect(() => {
    async function fetchData() {
      const profile = await fetch(`https://api.github.com/users/${userName}`);
      const result = await profile.json();
      if (result) {
        setProfile(result);
        setLoading(false);
      }
    }
    fetchData();
  }, [userName]);
  return (
    <div className="profile-container">
      <h2>About me</h2>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div className="profile-container">
          <img
            className="profile-avatar"
            src={profile.avatar_url}
            alt={profile.name}
          />
          <ul>
            <li>
              <span>html_url: </span>
              <Link url={profile.html_url} title="My Github" />
            </li>
            <li>
              <span>repos_url: </span>
              <Link url={profile.repos_url} title="My Repos" />
            </li>
            <li>
              <span>name:</span> {profile.name}
            </li>
            <li>
              <span>company:</span> {profile.company}
            </li>
            <li>
              <span>location:</span> {profile.location}
            </li>
            <li>
              <span>email:</span> {profile.email}
            </li>
            <li>
              <span>bio:</span> {profile.bio}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
export default Profile;
