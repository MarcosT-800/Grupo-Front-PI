import axios from 'axios';

// const BASE_URL = process.env.API_URL;

export const publicApi = axios.create({
	baseURL: process.env.BASE_URL,
});
