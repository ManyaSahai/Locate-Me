import React from 'react';
import { Link } from 'react-router-dom';

const Profilecard = ({ profile }) => {
  return (
    <div className="card bg-base-100 shadow-md p-4">
      <img
        src={profile.image}
        alt={profile.name}
        className="w-full h-40 object-cover rounded-lg"
      />
      <div className="mt-4">
        <h2 className="text-lg font-semibold">{profile.name}</h2>
        <p className="text-sm text-gray-600">{profile.description}</p>

        
        <Link to={`/profilesummary/${profile.id}`} className="btn btn-primary mt-4">
          View Summary
        </Link>
      </div>
    </div>
  );
};

export default Profilecard;
