// import axios from 'axios';

// const URL = 'https://pablomonteserin.com/sites/ainkaa/index.php/';

// //USERS
// export const login = async params => await axios.post(`${URL}users/login`, params);

// export const signup = async params => await axios.post(`${URL}users/register`, params);


// //SERVICES
// export const listServices = async() => await axios.get(`${URL}services/showlistservices`);

// export const createService = async(params) => await axios.post(`${URL}services/postservices`, params);

// export const getServiceById = async(id) => {
//     const params = new URLSearchParams();
//     params.append('ID', id);
//     return await axios.post(`${URL}services/showservices`, params)
// };

// export const listCities = async() => await axios.post(`${URL}locations/recover`);

// export const getCityById = async(id) => {
//     const params = new URLSearchParams();
//     params.append('IDlocation', id);
//     return await axios.post(`${URL}locations/recoverbyid`, params);
// };

import firebase, {db} from '../application/firebase';

const tables = {
    users : 'users'
}

export const addUser = async(email, password, name, lastName) => await 
    db.collection(tables.users).add({
        email: email,
        password: password,
        name: name,
        lastName: lastName
    }
);

export const getUserByEmail = async(email) => await db.collection(tables.users).where('email', '==', email).get();

export const signUp = async(email, password, name, lastName) => await 
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(_ => {
            const user = firebase.auth().currentUser;

            user.updateProfile({
                displayName: `${name, lastName}`,
                photoURL: 'ñe'
            })
        })
        .catch(err => console.log(err));


export const logIn = async(email, password) => await 
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
