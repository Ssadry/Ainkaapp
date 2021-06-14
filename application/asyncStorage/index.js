import AsyncStorage from '@react-native-async-storage/async-storage';

// export const storeData = async(key, value) => {
//     try {
//         await AsyncStorage.setItem(key, value);
//     } catch (e) {
//         console.error(e);
//     };
// };

// export const getData = async(key) => {
//     try {
//         const value = await AsyncStorage.getItem(key);
//         if (value !== null) return value;
//     } catch (e) {
//         console.error(e);
//     };
// };

export const storeObjectData = async(key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        console.error(e);
    };
};

export const getObjectData = async(key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.error(e);
    };
};

export const getAll = async() => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        if (keys != null) return await AsyncStorage.multiGet(keys);
    } catch (e) {
        console.error(e);
    };
};

export const clear = async() => {
    await AsyncStorage.clear();
};

export const removeData = async(key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        console.error(e);
    }
};