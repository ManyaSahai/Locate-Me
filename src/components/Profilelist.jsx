import React, { useState, useEffect } from "react";
import ProfileCard from "./Profilecard"; 
import ProfileSummary from "./Profilesummary"; 

const Profilelist = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProfile, setSelectedProfile] = useState(null);

  
  useEffect(() => {
    const mockProfiles = [
      {
        id: 1,
        name: "John Doe",
        image: "https://via.placeholder.com/150",
        description: "Software Developer from New York.",
        address: "New York, USA",
        latitude: 40.7128,
        longitude: -74.0060,
      },
      {
        id: 2,
        name: "Jane Smith",
        image: "https://via.placeholder.com/150",
        description: "UI/UX Designer from San Francisco.",
        address: "San Francisco, USA",
        latitude: 37.7749,
        longitude: -122.4194,
      },
      {
        id: 3,
        name: "Michael Johnson",
        image: "https://via.placeholder.com/150",
        description: "Data Scientist from Chicago.",
        address: "Chicago, USA",
        latitude: 41.8781,
        longitude: -87.6298,
      },
      {
        id: 4,
        name: "Emily Davis",
        image: "https://via.placeholder.com/150",
        description: "Marketing Specialist from Los Angeles.",
        address: "Los Angeles, USA",
        latitude: 34.0522,
        longitude: -118.2437,
      },
      {
        id: 5,
        name: "David Brown",
        image: "https://via.placeholder.com/150",
        description: "Project Manager from Austin.",
        address: "Austin, USA",
        latitude: 30.2672,
        longitude: -97.7431,
      },
      {
        id: 6,
        name: "Sophia Wilson",
        image: "https://via.placeholder.com/150",
        description: "AI Researcher from Boston.",
        address: "Boston, USA",
        latitude: 42.3601,
        longitude: -71.0589,
      },
    ];


    setTimeout(() => {
      setProfiles(mockProfiles);
      setLoading(false);
    }, 1000); 
  }, []);

 
  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile); 
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Profiles</h1>

   
      <input
        type="text"
        placeholder="Search profiles..."
        className="input input-bordered w-full mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      
      {loading ? (
        <div className="text-center">Loading profiles...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProfiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              onSummaryClick={handleSummaryClick} 
            />
          ))}
        </div>
      )}

     
      {selectedProfile && (
        <div className="mt-6">
          <ProfileSummary profile={selectedProfile} />
        </div>
      )}
    </div>
  );
};

export default Profilelist;




