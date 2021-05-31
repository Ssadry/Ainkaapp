import React, {createContext, useState} from 'react';

export default ({children}) => {
    const [popUpIsVisible, setPopUpIsVisible] = useState(false);

    return (
        <AppContext.Provider value={[popUpIsVisible, setPopUpIsVisible]}>
            {children}
        </AppContext.Provider>
    )
}

export const AppContext = createContext();