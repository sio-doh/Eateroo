import { useContext } from "react"; 
import { AuthContext } from "../context/auth.context"; 
import { Navigate } from "react-router-dom"; 

function IsPrivate( { children }) {
    const { isLoggedIn, isLoading } = useContext(AuthContext); 

    // if authentication is still loading 
    if (isLoading) return <p>Loading ...</p>; 

    if (!isLoggedIn) {
        // if user is not logged in 
        return <Navigate to="/login" />; 
    } else {
        // if user is logged in, allow to see the page 
        return children;
    }
}

export default IsPrivate; 