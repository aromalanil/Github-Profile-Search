import React from "react";

const Card = ({ profile }) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <img className="card-img" src={profile.avatar_url} alt="" />
        <h2 className="card-title">{profile.name ? profile.name : profile.login}</h2>
        <h4 className="location">{profile.location ? profile.location : 'Location not provided'}</h4>
        <p>{profile.bio ? profile.bio : `The github profile @${profile.login} have not provided a bio`}</p>
        <a className="card-btn" target="_blank" rel="noopener noreferrer" href={profile.html_url}>Visit Profile</a>
      </div>
    </div>
  );
};

export default Card;
