import React, { useState, useEffect } from "react"; 
import axios from "axios"; 
const API_URL = "http://localhost:5005"; 
const AuthContext = React.createContext(); 

function AuthProviderWrapper(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const [isLoading, setIsLoading] = useState(true); 
    const [user, setUser] = useState(null); 


    const storeToken = (token) => {
        localStorage.setItem("authToken", token);
    }

    const verifyStoredToken = () => {
        // ... no changes
    }

    const removeToken = () => {
        // upon logout, remove token from localStorage 
        localStorage.removeItem("authToken"); 
    } 

    const logOutUser = () => {
        // to log out the user, remove the token 
        removeToken(); 
        // and update state variables 
        authenticateUser();
    }

    const authenticateUser = () => {
        // get stored token from localStorage
        const storedToken = localStorage.getItem('authToken');

        // if token exists in localStorage 
        if (storedToken) {
            // need to send JWT token in request's "Authorization" Headers
            axios.get(
                `${API_URL}/auth/verify`,
                { headers: { Authorization: `Bearer ${storedToken}`} }
            )
            .then((response) => {
                // if server verifies that JWT token is valid 
                const user = response.data; 
                // update state variables 
                setIsLoggedIn(true); 
                setIsLoading(false); 
                setUser(user);
            })
            .catch((error) => {
                // if server sends an error response (invalid token) 
                // update state variables 
                setIsLoggedIn(false); 
                setIsLoading(false); 
                setUser(null);
            });
        } else {
            // if token is not available (or is removed) 
            setIsLoggedIn(false); 
            setIsLoading(false); 
            setUser(null);
        }
    }


    useEffect(() => {
        authenticateUser();
    }, []);


    return (
        <AuthContext.Provider value={{ isLoggedIn, isLoading, user, storeToken, authenticateUser, logOutUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthProviderWrapper, AuthContext };