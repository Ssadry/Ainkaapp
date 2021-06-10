import React, {createContext, useState} from 'react';

export default ({children}) => {
    const [routeName] = useState({});
    return (
        <AppContext.Provider value={[routeName]}>
            {children}
        </AppContext.Provider>
    )
}

export const AppContext = createContext();