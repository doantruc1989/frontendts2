import axios from 'axios';
const token = localStorage.hasOwnProperty('user') ? JSON.parse(localStorage.getItem('user') || '{}').access_token : '';
const config = {
    baseURL: 'https://quocson.fatcatweb.top/',
    headers: { Authorization: `Bearer ${token}` },
};

console.log(token)

// if (user) {
//     const token = localStorage.hasOwnProperty('user') ? (JSON.parse(user)).access_token : '';
//     config.headers = { 'Authorization': 'Bearer ' + token };
// }

const instance = axios.create(config);

export default instance;