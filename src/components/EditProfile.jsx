import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProfile = ({ profiles, setProfiles }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [profile, setProfile] = useState({
    name: "",
    image: "",
    description: "",
    address: "",
  });

  useEffect(() => {
    
    const selectedProfile = profiles.find((profile) => profile.id === parseInt(id));
    
    
    if (selectedProfile) {
      setProfile(selectedProfile); 
    }
  }, [id, profiles]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevState) => ({ ...prevState, [name]: value })); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    const updatedProfiles = profiles.map((item) =>
      item.id === parseInt(id) ? { ...item, ...profile } : item
    );
  
    console.log("Updated Profiles:", updatedProfiles); 
    setProfiles(updatedProfiles); 
    

    navigate("/admin/manage-profiles");
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full"
            value={profile.name}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm">Image URL</label>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            className="input input-bordered w-full"
            value={profile.image}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm">Description</label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            className="input input-bordered w-full"
            value={profile.description}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm">Address</label>
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="input input-bordered w-full"
            value={profile.address}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
