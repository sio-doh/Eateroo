import axios from "axios"; 
import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Menu() {
    const params = useParams()
    const id = params.id 
    const [menu, setMenu] = useState([]);  

    useEffect(() => {
        // get token from localStorage 
        const storedToken = localStorage.getItem("authToken");
        
        axios.get(`/api/eateroo/menu/${id}`, { headers: { Authorization: `Bearer ${storedToken}` }}) 
        .then((response) => {
            console.log(response.data)
            // set state of characters
            const oneMenu = response.data; 
            setMenu(oneMenu);
        })
        .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h2> <Link className="link" to='/order-complete'>Complete Order</Link></h2> 

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Hot Wings x 12 pieces</Card.Title>
                    <Card.Text>
                        Chicken Wings served with blue cheese sauce.
                    </Card.Text>
                    <Button variant="primary">Select</Button>
                </Card.Body>
            </Card> 

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Hot Wings x 6 pieces</Card.Title>
                    <Card.Text>
                        Chicken Wings served with blue cheese sauce.
                    </Card.Text>
                    <Button variant="primary">Select</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>The Flaming Roger burger</Card.Title>
                    <Card.Text>
                        Just Swiss Cheese.
                    </Card.Text>
                    <Button variant="primary">Select</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Patty Belt burger</Card.Title>
                    <Card.Text>
                        Served on grilled sliced rye bread with fried onions, American and Swiss cheese.
                    </Card.Text>
                    <Button variant="primary">Select</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Chili burger</Card.Title>
                    <Card.Text>
                        Vegan patty, chilli sauce, red onion, pickles, jalapeño.
                    </Card.Text>
                    <Button variant="primary">Select</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Mary Jane CBD burger</Card.Title>
                    <Card.Text>
                        5% CBD oil, vegan patty,  special sauce, salad, pickles, red onion tomato.
                    </Card.Text>
                    <Button variant="primary">Select</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Zen seafood bowl</Card.Title>
                    <Card.Text>
                        Salmon, tuna, ebi tempura, salat, wasabi, rice.
                    </Card.Text>
                    <Button variant="primary">Select</Button>
                </Card.Body>
            </Card> 

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Hakunda Matata</Card.Title>
                    <Card.Text>
                        Spicy Tuna Maki / 8 crunchy sake aburi.
                    </Card.Text>
                    <Button variant="primary">Select</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Duck supreme</Card.Title>
                    <Card.Text>
                        Crisy duck served with noodles, fermented vegetables in plum sauce.
                    </Card.Text>
                    <Button variant="primary">Select</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Beef Noodle soup</Card.Title>
                    <Card.Text>
                        beef, udon noodles, peppers, bean sprouts, herbs, chives.
                    </Card.Text>
                    <Button variant="primary">Select</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Steamed Bao Dumplings</Card.Title>
                    <Card.Text>
                        pork, eggs, steamed rice dumpling, spring onions, vegetables.
                    </Card.Text>
                    <Button variant="primary">Select</Button>
                </Card.Body>
            </Card>
        </div>
    );
}; 