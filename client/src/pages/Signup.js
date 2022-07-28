import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form , Button } from 'react-bootstrap';

export default function Signup(props) {
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
            <h1>Sign Up</h1>

            <Form onSubmit={handleSignupSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" name="email" value={email} onChange={handleEmail}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" name="password" value={password} onChange={handlePassword} />
                </Form.Group> 
                                
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" value={name} onChange={handleName} />
                </Form.Group>
                
                <Button variant="primary" type="submit"> Sign Up </Button>
            </Form> 
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <p>Already have an account?</p>
            <Link className="link" to={"/login"}>Login</Link>
        </div>
    )
}