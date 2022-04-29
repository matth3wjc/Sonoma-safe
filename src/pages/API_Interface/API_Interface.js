import axios from 'axios';

const AxiosConfigured = () => {
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    axios.defaults.baseURL = `http://localhost:8443/api/v1`;
    axios.defaults.withCredentials = true;
    return axios;
};

const axiosAgent = AxiosConfigured();

export default class APIInterface {
    async getUserInfo(email) {
        return axiosAgent.get(`login/${email}`)
            .then(userInfo => userInfo.data)
            .catch(error => (
                {
                    error,
                    user: undefined
                }));
    }
}

