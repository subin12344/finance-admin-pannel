import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const { user } = useSelector((state) => state.auth);

    return (
        <div className="dashboard-container">
            <h1>Welcome, {user?.name || 'User'}!</h1>
        </div>
    );
};

export default Dashboard;
