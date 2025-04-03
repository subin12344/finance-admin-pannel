import api from './api';

export const login = async (credentials) => {
  const response = await api.post('/login', credentials);
  return response.data; // { token, user }
};

export const logout = async () => {
  await api.post('/logout');
  localStorage.removeItem('token');
};

export const getUser = async () => {
  const response = await api.get('/user');
  return response.data;
};
