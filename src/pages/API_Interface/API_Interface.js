import axios from 'axios';

const AxiosConfigured = () => {
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    axios.defaults.baseURL = `http://localhost:8443/api/v1`;
    axios.defaults.withCredentials = true;
    return axios;
};

const axiosAgent = AxiosConfigured();

export default class APIInterface {
    async getUserInfo(email, password) {
        return axiosAgent.get(`login/${email}/${password}`)
            .then(userInfo => userInfo.data)
            .catch(error => (
                {
                    error,
                    user: undefined
                }));
    }

    async addmarkers(email, m1lat, m1lng, m2lat, m2lng, m3lat, m3lng) {
        return axiosAgent.put(`/login/${email}/${m1lat}/${m1lng}/${m2lat}/${m2lng}/${m3lat}/${m3lng}`);
    }

    async changepassword(email, password, newPassword) {
        return axiosAgent.put(`/login/${email}/${password}/${newPassword}`);
    }

    addUser(email, password) {
        return axiosAgent.post(`/login/${email}/${password}`);
    }

    removeUser(email) {
        return axiosAgent.put(`/login/remove/${email}`);
    }
}