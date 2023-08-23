import { useEffect, useState } from "react";
import { useContext } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";


const { createContext } = require("react");


const authContext = createContext({});

export const AuthContextProvider = (props) => {
    const [user, setUser] = useState(null);

    const authStateChangedHandler = (currentUser) => {
        if (!currentUser) {
            setUser(null);
            return;
        }
        setUser(currentUser)
    }

    const signOutHandler = async () => {
        try {
            await signOut(auth);

            setUser(null)
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, authStateChangedHandler)
        return () => unsub;
    }, [])

    return (
        <authContext.Provider value={{ user, setUser, signOutHandler }}>
            {props.children}
        </authContext.Provider>
    )
}

const useAuth = () => useContext(authContext);
export default useAuth;