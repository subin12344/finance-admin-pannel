import React from 'react';
import { NavLink } from 'react-router-dom'; // For active link styling

const Sidebar = () => {
  return (
    <div
      className="bg-dark text-white vh-100 p-3"
      style={{ width: '250px', position: 'fixed', top: 0, left: 0 }}
    >
      <h4 className="text-center mb-4">Admin Panel</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? 'bg-primary' : ''}`
            }
            end
          >
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/users"
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? 'bg-primary' : ''}`
            }
          >
            Users
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/dashboard/settings"
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? 'bg-primary' : ''}`
            }
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
