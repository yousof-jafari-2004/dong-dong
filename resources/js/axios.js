import axios from 'axios';
import store from './store'

const axiosClient = axios.create({
    baseURL: `https://dong.liara.run/api`,
});

axiosClient.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${store.state.user.user.token}`
    return config
})

export default axiosClient