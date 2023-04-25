import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
    const [userUID, setUserUID] = useState('');
    const [signedIn, setSignedIn] = useState(false);
    const [preloader, setPreloader] = useState(false);

    return (
        <AppContext.Provider value={{
            userUID,
            setUserUID,
            signedIn,
            setSignedIn,
            preloader,
            setPreloader,
        }}
        >
            {children}
        </AppContext.Provider>
    )
};
