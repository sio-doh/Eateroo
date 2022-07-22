import { useContext } from "react"; 
import { AuthContext } from "../context/auth.context"; 
import { Navigate } from "react-router-dom"; 

export default function IsAnon( { children }) {
    const { isLoggedIn, isLoading } = useContext(AuthContext); 

    // if authentication is still loading 
    if (isLoading) return <p>Loading ...</p>; 

    if (isLoggedIn) {
        // if user is logged in, navigate to home page 
        return <Navigate to="/" />; 
    } else {
        // if user is not logged in, allow to see the page 
        return children;
    }
}