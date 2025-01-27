import { takeEvery, call, put } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actions';
import { post } from '../services/api';

function* handleLogin(action) {
    try {
        console.log('Handling login request:', action);
        const response = yield call(post, '/login', { password: action.payload });
        console.log('API response:', response);

        // Extract data from response
        const { token, user } = response.data;

        // Save token to localStorage
        localStorage.setItem('authToken', token);

        // Dispatch success action
        yield put({ type: LOGIN_SUCCESS, payload: user });
    } catch (error) {
        console.error('Login error:', error);
        // Dispatch failure action with error message
        yield put({
            type: LOGIN_FAILURE,
            payload: error?.response?.data?.message || 'An unexpected error occurred.',
        });
    }
}

export function* watchLogin() {
    yield takeEvery(LOGIN_REQUEST, handleLogin);
}
