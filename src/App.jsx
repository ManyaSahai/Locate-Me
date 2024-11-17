import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditProfile from "./components/EditProfile";
import ManageProfiles from "./components/ManageProfiles";
import Navbar from "./components/Navbar";
import Profilelist from "./components/Profilelist";
import AddProfile from "./components/AddProfile";
import ProfileSummary from "./components/Profilesummary";
import Footer from "./components/Footer";
import About from "./components/About"; 
import 'leaflet/dist/leaflet.css';

const initialProfiles = [
  {
    id: 1,
    name: "John Doe",
    image: "https://via.placeholder.com/150",
    description: "Software Developer from New York.",
    address: "New York, USA",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://via.placeholder.com/150",
    description: "UI/UX Designer from San Francisco.",
    address: "San Francisco, USA",
  },
  {
    id: 3,
    name: "Michael Johnson",
    image: "https://via.placeholder.com/150",
    description: "Data Scientist from Chicago.",
    address: "Chicago, USA",
  },
  {
    id: 4,
    name: "Emily Davis",
    image: "https://via.placeholder.com/150",
    description: "Marketing Specialist from Los Angeles.",
    address: "Los Angeles, USA",
  },
  {
    id: 5,
    name: "David Brown",
    image: "https://via.placeholder.com/150",
    description: "Project Manager from Austin.",
    address: "Austin, USA",
  },
  {
    id: 6,
    name: "Sophia Wilson",
    image: "https://via.placeholder.com/150",
    description: "AI Researcher from Boston.",
    address: "Boston, USA",
  },
];

function App() {
  const [profiles, setProfiles] = useState(initialProfiles);

  return (
    <Router>
      <div className="dark:bg-slate-900 dark:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Profilelist profiles={profiles} />} />
          <Route path="/profilesummary/:id" element={<ProfileSummary profiles={profiles} />} />
          <Route path="/admin/manage-profiles" element={<ManageProfiles profiles={profiles} setProfiles={setProfiles} />} />
          <Route path="/admin/edit-profile/:id" element={<EditProfile profiles={profiles} setProfiles={setProfiles} />} />
          <Route path="/admin/add-profile" element={<AddProfile setProfiles={setProfiles} />} />
          <Route path="/about" element={<About />} /> 
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
