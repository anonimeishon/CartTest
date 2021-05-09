import axios from 'axios';

const publicFetch = axios.create({
    baseURL: 'http://localhost:5001/api'
});

export default publicFetch;