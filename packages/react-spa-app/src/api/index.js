import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api-football-standings.azharimm.site',
	timeout: 60000,
});

api.interceptors.response.use(res => {
	return res.data;
}, err => {
	return Promise.reject(err)
})

export default api;