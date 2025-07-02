import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import { useState } from 'react';

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup setUserData={setUserData} />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile userData={userData} />} />
    </Routes>
  );
}

export default App;