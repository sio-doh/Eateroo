import { Link, useParams } from 'react-router-dom'; 
import { useState, useEffect } from "react";
import axios from "axios"; 
import Card from 'react-bootstrap/Card';


export default function Restaurants() {
    const [restaurants, setRestaurants] = useState([]);
    const params = useParams() 
    const id = params.id 
    
    useEffect(() => {
        // get token from localStorage 
        const storedToken = localStorage.getItem("authToken");

        // fetch data from beers api
        axios.get(`/api/eateroo/restaurants`, { headers: { Authorization: `Bearer ${storedToken}` }}) 
        .then(response => {
            console.log(response.data)
            // set state of characters
            setRestaurants(response.data)
        })
        .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h2> <Link className="link" to='/menu'>Browse Menus</Link></h2> 
        
        {[
            'The Bird',
            'Vedang - plant burger (Alexa)',
            'Restaurant ZEN',
            'Royals & Rice Berlin',
        ].map((variant) => (
        <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2"
        >
            <Card.Body>
                <Card.Title>{variant} Restaurant </Card.Title>
            </Card.Body>
        </Card>
        ))}
        </div>
    );
}; 