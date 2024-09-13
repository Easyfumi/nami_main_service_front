import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8000/api/requests';

export const listTest = () => {
    return axios.get(REST_API_BASE_URL);
}