import axios from "axios"; 
import { useState } from "react";
import { useParams } from 'react-router-dom'; 


function Menu() {
    const params = useParams()
    const id = params.id 
    const [menu, setMenu] = useState([]);  

    const getMenu = () => {
        // get token from localStorage 
        const storedToken = localStorage.getItem("authToken"); 

        // send token through request "Authorization" Headers 
        axios
            // API_URL=use relative path
            .get(`/api/projects/${id}`,
            { headers: { Authorization: `Bearer: ${storedToken}` } }
        )
        .then((response) => {
            const oneMenu = response.data; 
            setMenu(oneMenu);
        })
        .catch((error) => console.log(error));
    }

    return (
        <>
            
        </>
    );
}; 

export default Menu;