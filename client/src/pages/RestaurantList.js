import { response } from "express";

const getAllRestaurants = () => {
    // get token from localStorage 
    const storedToken = localStorage.getItem("authToken"); 

    // send token trhough request "Authorization" Headers 
    axios
    .get(
        `${API_URL}/api/resturants`, 
        { headers: { Authorization: `Bearer ${storedToken}` } } 
    )
    .then((response) => setRestaurants(response.data))
    .catch((error) => console.log(error));
};