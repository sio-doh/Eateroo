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
            <br></br><br></br>
            <h2> <Link className="link" to='/menus'>Browse Menus</Link></h2> 
            <br></br>
            {restaurants.map((restaurant) => {
                let variant = 'Success'
                return (
                    <Link to={`/menus/${restaurant._id}`}>                
                        <Card
                            bg={variant.toLowerCase()}
                            key={restaurant._id}
                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                            style={{ width: '18rem' }}
                            className="mb-2"
                        >
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>{restaurant.restaurantName} Restaurant </Card.Title> 
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                )
            } )}
        </div>
    );
}; 