import React from 'react';
import axios from 'axios';

export const post = async(url, params) => {
    await axios
        .post(url, params)
        .then(response => {
            const {data} = response;
            console.log(data);
        })
        .catch(err => console.log(err)
    );
};



export const getServiceById = (id) => {
    let data = null;
    const params = new URLSearchParams();
    params.append('ID', id);
    axios
        .post('https://pablomonteserin.com/sites/ainkaa/index.php/services/showservices', params)
        .then(response => data = response.data)
        .catch(err => console.log(err)
    );
    return data;
}

export const get = (url) => {
    axios
        .get(url)
        .then(res => console.log(res.data))
        .catch(err => console.log(err)
    );
}