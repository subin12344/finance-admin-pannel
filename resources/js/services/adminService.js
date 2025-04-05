import api from './api';

export const getUsers = async () => {
  const response = await api.get('customers/search');
  return response.data;
};
