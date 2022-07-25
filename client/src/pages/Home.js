import { Link } from 'react-router-dom'; 
// import Navbar from '../components/Navbar';

export default function Home() {
    return (
        <div>
            <h2> <Link to='/restaurants'>Browse Restaurants</Link></h2> 
        </div>
    );
};