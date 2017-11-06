import axios from 'axios'

const api = 'http://localhost:3001/'

// Generate a unique token for storing your bookshelf data on the backend server.
let { token } = localStorage
if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8)
}

const headers = {
  Accept: 'application/json',
  Authorization: token,
  'Content-Type': 'application/json',
}

const axiosInstance = axios.create({
  baseURL: api,
  headers,
})

export default {
  get: url => axiosInstance.get(url, headers),
  post: (url, params) => axiosInstance.post(url, params, headers),
  put: (url, params) => axiosInstance.post(url, params, headers),
  delete: url => axiosInstance.delete(url, headers),
}
