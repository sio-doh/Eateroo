import { Link } from 'react-router-dom'; 
import { useParams } from 'react-router-dom'; 


export default function Home() {
    const params = useParams() 
    const id = params.id 

    return (
        <div>
            <h2> <Link to='/restaurantList'>Browse Restaurants</Link></h2> 

        </div>
    );
};  // params id