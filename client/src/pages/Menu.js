import axios from "axios"; 
import { useState } from "react";
import { useParams } from 'react-router-dom'; 
import { Link } from 'react-router-dom'; 


export default function Menu() {
    const params = useParams()
    const id = params.id 
    const [menu, setMenu] = useState([]);  

    const getMenu = () => {
        // get token from localStorage 
        const storedToken = localStorage.getItem("authToken"); 

        // send token through request "Authorization" Headers 
        axios
            // API_URL=use relative path
            .get(`/api/restaurants/${id}`,
            { headers: { Authorization: `Bearer: ${storedToken}` } }
        )
        .then((response) => {
            const oneMenu = response.data; 
            setMenu(oneMenu);
        })
        .catch((error) => console.log(error));
    }

    return (
        <div>
            <h2> <Link to='/order-complete'>Complete Order</Link></h2> 
        </div>
    );
}; 