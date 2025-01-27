
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
import { post } from '../services/api';
export const loginApi = (password) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {

        const response = await post('/login', { password });

        const token = response?.token;
        const user = response?.name;
     
        localStorage.setItem('authToken', token);
        dispatch({ type: LOGIN_SUCCESS, payload: user });
    } catch (error) {
        console.error('Error during login:', error);
        dispatch({ type: LOGIN_FAILURE, payload: error?.response?.data?.message });
        throw error;
    }
};
