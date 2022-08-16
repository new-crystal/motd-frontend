import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

export const apis = {
  // post
  add: (contents) => api.post("/api/posts", contents),
  edit: (id, contents) => api.put(`api/posts/${id}`, contents),
  del: (id) => api.delete(`api/posts/${id}`),
  posts: () => api.get("/api/posts"),
  post: (id) => api.get(`/api/posts/${id}`),
  search: (value) => api.get(`/api/posts/search?query=${value}`),

  // comment
  addComment: (id, content) =>
    api.post(`/api/articles/${id}/comments`, { content }),
  comments: (id) => api.get(`/api/articles/${id}/comments`),
  delComment: (id, coId) => api.delete(`/api/musics/${id}/comments/${coId}`),
  editComment: (id, coId, content) =>
    api.put(`/api/articles/${id}/comments/${coId}`, { content }),
};
