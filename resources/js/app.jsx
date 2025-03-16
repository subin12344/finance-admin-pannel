import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { userRoutes, authRoutes } from "./routes/allRoute"; // Ensure routes are correctly imported
import Authmiddleware from "./routes/middleware/AuthMiddleware"; // Correct import for Authmiddleware
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store';
import '../css/app.css';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    {/* Non-authenticated routes */}
                    {authRoutes.map((route, idx) => (
                        <Route
                            key={idx}
                            path={route.path}
                            element={route.component} // Directly rendering the component for non-auth routes
                        />
                    ))}

                    {/* Authenticated routes */}
                    {userRoutes.map((route, idx) => (
                        <Route
                            key={idx}
                            path={route.path}
                            element={
                                <Authmiddleware>
                                    {route.component}{" "}
                                    {/* Render component with Authmiddleware for authentication */}
                                </Authmiddleware>
                            }
                        />
                    ))}
                </Routes>
            </Router>
        </Provider>
    );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(React.createElement(App));
