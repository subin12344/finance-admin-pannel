import axios from 'axios';

// Create an Axios instance
const axiosApi = axios.create({
  baseURL: `${window['APP_API_URL']}`,  // Use your API base URL here
  headers: {
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': window['csrf_token'], // CSRF token if needed
  },
});


axiosApi.interceptors.request.use(
  config => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Intercept responses if needed (for handling errors globally)
axiosApi.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      // Handle token expiry or unauthorized requests
      localStorage.removeItem('authToken');
      window.location.replace('/login'); // Redirect to login page
    }
    return Promise.reject(error);
  }
);

// Helper functions to handle common HTTP methods
export const get = async (url, config = {}) => {
  try {
    const response = await axiosApi.get(url, { ...config });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const post = async (url, data, config = {}) => {
  try {
    const response = await axiosApi.post(url, data, { ...config });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const put = async (url, data, config = {}) => {
  try {
    const response = await axiosApi.put(url, data, { ...config });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const del = async (url, config = {}) => {
  try {
    const response = await axiosApi.delete(url, { ...config });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
