import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProfile = ({ setProfiles }) => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "",
    image: "",
    description: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const newProfile = { 
      ...profile, 
      id: Date.now() 
    };

    setProfiles((prevProfiles) => [...prevProfiles, newProfile]);

    
    navigate("/admin/manage-profiles");
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Add New Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input input-bordered w-full"
          value={profile.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="input input-bordered w-full"
          value={profile.image}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="input input-bordered w-full"
          value={profile.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          className="input input-bordered w-full"
          value={profile.address}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary w-full">
          Add Profile
        </button>
      </form>
    </div>
  );
};

export default AddProfile;
