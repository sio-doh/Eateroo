import React from 'react'
import { Link } from 'react-router-dom'; 

export default function Home() {
    return (
        <div>
            <h2> <Link to='/restaurant'>Restaurants</Link></h2>
        </div>
    );
}