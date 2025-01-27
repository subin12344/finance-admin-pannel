import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../store/actions';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        const { password } = data;
        try {
             await dispatch(loginApi(password));
            navigate('/dashboard');
        } catch (error) {
            setMessage(error?.response?.data?.message);
        }
    };

    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="login-container">
                <div className="login-box">
                    <h2 className="login-title">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label className="form-label">Password:</label>
                            <input
                                type="password"
                                className="form-input"
                                {...register('password', { required: 'Password is required' })}
                            />
                            {errors.password && <p className="error-message">{errors.password.message}</p>}
                        </div>
                        <button type="submit" className="form-button">
                            Login
                        </button>
                    </form>
                    {message && (
                        <p className={`message ${message.includes('successful') ? 'success' : 'error'}`}>
                            {message}
                        </p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Login;
