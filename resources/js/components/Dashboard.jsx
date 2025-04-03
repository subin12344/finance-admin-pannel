import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <div className="sidebar-header">
                    <h3>Dashboard</h3>
                </div>
                <ul className="sidebar-menu">
                    <li>
                        <a href="/dashboard">Home</a>
                    </li>
                    <li>
                        <a href="/profile">Customer</a>
                    </li>
                    <li>
                        <a href="/settings">Settings</a>
                    </li>
                    <li>
                        <button onClick={handleLogout} className="logout-button">Logout</button>
                    </li>
                </ul>
            </div>

            {/* Main content */}
            <div className="dashboard-content">
                <h1>Welcome, {user?.name || 'User'}!</h1>
                <p>Your dashboard is ready.</p>
            </div>
        </div>
    );
};

export default Dashboard;
