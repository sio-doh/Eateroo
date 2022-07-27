import axios from "axios";
import { useState, useEffect } from "react";


export default function CartView(props) {

    const [menus, setMenus] = useState([]);

    useEffect(() => {
        const requestBody = { menus };

        // get token from localStorage 
        const storedToken = localStorage.getItem("authToken");

        // send token through request "Authorization" Headers 
        axios.post(`/api/eateroo`, requestBody, { headers: { Authorization: `Bearer ${storedToken}` } })
        .then((response) => {
            // reset state 
            setMenus("");
            props.refreshEateroo();
        })
        .catch((error) => console.log(error));
    }, [])

    return (
        <div>
            <br></br><br></br><br></br>
            <h2>Shopping Cart.</h2>

        </div>
    );
};