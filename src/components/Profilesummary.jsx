import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MapComponent from './Mapcomponent'; 

const Profilesummary = () => {
  const { id } = useParams(); 
  const [profile, setProfile] = useState(null);

  useEffect(() => {
   
    const profiles = [
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

    
    const selectedProfile = profiles.find((profile) => profile.id === parseInt(id));
    setProfile(selectedProfile);
  }, [id]); 

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center">
     
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-2">{profile.name}</h2>
        <img
          src={profile.image}
          alt={profile.name}
          className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
        />
        <p className="text-lg">{profile.description}</p>
        <p className="text-md text-gray-500">{profile.address}</p>
      </div>

      
      <div className="w-full max-w-4xl">
        <MapComponent latitude={profile.latitude} longitude={profile.longitude} />
      </div>
    </div>
  );
};

export default Profilesummary;



