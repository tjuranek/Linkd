import axios from 'axios';
import { browserHistory } from 'react-router';
import { getToken } from './token-service';

const apiUrl = 'http://localhost:1234';

const apiClient = axios.create({
	baseUrl: apiUrl
});

// attatch token to request
apiClient.interceptors.request.use(
	config => {
		const token = getToken();
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`;
			config.headers['Content-Type'] = 'application/json';
		}
		return config;
	},
	error => {
		Promise.reject(error);
	}
);

apiClient.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		const request = error.config;

		if (error.response.status === 401) {
			return Promise.reject(error);
		}
	}
);
