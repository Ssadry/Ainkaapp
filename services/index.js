import axios from 'axios';

const URL = 'https://pablomonteserin.com/sites/ainkaa/index.php/';

//USERS
export const login = async params => await axios.post(`${URL}users/login`, params);

export const signup = async params => await axios.post(`${URL}users/register`, params);


//SERVICES
export const listServices = async() => await axios.get(`${URL}services/showlistservices`);

export const createService = async(params) => await axios.post(`${URL}services/postservices`, params);

export const getServiceById = async(id) => {
    const params = new URLSearchParams();
    params.append('ID', id);

    return await axios.post(`${URL}services/showservices`, params)
};