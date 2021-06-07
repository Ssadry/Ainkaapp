import React from 'react';
import axios from 'axios';

export const setAccount = () => {
    axios.post(
        'https://digiapp.es/apptemps/index.php/register', 
        QueryString.stringify({
            EmailUser: 'EmailUser',
            PassUser : 'PassUser',
            NameUser : 'NameUser',
            LastNameUser  : 'LastNameUser ',
        }), {
        headers: {
            "Content-Type": "application/json",
        }
    }).then(response => {
        console.log(response.data)
    }).catch(err => console.log("api Erorr: ", err.response)
)
}

export const getAccount = async() => {
    const [response, setResponse] = React.useState({});
    try {
        axios
            .get('https://digiapp.es/apptemps/index.php/register')
            .then(res => setResponse(res.json()))
    } catch(error) {
        console.log(error)
    }

    return response;
}

axios.post(
        'http://api.apiurl.com/token', 
        QueryString.stringify({
            grant_type: 'MY_GRANT_TYPE',
            username: 'MY_USERNAME',
            password: 'MY_PASSWORD'
        }), {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    }).then(response => {
        console.log(response.data)
    }).catch(err => console.log("api Erorr: ", err.response)
)