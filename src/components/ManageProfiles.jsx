import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ManageProfiles = ({ profiles, setProfiles }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    if (profiles.length > 0) {
      setLoading(false);
    }
  }, [profiles]);

  const handleDelete = (id) => {
    
    const updatedProfiles = profiles.filter(profile => profile.id !== id);
    setProfiles(updatedProfiles); 
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Manage Profiles</h1>

      <Link to="/admin/add-profile" className="btn btn-primary mb-4">Add New Profile</Link>

      {loading ? (
        <div>Loading profiles...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {profiles.map((profile) => (
            <div key={profile.id} className="card bg-base-100 shadow-lg p-4">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-32 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-2">{profile.name}</h3>
              <p>{profile.description}</p>
              <p>{profile.address}</p>
              <div className="flex justify-between mt-4">
                <Link to={`/admin/edit-profile/${profile.id}`} className="btn btn-secondary">Edit</Link>
                <button
                  onClick={() => handleDelete(profile.id)}
                  className="btn btn-error"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageProfiles;
