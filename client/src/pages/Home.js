import React from 'react'
import { Link } from 'react-router-dom'; 
// import Navbar from '../components/Navbar';

export default function Home() {
    return (
        <div>
            <h2> <Link className="link" to='/restaurant'>Browse Restaurants</Link></h2> 
        </div>
    );
}