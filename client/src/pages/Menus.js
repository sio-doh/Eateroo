import axios from "axios"; 
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom'; 
import { Button, Card } from 'react-bootstrap';


export default function Menus() {
    const params = useParams()
    const id = params.id 
    const [restaurant, setRestaurant] = useState([]);  
    const navigate = useNavigate();
    
    const handleAddToCart = (menu) => {
        sessionStorage.setItem('menu', JSON.stringify(menu));
        navigate("/order-complete");
    }

    useEffect(() => {
        console.log("HELLO WORLD")
        // get token from localStorage 
        const storedToken = localStorage.getItem("authToken");
        
        axios.get(`/api/eateroo/restaurants/${id}`, { headers: { Authorization: `Bearer ${storedToken}` }}) 
        .then((response) => {
            console.log("HELLO", response.data)
            // set state of characters
            const restaurant = response.data; 
            setRestaurant(restaurant);
        })
        .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <br></br><br></br>
            <h2> <Link className="link" to='/order-complete'>Complete Order</Link></h2> 
            <br></br>
            {restaurant?.menus?.map((menu) => {
                let variant= 'Success'
                return (
                    <Link to={`/menus/${menu._id}`}>                
                        <Card
                            bg={variant.toLowerCase()}
                            key={menu._id}
                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                            style={{ width: '18rem' }}
                            className="mb-2"
                        >
                            <Card.Header>Menu</Card.Header>
                            <Card.Body>
                                <Card.Title>{menu.menuName} </Card.Title> 
                                <Card.Text>
                                {menu.menuDescription} 
                                <br></br> {menu.menuPrice} <br></br> {menu.menuImg}
                                </Card.Text> 
                                {/* wrapping menu in function */} 
                                <Link to={`/order-complete`}>
                                    <Button onClick={() => {handleAddToCart(menu)}}>Add to Cart</Button> 
                                </Link>
                            </Card.Body>
                        </Card>
                    </Link>
                )
            } )}
        </div>
    );
}; 