import firebase, {db} from '../application/firebase';

const collections = {
    users : 'users',
    services : 'services'
}

export const addUser = async(name, lastName) => await
    db
        .collection(collections.users)
        .doc(firebase.auth().currentUser.uid)
        .set({
            name: name,
            lastName: lastName
        })

export const signUp = async(email, password) => await 
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

export const logIn = async(email, password) => await 
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

export const logOut = async() => await
    firebase
        .auth()
        .signOut();

export const addService = async(title, location, description, category, time, modality, freeNegotitation) => await
    db
        .collection(collections.users)
        .doc(firebase.auth().currentUser.uid)
        .collection(collections.services)
        .add({
            title: title,
            location: location,
            description: description,
            category: category,
            time: time,
            modality: modality,
            freeNegotitation: freeNegotitation
        });


export const addNeed = async() => await alert("ñeeee");