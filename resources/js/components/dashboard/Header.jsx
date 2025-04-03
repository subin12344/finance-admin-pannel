import React from 'react';

const Header = ({ user, onLogout }) => {
  return (
    <header className="bg-primary text-white p-3 d-flex justify-content-between align-items-center">
      <h3>Welcome, {user?.name || 'Admin'}</h3>
      <button className="btn btn-light" onClick={onLogout}>
        Logout
      </button>
    </header>
  );
};

export default Header;
