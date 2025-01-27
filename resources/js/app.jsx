import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store'; // Import the Redux store (make sure to create it properly)
import Login from './components/login';
import '../css/app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';


function App() {
    return (
        <Provider store={store}>
             <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </Router>
        </Provider>
    );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(React.createElement(App));
