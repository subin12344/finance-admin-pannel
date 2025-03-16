import axios from "axios"
import { authHeader } from './jwt-token-access/auth-token-header';

//pass new generated access token here
const token = authHeader()

//apply base url for axios
// const API_URL = "http://127.0.0.1:8000/api/v1/admin/"

const API_URL = window['APP_BASE_URL']
const axiosApi = axios.create({
  baseURL: API_URL,
})

console.log("Token:", token)


axiosApi.defaults.headers.common['Authorization'] =
  'Bearer ' + token.Authorization;
axiosApi.defaults.headers.common['X-CSRF-TOKEN'] = window['csrf_token'];


axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export async function get(url, config = {}) {
  console.log(url, config, "url, config", axiosApi)
  return await axiosApi.get(url, { ...config }).then(response => response.data)
}

export async function post(url, data, config = {}) {
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then(response => response.data)
}
export async function FormDatapost(url, data, config = {}) {
  return axiosApi.post(url, data, config)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}
export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then(response => response.data)
}
