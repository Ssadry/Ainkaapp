import React from 'react';
import axios from 'axios';

export const post = (url, params) => {
    axios
        .post(url, params)
        .then(response => console.log(response.data))
        .catch(err => console.log(err)
    );
};

export const getServiceById = (id) => {
    let [data, setData] = React.useState();
    const params = new URLSearchParams();
    params.append('ID', id);
    axios
        .post('https://pablomonteserin.com/sites/ainkaa/index.php/services/showservices', params)
        .then(response => setData(response.data))
        .catch(err => console.log(err)
    );
    return data;
}

export const get = (url) => {
    const [data, setData] = React.useState();
    axios
        .get(url)
        .then(res => setData(res.data))
        .catch(err => console.log(err)
    );
    return data;
}