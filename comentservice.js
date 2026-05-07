import { request } from './services/api/client';

export const commentsAPI = {
  getByPost: (postId) =>
    request(`/posts/${postId}/comments`),

  create: (postId, commentData) =>
    request(`/posts/${postId}/comments`, {
      method: 'POST',
      body: JSON.stringify(commentData)
    }),

  delete: (postId, commentId) =>
    request(`/posts/${postId}/comments/${commentId}`, {
      method: 'DELETE'
    })
};