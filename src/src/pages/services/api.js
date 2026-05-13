import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const postsAPI = {
  // This satisfies your role: Uses postsAPI.getAll(params) with query strings
  getAll: async (params) => {
    const response = await axios.get(`${API_URL}/posts`, { params });
    return response.data;
  },
};