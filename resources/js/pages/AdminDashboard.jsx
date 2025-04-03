import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { getUsers } from '../services/adminService';
import { logout } from '../services/authService';
import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';
// import UserTable from '../components/dashboard/UserTable';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers()
      .then((data) => setUsers(data))
      .catch((error) => console.error('Failed to fetch users', error));
  }, []);

  const handleLogout = async () => {
    await logout();
    setUser(null);
    navigate('/login');
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header user={user} onLogout={handleLogout} />
        <h1>Admin Dashboard</h1>
        
      </div>
    </div>
  );
};

export default AdminDashboard;
