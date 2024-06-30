// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3001'; // Make sure this matches your NestJS backend port

export const login = (credentials) => axios.post(`${API_URL}/auth/login`, credentials);
export const register = (data) => axios.post(`${API_URL}/auth/register`, data);
export const getBooks = () => axios.get(`${API_URL}/books`);
export const getUser = (id) => axios.get(`${API_URL}/users/${id}`);


// export const getBooks = () => axios.get(`${API_URL}/books`);
export const createBook = (book) => axios.post(`${API_URL}/books`, book);