import axios from "axios";

const api = axios.create({
  baseURL: "https://s-l-backend-production.up.railway.app",
});

export const sendContactForm = (data) => api.post("/api/contact", data);

export const subscribeNewsletter = (data) =>
  api.post("/api/newsletter/subscribe", data);

export const bookTour = (data) => api.post("/api/book-a-tour", data);

export const becomeAffiliate = (data) => api.post("/api/affiliate", data);

export default api;
