import { Link } from 'react-router-dom'; 
import { useParams } from 'react-router-dom'; 


export default function Home() {
    const params = useParams() 
    const id = params.id 

    return (
        <>
            <h2> <Link to='/restaurantList'>Select from Restaurants</Link></h2> 

        </>
    );
};// params id