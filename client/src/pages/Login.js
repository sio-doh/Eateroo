import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context"; 
import { Form , Button } from 'react-bootstrap';


export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
    const navigate = useNavigate();
    const { storeToken, authenticateUser } = useContext(AuthContext);

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const requestBody = { email, password };

        axios.post(`/auth/login`, requestBody)
            .then((response) => {
                // request to server's endpoint '/auth/login' returns a response 
                // with JWT string -> response.data.authToken 
                console.log('JWT token', response.data.authToken);
                // save the token in localStorage 
                storeToken(response.data.authToken);
                // verify token by sending a request to server's JWT validation endpoint. 
                authenticateUser();
                navigate('/');
            })
            .catch((error) => {
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            })
    };

    return (
        <div className="Login">
            <h1>Login</h1>

            <form onSubmit={handleLoginSubmit}>
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

                <button type="submit">Login</button>
            </form>
            {/* <Form onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Input type="email" name="email" value={email} onChange={handleEmail} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Input type="password" name="password" value={password} onChange={handlePassword} />
                </Form.Group>                 
                
                <button variant="primary" type="submit"> Login </button>
            </Form>  */}
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <p>Don't have an account yet?</p>
            <Link className="link" to={"/signup"}>Sign Up</Link>
        </div>
    )
}