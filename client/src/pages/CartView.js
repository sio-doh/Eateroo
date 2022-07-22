import axios from "axios";
import { useState } from "react";


export default function CartView(props) {

    const [menu, setMenu] = useState([]);
    const [item, setItem] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestBody = { menu, item };

        // get token from localStorage 
        const storedToken = localStorage.getItem("authToken");

        // send token through request "Authorization" Headers 
        axios
            .post(
                `/api/projects`,
                requestBody,
                { headers: { Authorization: `Bearer ${storedToken}` } }
            )
            .then((response) => {
                // reset state 
                setMenu("");
                setItem("");
                props.refreshProjects();
            })
            .catch((error) => console.log(error));
    }

    return (
        <>

        </>
    );
};