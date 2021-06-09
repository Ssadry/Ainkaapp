import firebase from 'firebase/app'
import '@firebase/auth';
import '@firebase/firestore';

export const firebaseConfig = {
    apiKey: 'AIzaSyDbQTjRakRPmgCpMEN5zvwnzFAHd22HnZ8',
    authDomain: 'ainkaa-adb34.firebaseapp.com',
    projectId: 'ainkaa-adb34',
    storageBucket: "ainkaa-adb34.appspot.com",
    // databaseUrl: 'https://eldiariodepapa-default-rtdb.firebaseio.com/' // Para aplicaciones con en tiempo real
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
export default firebase;
