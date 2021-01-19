import axios from 'axios';

export const apiClient = axios.create({
	baseURL: process.env.API_URL
});

apiClient.interceptors.request.use(request => {
	const token = localStorage.getItem('token');
	request.headers['Authorization'] = `Bearer ${token}`;
	request.headers['Content-Type'] = 'application/json';
	return request;
});

apiClient.interceptors.response.use(
	response => response,
	error => {
		debugger;
		return error;
		// TODO: if 401 clear the token and logout
	}
);
