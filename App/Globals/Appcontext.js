import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
    const [userUID, setUserUID] = useState('');
    const [signedIn, setSignedIn] = useState(false);
    const [preloader, setPreloader] = useState(false);
    const [expoPushToken, setExpoPushToken] = useState('');

    function sendNotification(title, body) {
        const message = {
            to: expoPushToken,
            sound: "default",
            title,
            body
        }
        fetch("https://exp.host/--/api/v2/push/send", {
            method: "POST",
            headers: {
                host: "exp.host",
                accept: "application/json",
                "accept-encoding": "gzip, deflate",
                "content-type": "application/json"
            },
            body: JSON.stringify(message),
        })
            .then((d) => console.log(title, body))
            .catch(e => console.log(e))
    }

    return (
        <AppContext.Provider value={{
            userUID,
            setUserUID,
            signedIn,
            setSignedIn,
            preloader,
            setPreloader,
            expoPushToken, setExpoPushToken,
            sendNotification,
        }}
        >
            {children}
        </AppContext.Provider>
    )
};
