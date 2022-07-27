import React from 'react'
import { Link } from 'react-router-dom'; 
// import Restaurants from './Restaurants';
// import Navbar from '../components/Navbar';

export default function Home() {
    return (
        <div>
            <br></br><br></br><br></br>
            <h2> <Link className="link" to='/restaurants'>Browse Restaurants</Link></h2> 
            {/* <Restaurants /> */}
        </div>
    );
}