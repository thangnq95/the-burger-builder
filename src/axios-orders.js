import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://theburgerbuilder-39e77.firebaseio.com/'
});

export default instance;