import axios from "axios";
import { useState } from "react";

export default function RestaurantList() {
    const [restaurant, setRestaurant] = useState([]);

    const getAllRestaurants = () => {
        // get token from localStorage 
        const storedToken = localStorage.getItem("authToken");

        // send token through request "Authorization" Headers 
        axios
            .get(
                `/api/resturant`,
                { headers: { Authorization: `Bearer ${storedToken}` } }
            )
            .then((response) => setRestaurant(response.data))
            .catch((error) => console.log(error));
    }

    return (
        <>

        </>
    );
};
