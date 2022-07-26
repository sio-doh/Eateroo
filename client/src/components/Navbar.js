import { Link } from "react-router-dom"; 
import { useContext } from "react"; 
import { AuthContext } from "../context/auth.context"; 

export default function Navbar() {
    // subscribe to AuthContext to gain access to values 
    // from AuthContext.Provider 'value' prop 
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext); 

    // update rendering logic to display different content 
    // depending on user being logged in or not 
    return (
        <nav>
            <Link to="/">
                <button>Home</button>
            </Link>

            {isLoggedIn && (
                <>
                    {/* <Link to="/restaurant">
                        <button>Restaurants</button>
                    </Link>  */}
            
                    {/*     UPDATE    */} 
                    <button onClick={logOutUser}>Logout</button> 
                    <span>{user && user.name}</span>
                </>
            )}

            {!isLoggedIn && (
                <>
                    <Link to="/signup"> <button>Sign Up</button> </Link> 
                    <Link to="/login"> <button>Login</button> </Link>
                </>
            )}
        </nav>
    );
}