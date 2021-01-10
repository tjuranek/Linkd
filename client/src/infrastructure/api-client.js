import axios from 'axios';

const apiUrl = 'http://localhost:1234';

const apiClient = axios.create({
	baseUrl: apiUrl
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
		// TODO: if 401 clear the token and logout
	}
);
