import React, {createContext, useState} from 'react';

export default ({children}) => {
    const [routeName] = useState({});
    const [isSearchingOnHome, setIsSearchingOnHome] = useState(false);
    return (
        <AppContext.Provider value={[routeName, isSearchingOnHome, setIsSearchingOnHome]}>
            {children}
        </AppContext.Provider>
    );
};

export const AppContext = createContext();