const getRestaurant = () => {
    // get token from localStorage 
    const storedToken = localStorage.getItem("authToken"); 

    // send token through request "Authorization" Headers 
    axios
    .get(`${API_URL}/api/projects/${menuId}`,
    { headers: { Authorization: `Bearer: ${storedToken}` } }
    )
    .then((response) => {
        const oneMenu = response.data; 
        setMenu(oneMenu);
    })
    .catch((error) => console.log(error));
};