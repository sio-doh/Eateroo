import { response } from "express";
import axios from "axios"; 
import { useState } from "react";

function RestaurantList() {
    const [restaurant, setRestaurant] = useState([]);  

    const getAllRestaurants = () => {
        // get token from localStorage 
        const storedToken = localStorage.getItem("authToken"); 

        // send token trhough request "Authorization" Headers 
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

export default RestaurantList;