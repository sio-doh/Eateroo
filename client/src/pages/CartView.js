import { response } from "express";

const handleSubmit = (e) => {
    e.preventDefault(); 
    const requestBody = { menu, item}; 

    // get token from localStorage 
    const storedToken = localStorage.getItem("authToken"); 

    // send token through request "Authorization" Headers 
    axios
    .post(
        `${API_URL}/api/projects`, 
        requestBody, 
        { headers: { Authorization: `Bearer ${storedToken}` } }
    )
    .then((response) => {
        // reset state 
        setMenu(""); 
        setItem("");
        props.refreshProjects();
    })
    .catch((error) => console.log(error));
};