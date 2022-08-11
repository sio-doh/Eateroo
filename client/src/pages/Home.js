import React from 'react'
import { Link } from 'react-router-dom'; 

export default function Home() {
    return (
        <div>
            <br></br><br></br><br></br>
            <h2> <Link className="link" to='/restaurants'>Browse Restaurants</Link></h2> 
        </div>        
    );
}