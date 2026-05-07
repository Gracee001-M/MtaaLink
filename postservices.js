import { request } from './services/api/client';

export const postsAPI = {
  getAll: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/posts${query ? `?${query}` : ''}`);
  },

  getById: (id) => request(`/posts/${id}`),

  create: (postData) =>
    request('/posts', {
      method: 'POST',
      body: JSON.stringify(postData)
    }),

  update: (id, postData) =>
    request(`/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(postData)
    }),

  delete: (id) =>
    request(`/posts/${id}`, {
      method: 'DELETE'
    }),

  like: (id) =>
    request(`/posts/${id}/like`, {
      method: 'POST'
    })
};