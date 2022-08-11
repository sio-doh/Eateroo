import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleName = (e) => setName(e.target.value);

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        // create an object representing request body 
        const requestBody = { email, password, name };
        // make an axios request to the API 
        // if POST request is successful redirect to login page 
        // if request resolves with an error, set error message in the state 
        axios.post(`/auth/signup`, requestBody)
            .then((response) => {
                navigate('/login');
            })
            .catch((error) => {
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            })
    };

    return (
        <div className="Signup">
            <br></br><br></br>
            <h1>EATEROO</h1>
            <br></br>
            <form onSubmit={handleSignupSubmit}>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmail}
                />

                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePassword}
                />

                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleName}
                />

                <button type="submit">Sign Up</button>
            </form> 

            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <br></br><br></br>
            <p>Already have an account?</p>
            <Link className="link" to={"/login"}>Login</Link>
        </div>
    )
}