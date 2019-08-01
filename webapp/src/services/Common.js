import axios from 'axios';

let apiEndpoint =  process.env.REACT_APP_ServiveAPIURL;
console.log(process.env)
const Service = axios.create({
    baseURL: apiEndpoint,
});

export function get(apiUrl) {
    return Promise.resolve(Service.get(`${apiEndpoint}${apiUrl}`, {
        headers: {}
    }));
}

export function post(apiUrl, postData) {
    return Promise.resolve(Service.post(`${apiEndpoint}${apiUrl}`, postData, {
        headers: {}
    }));
}