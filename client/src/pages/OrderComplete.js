import { React, useEffect, useState }  from 'react';


export default function OrderComplete() {

    const [menu, setMenu] = useState()

    useEffect(() => {
        console.log(sessionStorage.getItem('menu'));
        const menu = JSON.parse(sessionStorage.getItem('menu'));
        setMenu(menu); 
        console.log(menu)
    }, [])

    return (
        <div>   
            <br></br><br></br><br></br>         
            <h2>{menu?.menuName} <br></br> is out for delivery.</h2>
            <br></br><br></br><br></br>         
            <div>
                <img src="https://giphy.com/gifs/ubereats-uber-eats-ftMdGedrwXFHORH2WD?utm_source=media-link&utm_medium=landing&utm_campaign=Media%20Links&utm_term=https://giphy.com/" 
                className='gifphy shit goes here' alt='gifphy shit goes here' />
            </div>
        </div>
    )
}
